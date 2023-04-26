import React , { useState } from 'react'

import { StyleSheet, StatusBar, View, Text, FlatList, SafeAreaView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';


import Item from './Item';

import { cats } from './breeds'


function HomeScreen() {
    const [search, setSearch] = useState('')
    return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <SafeAreaView style={styles.container}>
    <View>
     <TextInput
     style={styles.search} 
     placeholder="Search"
     onChangeText={setSearch}
     value={search}
    />
    </View>
    <StatusBar style="auto" />
    <View style={styles.listContainer}>
    <FlatList
     data = {cats.filter(item => item.breed.includes(search))}
     renderItem = {({ item, index}) => {
     return <Item index={index} data={item}/>
    }}
     keyExtractor = {item => item.breed}
    />
    </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    listContainer: {
      width: '100%'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginTop: 40 
    },
    search: {
      fontSize: 24,
      textAlign: 'center',
      padding: 10,
      borderWidth: 1,
      width: 200,
      marginBottom: 5
    }
  });
