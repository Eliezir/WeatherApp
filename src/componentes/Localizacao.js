import React,{useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Texto from './Texto.js';
import{local} from '../services/localizacao'


export default function Localizacao(props){
    const[city,setCity] = useState();
    const[district,setDistrict] = useState();

    useEffect(() => {
        (async function () {
  await local().then((response) => response).then((data) => {
    setCity(data[0].subregion);
    setDistrict(data[0].district);
})

        })();
      }, []);


    return(
        <View style={styles.container}>
            <View style ={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Texto texto={`${district}, `} negrito='bold' tamanho={props.tam1} cor ={props.cor1}/>
            <Texto texto={city}negrito='normal' tamanho={props.tam2} cor={props.cor2}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
    width: '85%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: "2%",
    
   },

})