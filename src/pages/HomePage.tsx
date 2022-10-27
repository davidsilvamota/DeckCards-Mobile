import { useEffect } from "react";
import React, { View, Text } from "react-native";
import { getDeckAmount } from "../api/cardsApi/CardsApi";
import ContainerComponent from "../components/atoms/ContainerComponent/ContainerComponent";

export default function HomePage() {
  useEffect(() => {
    getDeckAmount(1);
  }, []);
  return (
    <ContainerComponent>
      <Text>HomePage</Text>
    </ContainerComponent>
  );
}
