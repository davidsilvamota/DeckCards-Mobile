import { useEffect } from "react";
import React, { View } from "react-native";
import { getDeck } from "../api/cardsApi/CardsApi";

export default function HomePage() {
   useEffect(() => {
    getDeck();
  }, []);
  return <View>HomePage</View>;
}
