import React from 'react';
import { View, Text, TextInput, TouchableOpacity,  ImageBackground, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
    source={{
      uri: 'https://mebincdn.themebin.com/1664271579476.jpg',
    }}
    style={styles.backgroundImage}
    resizeMode="cover"
  >
     <View style={styles.loginContainer}>
        <View style={styles.login}>
          <Text style={styles.loginTitle}>Sign In</Text>
          <View style={styles.loginGroup}>
            <TextInput
              style={styles.loginInput}
              placeholder="Email or phone number"
              placeholderTextColor="#888"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.loginGroup}>
            <TextInput
              style={styles.loginInput}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.loginSignInButton} onPress={handleLogin}>
            <Text style={styles.loginSignInButtonText}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.loginSecondaryCta}>
            <Text style={styles.loginSecondaryCtaText}>Remember me</Text>
            <Text style={styles.loginSecondaryCtaText}>Need help?</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 12,
    padding: 25,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  loginGroup: {
    marginBottom: 16,
  },
  loginInput: {
    backgroundColor: '#333',
    color: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  loginSignInButton: {
    backgroundColor: '#e50914',
    paddingVertical: 16,
    borderRadius: 11,
    alignItems: 'center',
  },
  loginSignInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
   
  },
  loginSecondaryCta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  loginSecondaryCtaText: {
    color: '#b3b3b3',
  },
});

export default Login;