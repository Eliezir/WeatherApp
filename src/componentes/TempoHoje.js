    import React from 'react';
import {View, StyleSheet} from 'react-native';
import StatusHoje from './BlocoDia.js';
import BlocoInformacoes from "./BlocoInformacoes.js"

export default function TempoHoje(props){
    return (
        <View style={styles.container}>
        <StatusHoje/>
        <BlocoInformacoes/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: '60%',
        backgroundColor: '#427BFF',
        border:'2px solid #427BFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    }
})