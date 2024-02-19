import React from 'react'
import { Button } from 'react-native';

const SubmitButton = ( {styles, onPress}) => {
  return (
    <Button
    text="Button"
    title="Submit New Task"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    onPress = {onPress}
  />
  )
}

export default SubmitButton;