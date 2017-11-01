let baseName = '/transfersmart';

if (process.env.NODE_ENV === 'development') {
  baseName = '';
}

const AppSettings = {
  base_name: baseName
};

export default AppSettings;
