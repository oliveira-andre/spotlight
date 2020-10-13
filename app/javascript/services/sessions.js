import Api from './api';

const SearchService = {
  create: (params) => Api.post(`/sessions`, { session: params })
}

export default SearchService;
