import { View, Text } from 'react-native';
import Home from './page/Home';
import Router from './Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </>
  );
}
