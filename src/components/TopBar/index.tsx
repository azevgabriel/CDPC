import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';
import colors from '../../styles/colors';

export const TopBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Bem vindo, </Text>
        <Text style={styles.textStrong}>Mateus</Text>
      </View>
      <FontAwesome name="user-circle-o" size={75} color={colors.white} />
    </View>
  );
}