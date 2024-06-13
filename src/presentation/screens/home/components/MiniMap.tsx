import React from 'react';
import {  StyleSheet, TouchableOpacity, Linking } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

interface Props{
    lat: string;
    lng: string;
}
const MiniMap = ({lat, lng }:Props  ) => {
    const latitude = Number(lat)
    const longitude = Number(lng)
  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openInGoogleMaps} activeOpacity={0.9}>
      {/* <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        scrollEnabled={false}
        zoomEnabled={false}
        pitchEnabled={false}
        rotateEnabled={false}
      >
        <Marker coordinate={{ latitude, longitude }} />
      </MapView> */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
          title="Marker"
          description="Description"
        />
      </MapView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200, // Ajusta el tamaño según sea necesario
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MiniMap;
