import Api from './api';

const SessionsService = {
  create: (params) => Api.post(`/sessions`, { session: params })
}

export default SessionsService;
