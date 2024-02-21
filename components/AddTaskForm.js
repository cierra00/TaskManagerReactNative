import React from 'react'
import { TextInput, View} from 'react-native';
import SubmitButton from './SubmitButton';
import { Input } from '@rneui/themed';

const AddTaskForm = ({style, titleValue, onChangeTitleText, titlePlaceHolder, descriptionValue, onChangeDescriptionText, onPress }) => {
    const styles=({
      marginTop: 100
    })
  return (
    <View style={{marginTop: 20}}>
        <Input
        requiured
        type="solid"
        name="Title"
        id="title"
        onChangeText={onChangeTitleText}
        style={style}
        placeholder=" Task Name"
        value={titleValue}
       
    
  />
 
        <Input
        name="description"
        id="description"
        onChangeText={onChangeDescriptionText}
        style={style}
        placeholder="Task Description"
        value={descriptionValue}
       
    
  />
  
  
  <SubmitButton onPress={onPress} />
    </View>
  )
}

export default AddTaskForm;