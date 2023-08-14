import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Navbar from '../component/nav';

const Anime = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=956bc59cec62b55741365cda6ad66d4a&with_genres=16')
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  const handleImagePress = (movieId) => {
    navigation.navigate('MovieDetails', { id: movieId });
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer} onPress={() => handleImagePress(item.id)}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
        style={styles.cardImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          {item.original_title || item.original_name}
        </Text>
        <Text style={styles.releaseDateText}>
          {item.release_date || item.first_air_date}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator style={styles.loadingIndicator} />;
  }

  return (
    <View style={{backgroundColor:'black'}}>
    <Navbar navigation={navigation}/>
    <FlatList
      data={data}
      numColumns={3}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 6,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '800',
    fontFamily: 'sans-serif',
    color: 'white',
    marginBottom: 6,
  },
  releaseDateText: {
    fontSize: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    marginBottom: 4,
  },
  imdbText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
  listContainer: {
    padding: 6,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Anime;
