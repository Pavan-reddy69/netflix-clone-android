import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardList = ({ fetchUrl }) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, [fetchUrl]);

  const handleImagePress = (movieId) => {
    navigation.navigate('MovieDetails', { id: movieId });
  };


  return (
    <FlatList
      data={data}
      horizontal
      ListEmptyComponent={() => (
        <View style={styles.skeletonContainer}>
          <View style={styles.skeletonImage} />
          <View style={styles.skeletonImage} />
          <View style={styles.skeletonImage} />
          <View style={styles.skeletonImage} />
          <View style={styles.skeletonImage} />
          <View style={styles.skeletonImage} />
        </View>
      )}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleImagePress(item.id)}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
            style={styles.cardImage}
          />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: 120,
    height: 200,
    margin: 3,
    borderRadius: 12,
    overflow: 'hidden',
  },
  skeletonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  skeletonImage: {
    width: 120,
    height: 200,
    margin: 3,
    borderRadius: 12,
    backgroundColor: '#E0E0E0', // Placeholder color
  },
});

export default CardList;
