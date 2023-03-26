import settings from '../config/settings';

const categoriesApi = () => fetch(`${settings.apiUrl}/categories/`);

export default categoriesApi;
