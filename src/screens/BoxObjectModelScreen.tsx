import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={ styles.title }>Box Object Model</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:"#eaeaea"
    },
    title:{
      paddingHorizontal:20,
      paddingVertical:20,
      marginRight: 10,
      marginLeft:10,
      fontSize:20,
      //width: 250,
      borderWidth:10
    }
});
