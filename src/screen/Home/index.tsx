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
  const [newKits, setNewKits] = useState<iKit[]>([]);

  useEffect(() => {
    let kitsGrowing;
    kitsGrowing = kits.data.sort((a,b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
    setNewKits(kitsGrowing);
  },[])

  useEffect(() => {
    
    switch(typeSelected) {
      case "quimica":
        setFields(newKits.filter(kit => {
          return kit.type === "quimica";
        }));
        break;
      case "fisica":
        setFields(newKits.filter(kit => {
          return kit.type === "fisica";
        }));
        break;
      case "biologia":
        setFields(newKits.filter(kit => {
          return kit.type === "biologia"
        }));
        break;
      default:
        setFields(newKits.map(kit => {return kit}));
        break;
    }
  }, [typeSelected, newKits]);
  
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
          onPress={() => setTypeSelected(oldValue => oldValue = "all")}
        >
          <Text style={styles.textButton}>
            Todos
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

