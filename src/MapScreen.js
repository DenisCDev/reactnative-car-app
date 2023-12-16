import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const carRentalLocations = [
  {
    name: 'Hertz Prestige Collection - Barra da Tijuca',
    address: 'Avenida Lúcio Costa, 3000, Barra da Tijuca, Rio de Janeiro',
    coordinates: {
      latitude: -23.011021,
      longitude: -43.322078,
    },
  },
  {
    name: 'Sixt Luxury Collection - Ibirapuera',
    address: 'Avenida Ibirapuera, 3135, Ibirapuera, São Paulo',
    coordinates: {
      latitude: -23.557539,
      longitude: -46.632182,
    },
  },
  {
    name: 'Dreams Luxury Cars - Gramado',
    address: 'Rua Bela Vista, 100, Centro, Gramado, Rio Grande do Sul',
    coordinates: {
      latitude: -29.534722,
      longitude: -50.843333,
    },
  },
];

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: -23.011021,
    longitude: -43.322078,
    latitudeDelta: 35.015,
    longitudeDelta: 0.0121,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        {carRentalLocations.map((location) => (
          <Marker
            key={location.name}
            coordinate={location.coordinates}
            title={location.name}
            description={location.address}
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
