import React from "react";
import { Text } from 'react-native';
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";

interface Props {
    title: string;
}

export const FaqContent = ({ title }: Props) => {  
    return (    
        <RectButton style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </RectButton>
    );
  }