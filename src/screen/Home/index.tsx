import React, { useEffect, useState }  from 'react';

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
import { iKit } from '../DetailOfKit';

export function Home (){

  const [typeSelected, setTypeSelected] = useState("");
  const [fields, setFields] = useState<iKit[]>([]);

  useEffect(() => {
    let kitsSelected;
    switch(typeSelected) {
      case "quimica":
        kitsSelected = kits.data.filter(kit => {
          return kit.type === "quimica";
        })
        setFields(kitsSelected);
        break;
      case "fisica":
        kitsSelected = kits.data.filter(kit => {
          return kit.type === "fisica";
        })
        setFields(kitsSelected);
        break;
      case "biologia":
        kitsSelected = kits.data.filter(kit => {
          return kit.type === "biologia"
        })
        setFields(kitsSelected);
        break;
      case "cres":
        kitsSelected = kits.data.filter(kit => {
          return kit.type == "biologia"
        })
        setFields(kitsSelected);
        break;
      case "decres":
        kitsSelected = kits.data.filter(kit => {
          return kit.type === "biologia"
        })
        setFields(kitsSelected);
        break;
      default:
        kitsSelected = kits.data.map(kit => kit);
        setFields(kitsSelected);
        break;
    }
  }, [typeSelected]);
  
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
        <RectButton 
          style={styles.button}
          onPress={() => setTypeSelected(oldValue => oldValue = "quimica")}
        >
          <Text style={styles.textButton}>
            Química
          </Text>
        </RectButton>
        <RectButton 
          style={styles.button}
          onPress={() => setTypeSelected(oldValue => oldValue = "fisica")}
        >
          <Text style={styles.textButton}>
            Física
          </Text>
        </RectButton>
        <RectButton 
          style={styles.button}
          onPress={() => setTypeSelected(oldValue => oldValue = "biologia")}
        >
          <Text style={styles.textButton}>
            Biologia
          </Text>
        </RectButton>
        <RectButton 
          style={styles.button}
          onPress={() => setTypeSelected(oldValue => oldValue = "cres")}
        >
          <Text style={styles.textButton}>
            Crescente
          </Text>
        </RectButton>
        <RectButton 
          style={styles.button}
          onPress={() => setTypeSelected(oldValue => oldValue = "decres")}
        >
          <Text style={styles.textButton}>
            Decrescente
          </Text>
        </RectButton>
      </ScrollView>
      <ScrollView>
        <View style={styles.content}>
          {
            fields.map(kit => 
              <KitCard 
                key={kit.id}
                id={kit.id}
                name={kit.title} 
                type={kit.type} 
              />
            )
          }
        </View>
      </ScrollView>
    </View>
  );
};

