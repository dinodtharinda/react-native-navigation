import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DrawerIcon from "../components/DrawerIcon";

function UserScreen({ navigation, route }) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "User Home",
        tabBarIcon:({color,size})=><Ionicons name="person" color={color} size={size}/>
    });
  }, [navigation]);
  return (
    <View style={styles.rootContainer}>
      <Text>User Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default UserScreen;
