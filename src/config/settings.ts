const settings = {
  dev: {
    apiUrl: 'http://192.168.1.6:3000/api',
  },
  staging: {
    apiUrl: 'http://192.168.1.6:3000/api',
  },
};

const getCurrentSettings = () => {
  return __DEV__ ? settings.dev : settings.staging;
};

export default getCurrentSettings();
