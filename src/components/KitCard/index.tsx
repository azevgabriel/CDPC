import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

interface Props {
  name: string;
  path: ImageSourcePropType;
}

export const KitCard = ({path, name}: Props) => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={path} 
      />
      <Text
        style={styles.text}
      >
        {name}
      </Text>
    </View>
  );
}