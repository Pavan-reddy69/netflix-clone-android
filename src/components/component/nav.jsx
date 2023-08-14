import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity ,Dimensions} from 'react-native';


const Navbar = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2504/2504929.png',
          }}
        />
      </TouchableOpacity>

      <Text style={styles.link} onPress={() => navigation.navigate('Home')}>
        Home
      </Text>
      <Text style={styles.link} onPress={() => navigation.navigate('Movie')}>
        Movies
      </Text>
      <Text style={styles.link} onPress={() => navigation.navigate('Anime')}>
        Anime
      </Text>
      <Image
        style={styles.logo1}
        source={{
          uri: 'data:image/png;base64,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',
        }}
      />
      <Text style={styles.link1} onPress={() => navigation.navigate('Login')}>

        <Text style={styles.logoutText}>Log out</Text>
      </Text>
    </View>
  );
};
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#000',
    width:width,
    
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  link: {
    color: '#fff',
    paddingLeft: 20,

    fontSize: 15,
    padding: 10,
  },
  link1: {
    color: '#fff',
    paddingLeft: -10,
    fontSize: 15,
    padding: 10,


  },
  logo1: {
    marginLeft: 45,
    top: 12,
    height: 20,
    width: 20,
    backgroundColor: '#000',
  }
});

export default Navbar;
