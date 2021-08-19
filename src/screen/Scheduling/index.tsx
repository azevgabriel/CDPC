import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons'; 
import { TopBar } from "../../components/TopBar";

import {styles} from './styles';

export function Scheduling(){

    const navigate = useNavigation();

    const handleBack = () => {
        navigate.goBack();
    }

    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.content}>
                <MaterialIcons name="schedule-send" size={40} color="white" />
                <Text style={styles.text}>Kit agendado {"\n"}com Sucesso!</Text>
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
};