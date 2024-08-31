import { StyleSheet, Text, View } from "react-native";

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2d497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#e2d497",
    borderBottomWidth: 2,
  },
});

export default Subtitle;
