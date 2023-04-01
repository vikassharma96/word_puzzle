import React, {useEffect} from 'react';
import AppNavigator from './navigation/AppNavigator';
import {ThemeProvider} from './contexts/theme';
import {UsersProvider} from './contexts/usersData';
import ErrorBoundary from './components/ErrorBoundary';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <UsersProvider>
          <AppNavigator />
        </UsersProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
