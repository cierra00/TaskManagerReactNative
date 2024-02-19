import React, { useState } from 'react';
import { View, Text, CheckBox, TextInput, Button } from 'react-native';
import TaskData from './data/TaskData'

const ListWithCheckbox = () => {
  const [items, setItems] = useState(TaskData);
  const [newItemTitle, setNewItemTitle] = useState(' ');
  const [newItemDescription, setNewItemDescription] = useState(' ');

  const handleCheckboxChange = (itemId) => {
    const updatedItems = items.map(item =>
      item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
    );
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    if (newItemTitle && newItemDescription) {
      const newItem = {
        id: Date.now(),
        title: newItemTitle,
        description: newItemDescription,
        isChecked: false,
      };
      setItems([...items, newItem]);
      setNewItemTitle('');
      setNewItemDescription('');
    }
  };

  const handleRemoveItem = (itemId) => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Title"
        value={newItemTitle}
        onChangeText={setNewItemTitle}
        style={{ marginBottom: 10, paddingHorizontal: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <TextInput
        placeholder="Description"
        value={newItemDescription}
        onChangeText={setNewItemDescription}
        style={{ marginBottom: 10, paddingHorizontal: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <Button title="Add Item" onPress={handleAddItem} />
      {items.map(item => (
        <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
          <CheckBox
            value={item.isChecked}
            onValueChange={() => handleCheckboxChange(item.id)}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
          <Button title="Remove" onPress={() => handleRemoveItem(item.id)} />
        </View>
      ))}
    </View>
  );
};

export default ListWithCheckbox;
