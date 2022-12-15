import React, { useState,useEffect } from 'react'
import {View, StyleSheet} from 'react-native';
import LinhaDia from '../componentes/LinhaDia.js';
import Texto from '../componentes/Texto.js';
import BarraTextoTela2 from '../componentes/BarraTextoTela2.js';
import {temp} from '../componentes/LinhaDia.js';
const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 
import api2,{api} from '../services/apiDaily'

function GetLinha (props){
    const [data, setData] = useState({});
    const [url, setUrl] = useState(api);
  
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }, [url]);
    useEffect(() => {
      (async function () {
        setUrl(
          await api2()
            .then((response) => response)
            .then((data) => {
              return data;
            })
        );
      })();
    }, []);

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
        const date = ` / ${day} ${months[month]}`
        return(date);
    }
    


 
    return(
        <LinhaDia x = {2} imgTempo = {`http://openweathermap.org/img/wn/${data.list ? data.list[props.x].weather[0].icon :null}@4x.png` } dia={unixToWeekday(data.list ? data.list[props.x].dt:null)} data={unixToDate(data.list ? data.list[props.x].dt:null)} tprin={Math.round(data.list ? data.list[props.x].temp.max:null)+'º'} tsec={Math.round(data.list ? data.list[props.x].temp.min:null)+'º'} t1={21} t2={16} c1='#E4EDFF' c2 ='#9EBBFF'  />
        
    )

    }


export default function TelaProximosDias() {
   const time = 1662904800 * 1000;
   const objDate = new Date(time);
   const humanDateFormat = objDate.toLocaleString();

   const time2 = 1662991200 * 1000;
   const objDate2 = new Date(time2);
   const humanDateFormat2 = objDate2.toLocaleString();




    
    return (
        <View style = {styles.container}>
            <View style={styles.div1}>
            <BarraTextoTela2/>
            </View>
            <View style={styles.div2}>
            <Texto texto='Next 7 days' negrito='bold' tamanho={20} cor='#D6E3FF'/>
            </View>
            
            <View style = {styles.div3}>
                <GetLinha x={1}/>
                <GetLinha x={2}/>
                <GetLinha x={3}/>
                <GetLinha x={4}/>
                <GetLinha x={5}/>
                <GetLinha x={6}/>
                <GetLinha x={7}/>
            </View>
        </View>
    )
}



const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#427BFF',
        alignItems: 'center'

    },
    div1: {
        width: '85%',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingTop: 10,
        height: '12%'
       
    },div2: {
        width: '82%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 14,
        height: '8%'
       
    },
    div3: {
        width: '87%',
        alignItems: 'flex-start',
        height: '10%',
        paddingLeft: 5
    }
    
})