import React from 'react';

import { 
  View,
  ScrollView,
  Text
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { KitCard } from '../../components/KitCard';
import { TopBar } from '../../components/TopBar';

import EmptyImg from '../../assets/empty_img.png'

import { styles } from './styles';

export function Home (){
  
  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView 
        style={styles.scroll}
        horizontal
        showsHorizontalScrollIndicator={false}     
        contentContainerStyle={{
          paddingRight: 20,
        }}
      >
        <RectButton style={styles.button}>
          <Text style={styles.textButton}>
            Química
          </Text>
        </RectButton>
        <RectButton style={styles.button}>
          <Text style={styles.textButton}>
            Física
          </Text>
        </RectButton>
        <RectButton style={styles.button}>
          <Text style={styles.textButton}>
            Biologia
          </Text>
        </RectButton>
        <RectButton style={styles.button}>
          <Text style={styles.textButton}>
            Crescente
          </Text>
        </RectButton>
        <RectButton style={styles.button}>
          <Text style={styles.textButton}>
            Decrescente
          </Text>
        </RectButton>
      </ScrollView>
      <ScrollView>
        <View style={styles.content}>
          <KitCard name="Kit de Biologia 04" type="biologia"/>
          <KitCard name="Kit de Física 01" type="fisica"/>
          <KitCard name="Kit de Biologia 01" type="biologia"/>
          <KitCard name="Kit de Química 04" type="quimica"/>
          <KitCard name="Kit de Biologia 02" type="biologia"/>
          <KitCard name="Kit de Química 03" type="quimica"/>
          <KitCard name="Kit de Física 03" type="fisica"/>
          <KitCard name="Kit de Física 02" type="fisica"/>
          <KitCard name="Kit de Biologia 03" type="biologia"/>
          <KitCard name="Kit de Física 04" type="fisica"/>
          <KitCard name="Kit de Química 01" type="quimica"/>
          <KitCard name="Kit de Química 02" type="quimica"/>
          <KitCard name="Kit de Biologia 02" type="biologia"/>
          <KitCard name="Kit de Química 03" type="quimica"/>
          <KitCard name="Kit de Física 03" type="fisica"/>
          <KitCard name="Kit de Biologia 01" type="biologia"/>
          <KitCard name="Kit de Química 04" type="quimica"/>
          <KitCard name="Kit de Biologia 02" type="biologia"/>    
        </View>
      </ScrollView>
    </View>
  );
};

