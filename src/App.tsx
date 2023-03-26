import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {ThemeProvider} from './contexts/theme';
import {UsersProvider} from './contexts/usersData';

const App = () => {
  return (
    <ThemeProvider>
      <UsersProvider>
        <AppNavigator />
      </UsersProvider>
    </ThemeProvider>
  );
};

export default App;
