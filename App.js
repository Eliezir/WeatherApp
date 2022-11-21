import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaProximosDias from './src/telas/TelaProximosDias.js';
import TelaTempoHoje from './src/telas/TelaTempoHoje.js';



const Stack = createNativeStackNavigator();

export default function App() {

  
  return (
    <View style = {styles.container}>
      <StatusBar/>
      <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Home" component={TelaTempoHoje}/>
      <Stack.Screen name="Next 7 days" component={TelaProximosDias}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
