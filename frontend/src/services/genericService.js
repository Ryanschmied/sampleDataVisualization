import http from "../http-base";

// Creates generic service abstraction 
const createService = (endpoint) => ({
  getAll: () => http.get(`/${endpoint}`),
  get: (id) => http.get(`/${endpoint}/${id}`),
  create: (data) => http.post(`/${endpoint}`, data),
  update: (id, data) => http.put(`/${endpoint}/${id}`, data),
  remove: (id) => http.delete(`/${endpoint}/${id}`),
  removeAll: () => http.delete(`/${endpoint}`)
});

export default createService;
