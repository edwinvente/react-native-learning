import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title:string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({ title, onPress, position = 'br' }:Props) => {
    
    const android = () => {
        return (
            <View
                style={[styles.fabLocation, (position === 'bl' ? styles.left : styles.right)]}
            >
                <TouchableNativeFeedback
                        onPress={onPress}
                        background={TouchableNativeFeedback.Ripple('#28425b', false, 30)}
                    >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
    const ios = () => {
        return (
            <TouchableOpacity
                    activeOpacity={ 0.7 }
                    onPress={onPress}
                    style={[styles.fabLocation, (position === 'bl' ? styles.left : styles.right)]}
                >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

  return (Platform.OS === 'ios') ? ios() : android()
}

const styles = StyleSheet.create({
    fabLocation:{
        position: 'absolute',
        bottom: 25,
    },
    left:{
        left: 25,
    },
    right:{
        right: 25,
    },
    fab:{
        backgroundColor:'#5856d6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 8,
    },
    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf:'center'
    }
})