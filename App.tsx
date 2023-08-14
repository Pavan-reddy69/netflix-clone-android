import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import Mov from './src/components/pages/movies';
import Home from './src/components/pages/home';
import Login from './src/components/pages/login';
import Anime from './src/components/pages/Anime';
import MoviePlayer from './src/components/component/MovieDetails';


enableScreens();

const Stack = createStackNavigator();



const App: React.FC = () => {
  return (
    <View style={styles.container}>

      <NavigationContainer>

        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Movie" component={Mov} options={{ headerShown: false }} />
          <Stack.Screen name="Anime" component={Anime} options={{ headerShown: false }} />
          <Stack.Screen name="MovieDetails" component={MoviePlayer} options={{
            headerShown: true  ,  headerStyle: {
              backgroundColor: 'black', 
            },headerTintColor: 'white',
          }} />

        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#000',
  
    alignItems: 'center', // Center align the items vertically
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 10,

  },
  link: {
    color: '#fff',
    fontSize: 20,
    padding: 10,
  },
});

export default App;
