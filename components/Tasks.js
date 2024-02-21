import React,{useState, useEffect} from 'react'
import {ScrollView, Text} from 'react-native';
import uuid from 'react-native-uuid';
import AddTaskForm from './AddTaskForm';
import TaskItem from './TaskItem';
import TaskData from './data/TaskData'
import Header from '../components/Header';


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
      <Header style={styles} />
      <AddTaskForm  
        style={styles} 
        titleValue={title}
        onChangeTitleText={setTitle} 
        titlePlaceHolder={title} 
        descriptionValue={description}
        onChangeDescriptionText={setDescription} 
        descriptionPlaceHolderPlaceHolder={description} 
        onPress={()=>addTask()}

        />
    
            { taskList.length > 0? taskList.map((task) => (
                <TaskItem style={styles} 
                task={task} handleCheck={handleCheck} 
                deleteTask={deleteTask}
                key={task.id}
                
                />
               )) : <Text style={{ justifyContent: 'center'}}>No Tasks</Text>
            }
         
        
        </ScrollView>
  )
}

export default Tasks;
