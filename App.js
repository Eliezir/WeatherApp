import 'react-native-gesture-handler';

import { StyleSheet, StatusBar, SafeAreaView ,Platform,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaProximosDias from './src/telas/TelaProximosDias.js';
import TelaTempoHoje from './src/telas/TelaTempoHoje.js';
import DrawerContent from './src/componentes/DrawerContent';




import { createDrawerNavigator } from '@react-navigation/drawer';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={DrawerContent}>
      <Drawer.Screen name="Main" component={TelaTempoHoje}/>
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  
  return (
    <SafeAreaView style = {styles.container} >

      <StatusBar  barStyle="dark-content" translucent backgroundColor={'transparent'} /> 
      <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Next 7 days" component={TelaProximosDias}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
});
