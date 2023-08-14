import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content'; 

interface Movie {
  id: number;
  poster_path: string;
  original_title?: string;
  original_name?: string;
  release_date?: string;
  first_air_date?: string;
}

interface CardListProps {
  fetchUrl: string;
}

const CardList: React.FC<CardListProps> = ({ fetchUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setData(data.results);
          setIsLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [fetchUrl]);

  const handleImagePress = (movie: Movie) => {
    setSelectedMovie(movie === selectedMovie ? null : movie);
  };

  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleImagePress(item)}>
          <View style={styles.cardContainer}>
            <SkeletonContent // Use SkeletonContent for skeleton loading
              isLoading={isLoading}
              layout={[
                { key: 'image', width: 200, height: 300, marginBottom: 10 },
                { key: 'title', width: 150, height: 20, marginBottom: 5 },
                { key: 'date', width: 100, height: 20 },
              ]}
            >
              {/* Actual content rendering */}
              {!isLoading && (
                <>
                  <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
                    style={styles.cardImage}
                  />
                  {(selectedMovie === item) && (
                    <View style={styles.textContainer}>
                      <Text style={styles.titleText}>
                        {item.original_title || item.original_name}
                      </Text>
                      <Text style={styles.releaseDateText}>
                        {item.release_date || item.first_air_date}
                      </Text>
                    </View>
                  )}
                </>
              )}
            </SkeletonContent>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};



interface Styles {
  cardContainer: ViewStyle;
  cardImage: ImageStyle;
  textContainer: ViewStyle;
  titleText: TextStyle;
  releaseDateText: TextStyle;
}

const styles: Styles = {
  cardContainer: {
    margin: 3,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardImage: {
    width: 200,
    height: 300,
  },
  textContainer: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '800',
    fontFamily: 'sans-serif',
    color: 'white',
  },
  releaseDateText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
};

export default CardList;
