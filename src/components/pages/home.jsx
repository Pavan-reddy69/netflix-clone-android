import React from 'react';
import MovieCarousel from '../component/moviecarousel';
import CardList from '../component/cardlist';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Navbar from '../component/nav';

const Home = ({ navigation }) => {
  const trendingUrl = 'https://api.themoviedb.org/3/trending/all/week?api_key=956bc59cec62b55741365cda6ad66d4a&language=en-US';
  const moviesUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=956bc59cec62b55741365cda6ad66d4a&with_genres=28';
  const animeUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=956bc59cec62b55741365cda6ad66d4a&with_genres=16';
  const tvSeriesUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=956bc59cec62b55741365cda6ad66d4a';
  const NetflixOriginals = 'https://api.themoviedb.org/3/discover/tv?api_key=956bc59cec62b55741365cda6ad66d4a&with_networks=213';

  return (
    <FlatList
      contentContainerStyle={styles.container}
      ListHeaderComponent={() => (
        <>
          <Navbar navigation={navigation} />
          <MovieCarousel />
        </>
      )}
      data={[
        {
          sectionTitle: "Netflix Originals:",
          fetchUrl: NetflixOriginals,
        },
        {
          sectionTitle: "Trending:",
          fetchUrl: trendingUrl,
        },
        {
          sectionTitle: "Anime:",
          fetchUrl: animeUrl,
        },
        {
          sectionTitle: "TV Series:",
          fetchUrl: tvSeriesUrl,
        },
        {
          sectionTitle: "Movies:",
          fetchUrl: moviesUrl,
        },
      ]}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.cardListSection}>
          <Text style={styles.sectionTitle}>{item.sectionTitle}</Text>
          <CardList fetchUrl={item.fetchUrl} />
        </View>
      )}
    />

  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
  },
  cardListsContainer: {
    padding: 10,
  },
  cardListSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
    color: 'white',
    fontFamily: 'sans-serif',
  },
});

export default Home;
