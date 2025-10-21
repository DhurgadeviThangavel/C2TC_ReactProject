import React, { useEffect, useState } from 'react';
import PlacementService from '../services/PlacementService';
import { useNavigate } from 'react-router-dom';

function PlacementList() {
  const [placements, setPlacements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlacements();
  }, []);

  const fetchPlacements = () => {
    PlacementService.getPlacements().then(res => setPlacements(res.data));
  };

  const handleDelete = (id) => {
    PlacementService.deletePlacement(id).then(() => fetchPlacements());
  };

  return (
    <div>
      <h2 className="mb-3">Placement List</h2>
      <center><button className="btn btn-success mb-3" onClick={() => navigate("/add")}>Add Placement</button></center>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Role</th>
            <th>Package</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {placements.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.companyName}</td>
              <td>{p.role}</td>
              <td>{p.packageOffered}</td>
              <td>{p.date}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2" onClick={() => navigate(`/update/${p.id}`)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlacementList;
