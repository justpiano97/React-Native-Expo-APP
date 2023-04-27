import Router from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <MenuProvider>
          <Router />
        </MenuProvider>
      </SafeAreaProvider>
    </>
  );
}
