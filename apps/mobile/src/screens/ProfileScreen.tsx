import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  useColorScheme,
  Image,
} from 'react-native';
import { isValidEmail, capitalize, isEmpty } from '@monorepo/shared';

// Import images from local assets
const placeholderImage = require('../../assets/images/placeholder.png');

function ProfileScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
  };

  const textColor = isDarkMode ? '#ffffff' : '#000000';

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View style={styles.content}>
          {/* Placeholder Image */}
          <View style={styles.imageContainer}>
            <Image
              source={placeholderImage}
              style={styles.profileImage}
              resizeMode="cover"
              onError={error => console.log('Image load error:', error)}
              onLoad={() => console.log('Image loaded successfully!')}
            />
          </View>

          <Text style={[styles.title, { color: textColor }]}>
            Profile Screen
          </Text>
          <Text style={[styles.subtitle, { color: textColor }]}>
            Testing shared validators with images
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Email Validator</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email..."
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {email !== '' && (
              <Text
                style={[
                  styles.result,
                  { color: isValidEmail(email) ? 'green' : 'red' },
                ]}
              >
                {isValidEmail(email) ? '✓ Valid email' : '✗ Invalid email'}
              </Text>
            )}
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Capitalize Utility</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter text..."
              placeholderTextColor="#999"
            />
            {name !== '' && (
              <Text style={styles.result}>
                <Text style={styles.bold}>Capitalized: </Text>
                {capitalize(name)}
              </Text>
            )}
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Empty Validator</Text>
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={setText}
              placeholder="Enter text..."
              placeholderTextColor="#999"
            />
            <Text style={styles.result}>
              {isEmpty(text) ? '✗ Text is empty' : '✓ Text is not empty'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
    opacity: 0.7,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
    color: '#333',
  },
  result: {
    fontSize: 16,
    marginTop: 8,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
