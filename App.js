import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import ListItem from './components/ListItem';
import Header from './components/Header';
import AddItem from './components/AddItem';
import uuid from 'uuid';


const App = () => {
  const [items, setItem] = useState([
    { id: uuid(), text: 'Almond Milk' },
    { id: uuid(), text: 'Flax seeds' },
    { id: uuid(), text: 'Oats' },
    { id: uuid(), text: 'Beans in can' },
  ]);

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter text in field');
    }
    else {
      setItem(prevItem => {
        return [{ id: uuid(), text: text }, ...prevItem]
      });
    }



  };

  const deleteItem = (id) => {
    setItem(prevItem => {
      return prevItem.filter(item => item.id != id)
    });
  }


  return (
    <View style={style.container} >
      <Header />
      <AddItem AddItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => (
        <ListItem item={item} deleteItem={deleteItem} />
      )} />
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  }
}
)

export default App;