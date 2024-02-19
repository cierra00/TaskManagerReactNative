import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

const DeleteTask = ({onPress}) => {
    const style = StyleSheet.create({
        icon: {
          color: 'blue',
          width: 20
        }
      })


  return (
    <View>
    <Button
    text="Button"
    title={<FontAwesomeIcon icon={ faTrash} style={ style.icon } />}
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    onPress={onPress}
  > <FontAwesomeIcon icon={ faTrash} style={ style.icon } /></Button> 
    </View>
  )
}

export default DeleteTask