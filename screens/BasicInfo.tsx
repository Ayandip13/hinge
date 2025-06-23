/* eslint-disable */
import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';

const BasicInfo = () => {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#fff' }}>
      <View>
        <Text
          style={{
            marginTop: 80,
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 30,
          }}
        >
          You're one of a kind
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 30,
          }}
        >
          Your profile should be too.
        </Text>
      </View>
      <View>
        <LottieView
          style={{
            height: 260,
            width: 300,
            alignSelf: 'center',
            marginTop: 40,
            justifyContent: 'center',
          }}
          source={require('../assets/love.json')}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default BasicInfo;
