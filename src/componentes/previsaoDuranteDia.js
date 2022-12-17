import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import CardPrevisao from "./cardTempo";
var x = 0;
const corHora = "#141414a3";
const corTemp = "#141414";
const corMain = "White";

import api2, { api } from "../services/apiOneCall";

function GetCard(props) {
  function unixToHour(unix) {
    var timestamp = new Date(unix * 1000);
    var formatted = timestamp;
    var hours = formatted.getHours();
    return hours;
  }
  if (
    unixToHour(props.data.hourly ? props.data.hourly[x].dt : null) % 2 != 0 &&
    props.data.hourly
      ? props.data.hourly[x].dt
      : null != null
  ) {
    x++;
  }

  if (props.horario != "current")
    return (
      <TouchableOpacity>
        <CardPrevisao
          status={props.status}
          txtHora={
            unixToHour(
              props.data.hourly ? props.data.hourly[x + props.y].dt : null
            ) + ":00"
          }
          txtTemperatura={
            Math.round(
              props.data.hourly ? props.data.hourly[x + props.y].temp : null
            ) + "º"
          }
          corH={corHora}
          corT={corTemp}
          imgTempo={`http://openweathermap.org/img/wn/${
            props.data.hourly
              ? props.data.hourly[props.y + x].weather[0].icon
              : null
          }@2x.png`}
        />
      </TouchableOpacity>
    );
  else if (props.horario == "current") {
    return (
      <TouchableOpacity>
        <CardPrevisao
          status={props.status}
          txtHora="Now"
          corH={"#f4f4f4"}
          corT={"#ffff"}
          txtTemperatura={
            Math.round(props.data.current ? props.data.current.temp : null) +
            "º"
          }
          imgTempo={`http://openweathermap.org/img/wn/${
            props.data.current ? props.data.current.weather[0].icon : null
          }@2x.png`}
        />
      </TouchableOpacity>
    );
  }
}

export default function ContainerPrevisao(props) {
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

  const [cards, setCards] = useState([
    { id: 0, status: 2, horario: "current" },
    { id: 2, status: 1 },
    { id: 4, status: 1 },
    { id: 6, status: 1 },
    { id: 8, status: 1 },
    { id: 10, status: 1 },
    { id: 12, status: 1 },
    { id: 14, status: 1 },
    { id: 16, status: 1 },
    { id: 18, status: 1 },
    { id: 20, status: 1 },
    { id: 22, status: 1 },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cards.map((card, index) => (
          <GetCard
            data={data}
            y={card.id}
            horario={card.horario}
            key={card.id}
            status={card.status}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
    height: "11%",
  },
  ScrollView: {
    marginVertical: 0,
  },
  CardNow: {
    backgroundColor: "#427BFF",
  },
});
