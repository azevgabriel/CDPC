import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import { styles } from './styles';

interface Props {
  name: string;
  type: string;
}

export const KitCard = ({name, type}: Props) => {

  const [hexColor, setHexColor] = useState("");

  useEffect(() => {
    switch (type) {
      case "quimica":
        setHexColor("#DDB771");
        break;
      case "fisica":
        setHexColor("#C17767");
        break;
      case "biologia":
        setHexColor("#6BBF59");
        break;
    }
  }, [type]);

  return (
    <View style={[styles.container, {backgroundColor: hexColor}]}>
      { (type === 'quimica') && <Fontisto name="test-tube-alt" size={28} color="white" />}
      { (type === 'biologia') && <Entypo name="leaf" size={30} color="white" />}
      { (type === 'fisica') && <Fontisto name="atom" size={30} color="white" />}
      <Text
        style={styles.text}
      >
        {name}
      </Text>
    </View>
  );
}