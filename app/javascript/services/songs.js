import Api from './api';

const SongsService = {
  create: (params) => Api.post(`/songs`, params)
}

export default SongsService;

