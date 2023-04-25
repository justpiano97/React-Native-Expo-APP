import Router from './navigation';
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
