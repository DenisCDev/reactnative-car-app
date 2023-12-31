import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import data from "./dataset/vehicles.json";

const back = require("./assets/icons/left-arrow.png");
const dots = require("./assets/icons/dots.png");

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

const InfoScreen = ({ route, navigation }) => {
  const vehicle = data.vehicles.filter(
    (element) => element.id == route.params.id
  )[0];
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.9}
          >
            <Image
              source={back}
              resizeMode="contain"
              style={styles.menuIconStyle}
            />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Detalhes </Text>
          <Image
            source={dots}
            resizeMode="contain"
            style={styles.faceIconStyle}
          />
        </View>

        <View style={styles.imageSection}>
          <Image
            source={getImage(vehicle.id)}
            resizeMode="contain"
            style={styles.vehicleImage}
          />
        </View>

        <View style={styles.headSection}>
          <View style={styles.topTextArea}>
            <Text style={styles.makemodelText}>
              {vehicle.make} {vehicle.model}
            </Text>
            <Text style={styles.price}>
              <Text style={styles.amount}>${vehicle.price_per_day}</Text> /dia
            </Text>
          </View>
          <Text style={styles.typetranText}>
            {vehicle.type}-{vehicle.transmission}
          </Text>
        </View>

        <Text style={styles.descriptionText}>{vehicle.description}</Text>
        <Text style={styles.propertiesText}>Informações</Text>

        <View style={styles.propertiesArea}>
          <View style={styles.level}>
            <Text style={styles.propertyText}>
              Cavalos motor:
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.motor_power_hp} cv
              </Text>
            </Text>
            <Text style={styles.propertyText}>
              Cilindrada do motor:
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.engine_capacity_cc} cc
              </Text>
            </Text>

          </View>
          <View style={styles.level}>
            <Text style={styles.propertyText}>
              Combustivel:
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.fuel_type}
              </Text>
            </Text>

            <Text style={styles.propertyText}>
              Tração:
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.traction}
              </Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.rentButton}>
          <Text style={styles.rentButtonText}>Alugue o Carro</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
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
    width: 25,
  },
  HeaderText: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: "500",
  },
  faceIconStyle: {
    width: 30,
  },

  imageSection: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  vehicleImage: {
    width: 300,
    height: 300,
  },

  headSection: {},
  topTextArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  makemodelText: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    fontWeight: "400",
  },
  amount: {
    fontWeight: "bold",
  },
  typetranText: {
    marginTop: 1,
    color: "#696969",
    fontWeight: "600",
    fontSize: 12,
  },
  descriptionText: {
    marginTop: 30,
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 18,
    color: "#696969",
    fontWeight: "500",
  },
  propertiesText: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "500",
  },
  propertiesArea: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  level: {
    marginRight: 30,
  },
  propertyText: {
    fontSize: 12,
    color: "#696969",
  },
  valueText: {
    fontSize: 12,
    color: "black",
  },
  rentButton: {
    marginTop: 50,
    height: 40,
    // padding: 10,
    alignSelf: "center",
    width: 250,
    backgroundColor: "black",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  rentButtonText: {
    color: "white",
    fontWeight: "500",
  },
});
