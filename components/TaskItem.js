import React from 'react'
import {View, Text, TouchableOpacity, CheckBox} from 'react-native';
import DeleteTask from '../components/DeleteTask';
import CheckComponent from './CheckComponent';

const TaskItem = ({styles, task, handleCheck, deleteTask}) => {
  return (
    
    <View>
    <TouchableOpacity
       key = {task.id}
       style = {styles}
       onPress = {() => handleCheck(task)}>
       <Text style = {styles}>
       
         {task.id}<br />
         {task.title}<br />
         {task.description}<br />
         {task.isComplete}<br />
         
         
            <CheckComponent
            title="title"
            name="Name"
            checkedColor='red'
            value={task.isComplete}
            onValueChange={()=>handleCheck(task.id)}
            />
          <DeleteTask  onPress={()=>deleteTask(task.id)} />
          <hr />
        </Text>
    </TouchableOpacity>
    </View>
  )
  
}

export default TaskItem
