import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';
import config from './src/config/config';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={config.colors.white}
        translucent={false}
      />
      <RootNavigation />
    </SafeAreaProvider>
  );
}

export default App;
