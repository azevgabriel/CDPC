import React from 'react';

import { 
  View,
  ScrollView,
  Text
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { KitCard } from '../../components/KitCard';
import { TopBar } from '../../components/TopBar';

import { styles } from './styles';

import kits from '../../assets/database/kits.json';

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
          { 
            kits.data.map(kit => 
              <KitCard name={kit.title} type={kit.type} />
            ) 
          }
        </View>
      </ScrollView>
    </View>
  );
};

