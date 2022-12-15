import * as Location from 'expo-location';

export default async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
    return await Location.getCurrentPositionAsync({});

  }

  export const local =  async () =>{
  let { coords } = await Location.getCurrentPositionAsync();
  const { latitude, longitude } = coords;
    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude
    });
    return response;
  }

  