import React, { useState } from 'react'
import { View,StyleSheet,Image } from 'react-native';
import Texto from './Texto.js';
const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


export default function StatusHoje() {

  function unixToWeekday(unix){
    var timestamp = new Date(unix*1000)
    var formatted = timestamp;
    var day = formatted.getDay();
    return(weekdays[day])}


function unixToDate(unix){
    var timestamp = new Date(unix*1000)
    var formatted = timestamp;
    var day = formatted.getDate();
    var month = formatted.getMonth();
    const date = `${day} ${months[month]}`
    return(date);
}




const[data,setData] = useState({})
/* const[location,setLocation] = useState({}) */

const API_KEY2 ='49cc8c821cd2aff9af04c9f98c36eb74';
const API_KEY ='f513209bdb0890ce3722a8b63edbb556'
const location = 'Maceió'
const lat = '-9.647906';
const lon='-35.734695';
/* const url2 = `https://api.weatherbit.io/v2.0/history/hourly?city=${location}&start_date=2022-09-07&end_date=2022-09-08&tz=local&key=${api_key}` */

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
const urlOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=-9.665&lon=-35.7353&exclude=daily,minutely&cnt=24&units=metric&appid=${API_KEY}`


/*   axios.get(url).then((response) => {
    setData(response.data)
  }) */


fetch(urlOneCall).then(res => res.json()).then(data => {
    setData(data)
})


var temperatura =  Math.round(data.current? data.current.temp :null);
var tempo = data.current ? data.current.weather[0].main : null;
var weatherICON = data.current ? data.current.weather[0].icon :null;
var timestamp = data.current ? data.current.dt : null;
const img = {uri: 'http://openweathermap.org/img/wn/'+ weatherICON +'@4x.png'}


 return (
   <View style={styles.container}>
    <View style={styles.divContainer}>
    <Image style={styles.imgWeatherDia} source={img}/>
    <Texto  texto={tempo} negrito="bold" tamanho={24} cor='#ffff'/>
    <Texto  texto={`${unixToWeekday(timestamp)}, ${unixToDate(timestamp)}`} negrito="bold" tamanho={13} cor='#8DB2FB'/>
   </View>
   <View style={styles.divContainer}><Texto  texto={temperatura} negrito="bold" tamanho={80} cor='#ffff'/></View>  
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
      position: 'absolute',
      top:0,
      width: '100%',
      height: '70%',
  },
  divContainer:{
    height:'50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-around',
  },
  imgWeatherDia:{
    width:100,
    height:100,
  }
  
})