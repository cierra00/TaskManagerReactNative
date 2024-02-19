import React from 'react'
import { TextInput, View} from 'react-native';
import { Button } from '@rneui/base';
import SubmitButton from './SubmitButton';

const AddTaskForm = ({style, titleValue, onChangeTitleText, titlePlaceHolder, descriptionValue, onChangeDescriptionText, descriptionPlaceHolder, onPress }) => {
    
  return (
    <View>
        <TextInput
        requiured
        name="Title"
        id="title"
        onChangeText={onChangeTitleText}
        style={style}
        placeholder={titlePlaceHolder}
        value={titleValue}
       
    
  />
 
        <TextInput
        name="description"
        id="description"
        onChangeText={onChangeDescriptionText}
        style={style}
        placeholder={descriptionPlaceHolder}
        value={descriptionValue}
       
    
  />
  
  
  <SubmitButton onPress={onPress} />
    </View>
  )
}

export default AddTaskForm;