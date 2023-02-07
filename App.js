import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, StyleSheet } from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
      <MainNavigator/>
      <StatusBar style="light" />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02194d',
  },
});
