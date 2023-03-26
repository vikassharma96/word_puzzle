import settings from '../config/settings';

const wordsApi = (categoryId: string) =>
  fetch(`${settings.apiUrl}/categories/${categoryId}`);

export default wordsApi;
