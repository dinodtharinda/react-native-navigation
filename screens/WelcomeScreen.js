import { useLayoutEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import {Ionicons} from '@expo/vector-icons'

function WelcomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Welcome",
      tabBarIcon:({color,size})=><Ionicons name="home" color={color} size={size}/>
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
