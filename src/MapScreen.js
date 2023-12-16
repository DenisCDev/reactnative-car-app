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
  // Ajustando a região inicial para o centro do Brasil
  const initialRegion = {
    latitude: -15.833333,
    longitude: -47.833333,
    latitudeDelta: 60, // Diminuindo o zoom para mostrar todo o Brasil
    longitudeDelta: 0.3,
  };

  const [region, setRegion] = useState(initialRegion);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion} // Definindo a região inicial
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
