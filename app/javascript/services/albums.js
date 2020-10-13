import Api from './api';

const AlbumsService = {
  index: () => Api.get('/dashboard.json'),
  show: (id) => Api.get(`/albums/${id}`)
}

export default AlbumsService;
