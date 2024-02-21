import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DeleteTask from '../components/DeleteTask';
import CheckComponent from './CheckComponent';
import { Card } from '@rneui/themed';

const TaskItem = ({styles, task, handleCheck, deleteTask}) => {
  const myStyle = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: 'yellow',
    },
    card:{
      flex:1,
      flexDirection: 'column'
    },
    check:{
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent:'center',
      alignItems: 'center'
    }
  });
  return (
    
    <View style={{flexDirection:'column', alignContent:'center', justifyContent:'center', padding: 1}}>
    <Card>
    <TouchableOpacity
       key = {task.id}
       style = {myStyle.card}
       onPress = {() => handleCheck(task)}>
      
       
       
         <Card.Title>{task.title}</Card.Title>
         <Text>{task.description}</Text>
         <Text> {task.isComplete}</Text>
         
           <View style={myStyle.check}>
           <CheckComponent
            title="title"
            name="Name"
            checkedColor='blue'
            value={task.isComplete}
            onValueChange={()=>handleCheck(task.id)}
            />
          <DeleteTask style={styles
          } onPress={()=>deleteTask(task.id)} />
           </View>

       
    </TouchableOpacity>
    </Card>
    </View>
  )
  
}

export default TaskItem
