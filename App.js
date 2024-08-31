import { StyleSheet, Text, View, } from 'react-native';
import { useState } from 'react';
import MainScreen from './Views/MainScreen';
import IntroScreen from './Views/IntroScreen';
export default function App() {

  const [isLoading, setIsLoading] = useState(false)
  setTimeout(() =>{
    setIsLoading(true);
  },3000)
  return (
    <View style={styles.container}>
      {isLoading ?< MainScreen/> :< IntroScreen/>}
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
