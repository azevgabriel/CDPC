import React from 'react';

import { useNavigation } from '@react-navigation/native';
import {Image, Text, TextInput, View, Linking} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import cdpcLogo from '../../assets/images/cdpc_logo.png';

import { styles } from './styles';

export function Login (){

  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  };

  function handleFAQ() {
    navigation.navigate('FAQ');
  };
  
  return (
    <View style={styles.container}>
      <Image 
        source={cdpcLogo}
        style={styles.image}
      />

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.text}>Servidores (Nº SIAPE) /</Text>
          <Text style={styles.text}>Contratados (CPF)</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.textLabel}>Senha.</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.row}>
          <RectButton 
            style={styles.button}
            onPress={handleSignIn}
          >
            <Text style={styles.textButton}>Entrar</Text>
          </RectButton>
        </View>
        <View style={styles.rowRight}>
          <Text style={styles.textRight}>Primeiro Acesso?</Text>
          <Text style={styles.textRight}>Esqueceu a senha?</Text>
          <Text style={styles.textRight}>Alterar a senha?</Text>
        </View>
      </View>
      
      <RectButton 
        style={styles.buttonFAQ}
        onPress={() => handleFAQ()}
      >
        <Text style={styles.textRed}>Dúvidas Frequentes</Text>
      </RectButton>
    </View>
  );
};

