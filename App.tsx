import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/pages/HomePage";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer  >
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{headerTintColor:'green'}} >
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
