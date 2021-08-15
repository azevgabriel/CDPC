import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

interface Props {
  id: number;
  name: string;
  type: string;
}

export const KitCard = ({id, name, type}: Props) => {

  const navigation = useNavigation();
  const [hexColor, setHexColor] = useState("");

  function handleDetail() {
    navigation.navigate('Detail', {idSelected: id});
  };

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
    <RectButton 
      style={[styles.container, {backgroundColor: hexColor}]}
      onPress={() => handleDetail()}
    >
      { (type === 'quimica') && <Fontisto name="test-tube-alt" size={28} color="white" />}
      { (type === 'biologia') && <Entypo name="leaf" size={30} color="white" />}
      { (type === 'fisica') && <Fontisto name="atom" size={30} color="white" />}
      <Text
        style={styles.text}
      >
        {name}
      </Text>
    </RectButton>
  );
}