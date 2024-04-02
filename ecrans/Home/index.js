import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import DASHBOARDSTYLES from './style';

const Home = () => {
  return (
    <ScrollView>
      {/* Début du Header */}
      <View style={DASHBOARDSTYLES.header}>
        <Text>Jhon Doe</Text>
        <Image source={require('./../../assets/ProfilForCode.jpg')} />
      </View>
      {/* Fin du Header */}
    </ScrollView>
  );
};

export default Home;