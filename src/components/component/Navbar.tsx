import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Screens = {
  Home: undefined;
  About: undefined;
};

const Navbar = () => {
  const navigation = useNavigation();

  const handleNavigate = (screenName: keyof Screens) => {
    // navigation.navigate(screenName);
  };

  return (
    <View style={styles.navbar}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/2504/2504929.png',
        }}
      />

      <TouchableOpacity onPress={() => handleNavigate('Home')}>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigate('About')}>
        <Text style={styles.link}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 10,
    marginRight: 10,
  },
  link: {
    color: '#fff',
    fontSize: 20,
    padding: 10,
  },
});

export default Navbar;
