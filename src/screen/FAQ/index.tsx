import React from 'react';
import {View, Text} from 'react-native';

import FAQs from '../../assets/database/FAQs.json'
import { FaqContent } from '../../components/FaqContent';
import { SimpleLineIcons } from '@expo/vector-icons'; 

import {styles} from './styles';
import colors from '../../styles/colors';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const FAQ = () => {

    const navigate = useNavigation();

    const handleBack = () => {
        navigate.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Dúvidas Frequentes</Text>
                <SimpleLineIcons name="info" size={40} style={styles.svg} color={colors.white} />
            </View>
            <View style={styles.body}>
                <ScrollView 
                    style={styles.wrapperBody} 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 15,
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                        {
                            FAQs.data.map(FAQ => (
                                <FaqContent 
                                    key={FAQ.id}
                                    title={FAQ.title}
                                />
                            ))
                        }
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <RectButton 
                    style={styles.button}
                    onPress={() => handleBack()}
                >
                    <Text style={styles.textButton}>
                        Voltar
                    </Text>
                </RectButton>
            </View>
        </View>
    );
}