import React from 'react'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SubmitButton = ( {styles, onPress}) => {
  return (
    <Button
    style={{"width": '90%', flex: 1, "marginLeft": "auto", "marginRight": "auto"}}
    text="Button" 
  
    title="Submit New Task"
    color="red"
    accessibilityLabel="Learn more about this purple button"
    onPress = {onPress}
  />
  )
}

export default SubmitButton;