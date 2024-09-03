import { Button, Platform, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          tabBarActiveTintColor: "#7527BE",
          headerStyle: { backgroundColor: "#7527BE" },
          headerTintColor: "white",
        }}
      >
        <BottomTab.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <BottomTab.Screen name="UserScreen" component={UserScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
