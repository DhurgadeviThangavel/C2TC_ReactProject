import React, { useState, useEffect } from 'react';
import PlacementService from '../services/PlacementService';
import { useNavigate, useParams } from 'react-router-dom';

function UpdatePlacement() {
  const [placement, setPlacement] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    PlacementService.getPlacementById(id).then(res => setPlacement(res.data));
  }, [id]);

  const handleChange = (e) => {
    setPlacement({...placement, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PlacementService.updatePlacement(id, placement).then(() => navigate("/"));
  };

  return (
    <div>
      <h2 className="mb-3">Update Placement</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Company</label>
          <input className="form-control" name="companyName" value={placement.companyName || ''} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <input className="form-control" name="role" value={placement.role || ''} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Package</label>
          <input className="form-control" type="number" step="0.1" name="packageOffered" value={placement.packageOffered || ''} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Date</label>
          <input className="form-control" type="date" name="date" value={placement.date || ''} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary" type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdatePlacement;
