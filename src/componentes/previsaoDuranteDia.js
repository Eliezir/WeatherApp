import React, { useState } from 'react'
import {View, StyleSheet, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardPrevisao from './cardTempo';
var x = 0;
const corHora = '#141414a3';
const corTemp = '#141414';
const corMain ='White';

function GetCard(props,){
    const[data,setData] = useState({})
    const API_KEY = "f513209bdb0890ce3722a8b63edbb556"
    const urlOneCall =`https://api.openweathermap.org/data/2.5/onecall?lat=-9.665&lon=-35.7353&exclude=daily,minutely&cnt=24&units=metric&appid=${API_KEY}`
    fetch(urlOneCall).then(res => res.json()).then(data => {
        setData(data)
    })
    function unixToHour(unix){
        var timestamp = new Date(unix*1000)
        var formatted = timestamp;
        var hours = formatted.getHours();
        return(hours)
    }
    if(unixToHour(data.hourly ? data.hourly[x].dt: null) %2 != 0 && data.hourly ? data.hourly[x].dt: null != null ){
        x++
        console.log(unixToHour(data.hourly ? data.hourly[x].dt: null))
        console.log(x)
    }


    if(props.horario != 'current')
    return(
        <TouchableOpacity style={card}>
        <CardPrevisao  status={props.status} txtHora={unixToHour(data.hourly ? data.hourly[x+props.y].dt: null)+":00"} txtTemperatura={Math.round(data.hourly ? data.hourly[x+props.y].temp :null)+"º"} corH={corHora} corT={corTemp} imgTempo={`http://openweathermap.org/img/wn/${data.hourly ? data.hourly[props.y+x].weather[0].icon :null}@2x.png` }/>
        </TouchableOpacity>
    )
    else if(props.horario == 'current'){
        return(
        <TouchableOpacity>
        <CardPrevisao   status={props.status} txtHora='Now' txtTemperatura={Math.round(data.current ? data.current.temp :null)+"º"} imgTempo={`http://openweathermap.org/img/wn/${data.current ? data.current.weather[0].icon :null}@2x.png` }/>
        </TouchableOpacity>
            )
    }

    
}


export default function ContainerPrevisao(props){
    const [cards, setCards] = useState([
        {id:0 ,status:2,horario:'current'},
        {id:2 ,status:1},
        {id:4 ,status:1},
        {id:6 ,status:1},
        {id:8 ,status:1},
        {id:10,status:1},
        {id:12,status:1},
        {id:14,status:1},
        {id:16,status:1},
        {id:18,status:1},
        {id:20,status:1},
        {id:22,status:1},

    ])

    return (
        <View style={styles.container}>
            <ScrollView horizontal  showsHorizontalScrollIndicator={false}> 
            {cards.map((card,index) => (
                <GetCard y={card.id} horario={card.horario} key={card.id} status={card.status}/>

            ))}


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: '11%',  
       
    },
    ScrollView: {
        marginVertical: 0,
    },
    CardNow:{
        backgroundColor: '#427BFF',
    },
})
