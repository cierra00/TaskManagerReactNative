import React,{useState, useEffect} from 'react'
import {CheckBox,Text, View, TouchableOpacity, ScrollView} from 'react-native';
import uuid from 'react-native-uuid';
import AddTaskForm from './AddTaskForm';
import TaskItem from './TaskItem';
import TaskData from './data/TaskData'


const Tasks = ({styles}) => {

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [taskList, setTaskList]= useState(TaskData);
const [isSelected, setSelection] = useState(false);



function addTask(){

    const task = {
      id: uuid.v4(),
      title: title,
      description: description,
      isComplete: false
     
   }

    setTaskList(oldList=>[task,...oldList]);
  setTitle('');
  setDescription('');
  console.log([task, ...taskList])
   
 }
  
  
  function deleteTask(id){
    console.log(`This works and passes the id: ${id}`);
      const filteredData = taskList.filter((task)=> task.id !== id)
      setTaskList(filteredData);
  
    }
    
    const handleCheck = (taskId) => {
      const listItems = taskList.map((item) => item.id=== taskId ? { ...item, isComplete: !item.isComplete } : item);
      setTaskList(listItems);
      console.log(listItems)
  }
  return (
    <ScrollView>
      <AddTaskForm  
        style={styles.input} 
        titleValue={title}
        onChangeTitleText={setTitle} 
        titlePlaceHolder={title} 
        descriptionValue={description}
        onChangeDescriptionText={setDescription} 
        descriptionPlaceHolderPlaceHolder={description} 
        onPress={()=>addTask()}

        />
    
            {taskList.map((task) => (
                <TaskItem style={styles.container} 
                task={task} handleCheck={handleCheck} 
                deleteTask={deleteTask}
                key={task.id}
                
                />
               ))
            }
         
        
        </ScrollView>
  )
}

export default Tasks;
//test