import React, { useState } from 'react';
import PlacementService from '../services/PlacementService';
import { useNavigate } from 'react-router-dom';

function AddPlacement() {
  const [placement, setPlacement] = useState({
    companyName: '',
    role: '',
    packageOffered: '',
    date: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPlacement({...placement, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PlacementService.createPlacement(placement).then(() => navigate("/"));
  };

  return (
    <div>
      <h2 className="mb-3">Add Placement</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Company</label>
          <input className="form-control" name="companyName" placeholder="Company" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <input className="form-control" name="role" placeholder="Role" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Package</label>
          <input className="form-control" type="number" step="0.1" name="packageOffered" placeholder="Package" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Date</label>
          <input className="form-control" type="date" name="date" onChange={handleChange} required />
        </div>
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPlacement;
