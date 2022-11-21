import React from 'react';
import {View, StyleSheet} from 'react-native';
import Texto from './Texto.js';



export default function Localizacao(props){
    return(
        <View style={styles.container}>
            <View style ={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Texto texto='Maceió,' negrito='bold' tamanho={props.tam1} cor ={props.cor1}/>
            <Texto texto='  Alagoas' negrito='normal' tamanho={props.tam2} cor={props.cor2}/>
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