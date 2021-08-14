import React, { useEffect, useState } from 'react';
//import { ImageSourcePropType } from 'react-native';
import { View, Image, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

interface Props {
  name: string;
  type: "quimica" | "fisica" | "biologia";
  //path: ImageSourcePropType;
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
      <AntDesign name="picture" size={46} color="white" />
      {/*<Image 
        style={styles.image}
        source={path} 
      />*/}
      <Text
        style={styles.text}
      >
        {name}
      </Text>
    </View>
  );
}