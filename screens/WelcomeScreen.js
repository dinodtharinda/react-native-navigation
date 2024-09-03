import { useLayoutEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import DrawerIcon from "../components/DrawerIcon";

function WelcomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Welcome",
      drawerIcon: ({ color, size }) => (
        <DrawerIcon icon="home" size={size} color={color} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.rootContainer}>
      <Text>Welcome Screen</Text>
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

export default WelcomeScreen;
