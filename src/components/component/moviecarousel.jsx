import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieCarousel = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch(
        'https://api.themoviedb.org/3/trending/all/week?api_key=956bc59cec62b55741365cda6ad66d4a&language=en-US'
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
        .catch((error) => console.log('Error fetching data:', error));
    };
    getData();
  }, []);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  const handlePlayButton = (movieId) => {
    navigation.navigate('MovieDetails', { id: movieId }); 
  };

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image
        source={{ uri: `${base_url}${item?.backdrop_path}` }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.carouselCaption}>
        <Text style={styles.title}>
          {item.original_title || item.original_name}
        </Text>
        <Text style={styles.imdbRating}>IMDB Rating: {item.vote_average}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePlayButton(item.id)} 
          >
            <Text style={styles.buttonText}>PLAY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={() => handlePlayButton(item.id)}>
            <Text style={styles.buttonText}>INFO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View style={styles.skeletonContainer}>
            <View style={styles.skeletonImage} />
            <View style={styles.skeletonImage} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} 
        horizontal
        pagingEnabled
        snapToAlignment="start"
        snapToInterval={width}
      />
    </View>
  );
}
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
   skeletonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },
  skeletonImage: {
    width: width,
    height: 450,
    borderRadius: 12,
    backgroundColor: '#E0E0E0', 
  },

  carouselItem: {
    width: width,
    alignItems: 'flex-start',
  },
  image: {
    width: width,
    height: 450,
  },
  carouselCaption: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    padding: 10,
    position: 'absolute',
    top: 310,
    left: 0,
    width: width,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 5,
  },
  imdbRating: {
    color: 'white',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  button: {
    padding: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    width: 80,
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default MovieCarousel;
