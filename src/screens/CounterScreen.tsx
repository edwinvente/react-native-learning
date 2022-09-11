import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
    const [contador, setcontador] = useState(10)
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Contador: {contador}
        </Text>
        <Fab 
            title="+1"
            onPress={() => setcontador(contador + 1)}
        />
        <Fab 
            title="-1"
            onPress={() => setcontador(contador - 1)}
            position='bl'
        />
        {/* <TouchableOpacity
            style={styles.fabLocationBL}
            onPress={() => setcontador(contador - 1)}
        >
            <View style={styles.fab}>
                <Text style={styles.fabText}>-1</Text>
            </View>
        </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#eaeaea',
        justifyContent: 'center'
    },
    title:{
        textAlign: 'center',
        fontSize: 40,
        top: -15
    },
    containerBtn:{
        backgroundColor:'blue',
        padding: 10,
    },
    btn:{
        color: 'white',
        textAlign:'center'
    },
    
});