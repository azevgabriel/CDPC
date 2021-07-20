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
      <View style={styles.content}>
       <KitCard name="Kit Teste" path={EmptyImg}/>
       <KitCard name="Kit Teste" path={EmptyImg}/>
       <KitCard name="Kit Teste" path={EmptyImg}/>
       <KitCard name="Kit Teste" path={EmptyImg}/>
       <KitCard name="Kit Teste" path={EmptyImg}/>
       <KitCard name="Kit Teste" path={EmptyImg}/>
       <KitCard name="Kit Teste" path={EmptyImg}/>
       <KitCard name="Kit Teste" path={EmptyImg}/>
       <KitCard name="Kit Teste" path={EmptyImg}/>
       <KitCard name="Kit Teste" path={EmptyImg}/>
       <KitCard name="Kit Teste" path={EmptyImg}/>
       <KitCard name="Kit Teste" path={EmptyImg}/>
       <KitCard name="Kit Teste" path={EmptyImg}/>
       <KitCard name="Kit Teste" path={EmptyImg}/>
       <KitCard name="Kit Teste" path={EmptyImg}/>
      </View>
    </View>
  );
};

