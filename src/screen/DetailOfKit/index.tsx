import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { TopBar } from "../../components/TopBar";

import { Fontisto } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import kits from '../../assets/database/kits.json';

import { styles } from './styles';
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export interface iKit {
    id: number;
    title: string;
    type: string;
    description: string;
    amount: number;
}

interface Props {
    route: {
        params: {
            idSelected: number;
        }
    }
}

export function DetailOfKit ({route}: Props){

    const navigate = useNavigation();

    const handleBack = () => {
        navigate.goBack();
    }

    const handleSchedule = () => {
        navigate.navigate("Scheduling");
    }

    const initialKit: iKit = {
        id: 0,
        title: "",
        type: "",
        description: "",
        amount: 0
    };

    const [kit, setKit] = useState<iKit>(initialKit);

    useEffect(() => {
        kits.data.find(kit => {
            kit.id === route.params.idSelected && (
                setKit(kit)
            )
        })
    },[])


    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.wrapperHeader}>
                { (kit.type === 'quimica') && <Fontisto name="test-tube-alt" size={135} color="#DDB771" />}
                { (kit.type === 'biologia') && <Entypo name="leaf" size={140} color="#6BBF59" />}
                { (kit.type === 'fisica') && <Fontisto name="atom" size={140} color="#C17767" />}
                <View style={styles.wrapperHeaderRight}>
                    <Text style={styles.title}>{kit.title}</Text>
                    <Text style={styles.amountText}>Quantidade: {kit.amount}</Text>
                </View>
            </View>
            <Text style={styles.text}>{kit.description}</Text>
            <View style={styles.footer}>
                <RectButton 
                    style={styles.buttonFirst}
                    onPress={handleBack}
                >
                    <Text style={styles.textButton}>Voltar</Text>
                </RectButton>
                <RectButton 
                    style={styles.button} 
                    onPress={handleSchedule}
                >
                    <Text style={styles.textButton}>Agendar</Text>
                </RectButton>
            </View>
        </View>
    );
}