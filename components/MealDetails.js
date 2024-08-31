import { StyleSheet, Text, View } from "react-native";

function MealDetails({ meal, style, textStyle }) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{meal.duration}</Text>
      <Text style={[styles.detailItem, textStyle]}>{meal.complexity}</Text>
      <Text style={[styles.detailItem, textStyle]}>{meal.affordability}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
    // backgroundColor:'white',
  },

  detailItem: {
    marginHorizontal: 4,
    fontSize: 15,
    color: "white",
    backgroundColor: "#CE9221",
    padding: 8,
    margin: 4,
    borderRadius: 4,
  },

 
});

export default MealDetails;
