import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DeleteTask from '../components/DeleteTask';
import CheckComponent from './CheckComponent';
import { Card } from '@rneui/themed';

const TaskItem = ({styles, task, handleCheck, deleteTask}) => {
  const [taskChecked, setTaskChecked] = useState("myStyle.box")
  const myStyle = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: 'yellow',
    },
    card:{
      flex:1,
      flexDirection: 'column',
      backgroundColor: 'red'
    },
    box:{
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent:'center',
      alignItems: 'center',
      
    },
    check:{
      backgroundColor: 'green'
    },
    notCheck:{
      backgroundColor: '#fff'
    },
    completed: {
      backgroundColor: '#98fb98'
    }
  });
  return (
    
    <View style={{flexDirection:'column', alignContent:'center', justifyContent:'center', padding: 1}}>
    <Card>
    <TouchableOpacity
       key = {task.id}
       style = {task.isComplete? myStyle.completed: myStyle.notCheck}
       onPress = {() => handleCheck(task)}>
      
       
       
         <Card.Title style={myStyle.box}>{task.title}</Card.Title>
         <Text>{task.description}</Text>
         <Text> {task.isComplete}</Text>
         
           <View style={myStyle.box}>
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
