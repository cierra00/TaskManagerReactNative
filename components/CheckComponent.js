import React from 'react'
import { CheckBox } from 'react-native';

const CheckComponent = ({styles, value, onValueChange, checked}) => {
  return (
    <CheckBox title="title"
            style={styles}
            name="Name"
            checkedColor='red'
            value={value}
            onValueChange={onValueChange}
            on
            />
  )
}

export default CheckComponent