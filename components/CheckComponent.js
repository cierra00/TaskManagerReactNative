import React from 'react'
import { StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'

const CheckComponent = ({styles, value, onValueChange}) => {
  const style = StyleSheet.create({
    
    button:{
      width: 50,
      backgroundColor: 'yellow',
      checkedColor: 'green'
    }
  })
  return (
    <CheckBox title="Completed"
            style={style.button}
            name="Name"
            checkedColor='red'
            checked={value}
            size={20}
            
            onPress={onValueChange}
            on
            />
  )
}

export default CheckComponent