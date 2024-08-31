import React from 'react';
import { View, Image,StyleSheet} from 'react-native';
import Logo from '../assets/logo.png';


const IntroScreen = () => {
  return (
   <View style = {styles.container}>
    <View style = {styles.inner}>
    <Image style={styles.innerimg} source={Logo}/>
    </View>
   </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner:{
    backgroundColor:'teal',
    width:'95%',
    height:'95%',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'column',
    borderRadius:8,
  },
  innerimg:{
    width:'60%',
    height:'35%',
    borderRadius:5,
   

  }

})

export default IntroScreen;
