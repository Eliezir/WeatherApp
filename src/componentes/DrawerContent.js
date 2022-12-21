import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { DrawerActions } from '@react-navigation/native'
import Texto from "./Texto";
import Config from '../../config/index.json'
import { useNavigation } from '@react-navigation/native';

export var googlePlaces = null


import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";


export default function componentes() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.textBar}>
            <Icon
              style={{ marginRight: 5 }}
              name="location-outline"
              size={30}
              color="#00000"
            />
            <Texto
              texto="Other Locations"
              negrito="bold"
              tamanho={25}
              cor="#00000"
            />
          </View>
        </View>
      <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
              const lat =  details.geometry.location.lat;
              const long = details.geometry.location.lng;
              googlePlaces = {latitude:lat, longitude:long}
            }}
            query={{
              key: Config.googleApi,
              language: "pt-br",
            }}
            fetchDetails={true}
            styles={{listView:styles.listView}}
          />
          <TouchableOpacity style={styles.searchButton} onPress={()=>navigation.dispatch(DrawerActions.closeDrawer())}>
          <Texto texto="X" negrito="bold" tamanho={15}cor="#000"/>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2ebe2",
    padding: 15,
    justifyContent: "center",
  },
  textBar: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "baseline",
    gap: 30,
    marginTop:150,
    marginBottom: 10,
  },
  searchButton:{
    position: "absolute",
    width:35,
    height: 35,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    shadowColor:"#000",
    bottom:10,
    right:10,
  },
  listView:{
    height:50,
  }
});
