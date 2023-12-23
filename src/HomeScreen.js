import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import data from "./dataset/vehicles.json";

const image_v_1 = require("./assets/vehicles/v-1.png");
const image_v_2 = require("./assets/vehicles/v-2.png");
const image_v_3 = require("./assets/vehicles/v-3.png");
const image_v_4 = require("./assets/vehicles/v-4.png");
const image_v_5 = require("./assets/vehicles/v-5.png");
const image_v_6 = require("./assets/vehicles/v-6.png");
const image_v_7 = require("./assets/vehicles/v-7.png");
const image_v_8 = require("./assets/vehicles/v-8.png");
const image_v_9 = require("./assets/vehicles/v-9.png");
const image_v_10 = require("./assets/vehicles/v-10.png");
const image_v_11 = require("./assets/vehicles/v-11.png");
const image_v_12 = require("./assets/vehicles/v-12.png");
const image_v_13 = require("./assets/vehicles/v-13.png");
const image_v_14 = require("./assets/vehicles/v-14.png");
const image_v_15 = require("./assets/vehicles/v-15.png");
const image_v_16 = require("./assets/vehicles/v-16.png");
const image_v_17 = require("./assets/vehicles/v-17.png");
const image_v_18 = require("./assets/vehicles/v-18.png");
const image_v_19 = require("./assets/vehicles/v-19.png");
const image_v_20 = require("./assets/vehicles/v-20.png");
const image_v_21 = require("./assets/vehicles/v-21.png");
const logo = require("./assets/emozione.png")

const HomeScreen = ({ navigation }) => {
  const [vehicles, setVehicles] = useState(data.vehicles);
  const [filteredVehicles, setFilteredVehicles] = useState(data.vehicles);
  const [activeType, setActiveType] = useState("Todos");

  const getImage = (id) => {
    if (id == 1) return image_v_1;
    if (id == 2) return image_v_2;
    if (id == 3) return image_v_3;
    if (id == 4) return image_v_4;
    if (id == 5) return image_v_5;
    if (id == 6) return image_v_6;
    if (id == 7) return image_v_7;
    if (id == 8) return image_v_8;
    if (id == 9) return image_v_9;
    if (id == 10) return image_v_10;
    if (id == 11) return image_v_11;
    if (id == 12) return image_v_12;
    if (id == 13) return image_v_13;
    if (id == 14) return image_v_14;
    if (id == 15) return image_v_15;
    if (id == 16) return image_v_16;
    if (id == 17) return image_v_17;
    if (id == 18) return image_v_18;
    if (id == 19) return image_v_19;
    if (id == 20) return image_v_20;
    if (id == 21) return image_v_21;
  };

  const searchVehicles = (keyword) => {
    const lowercasedKeyword = keyword.toLowerCase();
    const results = vehicles.filter((vehicle) => {
      return vehicle.make.toLowerCase().includes(lowercasedKeyword);
    });
    setFilteredVehicles(results);
  };

  const handleTypeFilter = (type) => {
    setActiveType(type);
    const results = vehicles.filter((vehicle) => {
      return type === "Todos" || vehicle.type === type;
    });
    setFilteredVehicles(results);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Image
            source={require("./assets/icons/menu.png")}
            resizeMode="contain"
            style={styles.menuIconStyle}
          />
          <Image
            source={require("./assets/face.png")}
            resizeMode="contain"
            style={styles.faceIconStyle}
          />
        </View>

        <View style={styles.titleSection}>
          <Image
            source={require('./assets/emozione.png')} // Substitua pelo caminho da sua imagem
            style={styles.titleImage}
          />
        </View>

        <View style={styles.searchSection}>
          <View style={styles.searchPallet}>
            <TextInput
              style={styles.searchInput}
              placeholder="Procure o seu carro ideal"
              onChangeText={(text) => searchVehicles(text)}
            />
            <View style={styles.searchIconArea}>
              <Image
                source={require("./assets/icons/magnifying-glass.png")}
                resizeMode="contain"
                style={styles.magnifyingIconStyle}
              />
            </View>
          </View>
        </View>

        <View style={{ ...styles.typesSection }}>
          <Text
            style={activeType === "Todos" ? styles.typesTextActive : styles.typesText}
            onPress={() => handleTypeFilter("Todos")}
          >
            Todos
          </Text>
          <Text
            style={activeType === "Carro" ? styles.typesTextActive : styles.typesText}
            onPress={() => handleTypeFilter("Carro")}
          >
            Carro
          </Text>
          <Text
            style={activeType === "SUV" ? styles.typesTextActive : styles.typesText}
            onPress={() => handleTypeFilter("SUV")}
          >
            SUV
          </Text>
          <Text
            style={activeType === "Elétrico" ? styles.typesTextActive : styles.typesText}
            onPress={() => handleTypeFilter("Elétrico")}
          >
            Elétrico
          </Text>
        </View>

        <View style={styles.listSection}>
          <Text style={styles.headText}>Disponíveis</Text>

          <ScrollView style={styles.elementPallet}>
            {filteredVehicles.map((vehicle) => {
              return (
                <TouchableOpacity
                  style={styles.element}
                  key={vehicle.id}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('Info', { id: vehicle.id })}
                >
                  <View style={styles.infoArea}>
                    <Text style={styles.infoTitle}>{vehicle.make} {vehicle.model}</Text>
                    <Text style={styles.infoSub}>{vehicle.type}-{vehicle.transmission}</Text>
                    <Text style={styles.infoPrice}>
                      <Text style={styles.infoAmount}>${vehicle.price_per_day} </Text>/dia
                    </Text>
                  </View>
                  <View style={styles.imageArea}>
                    <Image
                      source={getImage(vehicle.id)}
                      resizeMode="contain"
                      style={styles.vehicleImage}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  container: {
    flex: 1,
    paddingRight: 35,
    paddingLeft: 35,
  },
  headerSection: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIconStyle: {
    width: 30,
  },
  faceIconStyle: {
    width: 40,
  },

  titleSection: {
    marginTop: 15,
  },
  titleImage: {
    marginTop: 10,
    width: '100%',
    height: 40,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
  },

  searchSection: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "center",
  },
  searchPallet: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    borderRadius: 8,
    width: "100%",
    height: 30,
    backgroundColor: "white",
  },
  searchInput: {
    width: 245,
    height: 30,

    backgroundColor: "white",
  },
  searchIconArea: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  magnifyingIconStyle: {
    width: 24,
    height: 24,
    marginRight: -10,
  },

  typesSection: {
    marginTop: 15,
    flexDirection: "row",
  },
  typesTextActive: {
    fontSize: 15,
    marginRight: 34,
    fontWeight: "bold",
    color: "black",
  },
  typesText: {
    fontSize: 15,
    marginRight: 33,
    fontWeight: "500",
    color: "#696969",
  },

  listSection: {
    marginTop: 25,
  },
  headText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  elementPallet: {
    marginLeft: -15,
    paddingLeft: 15,
    paddingRight: 15,
    width: "110%",
    height: 450,
  },
  element: {
    height: 100,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 13,
  },
  infoArea: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  infoSub: {
    fontSize: 11,
    fontWeight: "600",
    color: "#696969",
  },
  infoPrice: {
    position: "absolute",
    bottom: 0,
    fontSize: 10,
    color: "#696969",
    fontWeight: "bold",
  },
  infoAmount: {
    fontSize: 12,
    color: "black",
    fontWeight: "600",
  },
  imageArea: {
    flex: 1,
  },
  vehicleImage: {
    position: "absolute",
    top: -15,
    left: -15,
    width: "140%",
    height: "140%",
  },
});