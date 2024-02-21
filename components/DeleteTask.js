import React from 'react'
import { View, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

const DeleteTask = ({onPress, styles}) => {
    const style = StyleSheet.create({
        icon: {
          color: 'red',
          width: 20,
          backgroundColor: 'primary'
        },
        button:{
          width: 50
        }
      })


  return (
    <View>
    <Button
    style={style.button}
    text="Button"
    size="lg"
    icon={<FontAwesomeIcon icon={ faTrash} style={style.icon} />}
    
    color="warning"
    accessibilityLabel="Learn more about this purple button"
    onPress={onPress}
  > <FontAwesomeIcon icon={ faTrash} style={ style.icon } /></Button> 
    </View>
  )
}

export default DeleteTask