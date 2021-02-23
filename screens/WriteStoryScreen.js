import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class WriteStoryScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader title = 'Write Story Screen'/>
        <TextInput placeholder="Title of the Story"></TextInput>
        <TextInput placeholder="Author of the Story" style={{marginTop: 10}}></TextInput>
        <TextInput placeholder="Write Story" multiline numberOfLines={10} style={{marginTop: 10}}></TextInput>
        <TouchableOpacity style = {styles.submitButton}>
            <Text style = {styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    submitButton:{ 
        marginTop: 20, 
        width: 100, 
        height: 50,
        borderWidth: 2, 
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: "#FFD3CA",
    },
    submitText:{
        fontWeight: 'bold',
    }
}) 