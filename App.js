import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import Tasks from './components/Tasks';
import Header from './components/Header'


export default function App() {

 
      
    return (
      <SafeAreaView style={styles.container}>         
        <Tasks  styles={styles}/>             
      </SafeAreaView>
    );
   
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
     backgroundColor: 'light-green',
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: '#fff'
    },
    title: {
      fontSize: 32,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 2,
      borderColor: "#397af8",
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    checkbox: {
      alignSelf: 'center',
    },
    header:{
      fontSize: 40
    }
  });
  
