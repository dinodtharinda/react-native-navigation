import { Button, Platform, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import {Ionicons} from '@expo/vector-icons'
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "#9145D7" },
          headerTintColor: "white",
          drawerActiveBackgroundColor:"#D4A7FF" ,
          drawerActiveTintColor: "#3c0a6b",
          // drawerStyle:{backgroundColor:"#7C35BE"},
        }}
      >
        <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Drawer.Screen name="UserScreen" component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
