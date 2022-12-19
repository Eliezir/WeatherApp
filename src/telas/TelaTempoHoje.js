import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
/* import TempoHoje from '../componentes/TempoHoje.js'; */
import Localizacao from '../componentes/Localizacao.js';
import BarraTexto from '../componentes/BarraTexto.js';
import Icon from 'react-native-vector-icons/Feather';
import ContainerPrevisao from '../componentes/previsaoDuranteDia.js'

import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';

export default function TelaTempoHoje() {

    const viewRef = useRef();

    const shareWeather = async () => {
      try{
        const uri = await captureRef(viewRef, {
          result: 'tmpfile',
          quality: 0.7,
          format: 'png',
        });
        await Sharing.shareAsync(uri);
      }catch(err){
        console.error(err);
      }
    }


    return (
        <View style={styles.container} ref={viewRef} >
            <View style={styles.iconsTop}>
                <Icon name="menu" size={30} color='#747474' />
                <Icon name="share-2" size={30} color='#747474' onPress={shareWeather} />
            </View>

            <Localizacao tam1={30} tam2={26} cor1='#1D1D1D' cor2='#646464' />
          {/*   <TempoHoje /> */}
          {/*   <BarraTexto /> */}
            <ContainerPrevisao />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    text: {
        justifyContent: 'center'
    },
    iconsTop: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '85%',
        paddingTop: 20,
        paddingBottom: 10
    },

})