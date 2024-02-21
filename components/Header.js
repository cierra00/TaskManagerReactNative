import React from 'react'
import {StyleSheet, View} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Header = () => {
  return (
    <SafeAreaProvider style={{}}>
    <View style={styles.tryThis}>
    <HeaderRNE
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        position: 'fixed',
      }}
      
      centerComponent={{ text: 'TaskManager', style: styles.heading }}
    />
    </View>
  </SafeAreaProvider>
);
};

const styles = StyleSheet.create({
headerContainer: {
 flexDirection: 'column',
 flex:2,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#397af8',
  marginBottom: 20,
  width: '100%',
  paddingVertical: 15,
},
heading: {
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold',
},
headerRight: {
  display: 'flex',
  flexDirection: 'row',
  marginTop: 5,
},
subheaderText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
tryThis:{
   
   

}
});

export default Header;