import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from './page/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
