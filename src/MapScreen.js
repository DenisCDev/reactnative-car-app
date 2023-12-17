import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MarkerData = [
  {
    name: 'Rio de Janeiro',
    coordinates: {
      latitude: -22.907128,
      longitude: -43.195932,
    },
  },
  {
    name: 'São Paulo',
    coordinates: {
      latitude: -23.557539,
      longitude: -46.632182,
    },
  },
  {
    name: 'Belo Horizonte',
    coordinates: {
      latitude: -19.925788,
      longitude: -43.930878,
    },
  },
  {
    name: 'Salvador',
    coordinates: {
      latitude: -12.971707,
      longitude: -38.516708,
    },
  },
  {
    name: 'Fortaleza',
    coordinates: {
      latitude: -3.750889,
      longitude: -38.516708,
    },
  },
  {
    name: 'Curitiba',
    coordinates: {
      latitude: -25.432104,
      longitude: -49.275726,
    },
  },
  {
    name: 'Porto Alegre',
    coordinates: {
      latitude: -30.038143,
      longitude: -51.222169,
    },
  },
  {
    name: 'Manaus',
    coordinates: {
      latitude: -3.053736,
      longitude: -60.022025,
    },
  },
];

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: -15.782037,
    longitude: -47.922773,
    latitudeDelta: 10,
    longitudeDelta: 10,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
        key="AIzaSyDJQahJT1_LRC5NzvQEW0p4091rJFAib5I"
      >
        {MarkerData.map((location) => (
          <Marker
            key={location.name}
            coordinate={location.coordinates}
            title={location.name}
           />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
