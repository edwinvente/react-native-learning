import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlexScreen } from './src/screens/FlexScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <FlexScreen />
    </SafeAreaView>
  )
}