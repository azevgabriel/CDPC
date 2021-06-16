import React from 'react';
import {Image, Text, StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';

import cdpcLogo from '../assets/cdpc_logo.png';
import colors from '../styles/colors';

export function Login (){
  return (
    <>
      <Image 
        source={cdpcLogo}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.text}>Insira seu E-Mail.</Text>
          <TextInput style={styles.textInput}>exemplo@ifsuldeminas.edu.br</TextInput>
          <Text style={styles.text}>Insira sua Senha.</Text>
          <TextInput style={styles.textInput}>********</TextInput>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Esqueci a Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity>
        <Text style={styles.text}>FAQ - Perguntas Frequentes</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: '#000',
    padding: 3,
  },
  textInput: {
    fontSize: 17,
    paddingHorizontal: 10,
    backgroundColor: '#e3e3e3',
    height: 40,
    borderRadius: 20
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 250,
  },
  row: {
    flexDirection: 'column',
    marginTop: 10
  },
  button: {
    marginVertical: 5,
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },
  textButton: {
    fontSize: 18,
    color: colors.white,
    alignSelf: 'center'
  },
  inputContainer:{
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 300,
  }
})