import React, { useState } from 'react'
import {View, StyleSheet} from 'react-native';
import InformacoesHoje from './informacoes.js'


export default function BlocoInformacoes(props){
    const[data,setData] = useState({})
    const API_KEY ='f513209bdb0890ce3722a8b63edbb556'
    const urlOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=-9.665&lon=-35.7353&exclude=daily,minutely&cnt=24&units=metric&appid=${API_KEY}`
    fetch(urlOneCall).then(res => res.json()).then(data => {
        setData(data)
    })
    var vento = Math.round((data.current ? data.current.wind_speed : null) * 3.6);
    var feels = Math.round(data.current ? data.current.feels_like : null);
    var uvi = data.current ? data.current.uvi : null;
    var pressure = data.current ? data.current.pressure : null;

    return (
        <View style={styles.container}> 
        <InformacoesHoje icone='wind' txtTipo='WIND' txtValor={vento + " Km/h"} borderLeft={0}/>
        <InformacoesHoje icone='thermometer' txtTipo='FEELS LIKE' txtValor={feels + " º"}  borderLeft={1}/>
        <InformacoesHoje icone='sun' txtTipo='INDEX UV' txtValor={uvi}  borderLeft={0}/>
        <InformacoesHoje icone='activity' txtTipo='PRESSURE' txtValor={ pressure + " mbar"} borderLeft={1}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
