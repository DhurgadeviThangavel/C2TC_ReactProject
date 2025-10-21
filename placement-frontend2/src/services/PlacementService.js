import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/placements";

class PlacementService {
  getPlacements() { return axios.get(BASE_URL); }
  createPlacement(placement) { return axios.post(BASE_URL, placement); }
  getPlacementById(id) { return axios.get(`${BASE_URL}/${id}`); }
  updatePlacement(id, placement) { return axios.put(`${BASE_URL}/${id}`, placement); }
  deletePlacement(id) { return axios.delete(`${BASE_URL}/${id}`); }
}

export default new PlacementService();
