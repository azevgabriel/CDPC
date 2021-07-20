import React from 'react';
import { View, Text, Image } from 'react-native';

import emptyProfilePicture from '../../assets/emptyProfilePicture.png'

import { styles } from './styles';

export const TopBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Bem vindo, </Text>
        <Text style={styles.text}>Mateus</Text>
      </View>
      <Image 
        source={emptyProfilePicture} 
        style={styles.rightContainer}
      />
    </View>
  );
}