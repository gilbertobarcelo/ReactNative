import { StyleSheet, Text, View, StatusBar} from 'react-native';
import {
  useFonts, 
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
  } from "@expo-google-fonts/inter"
import { useReducer } from 'react';

import { Loading } from './components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  
   })
   if(!fontsLoaded){
    return(
   <Loading />
    );
   }


  return (
    <View style={styles.container}>
    <Text style={styles.text}>Hello Word</Text>
    <StatusBar animated={true} backgroundColor="#7C3AED"
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#7C3AED',
    fontFamily: 'Inter_800ExtraBold',
    fontSize: 30,

  }
});
