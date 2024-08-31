import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewBase,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useEffect } from "react";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => {
    return meal.id === mealId;
  });

  useEffect(() => {
    navigation.setOptions({ title: selectedMeal.title });
  }, [mealId, selectedMeal]);

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <MealDetails meal={selectedMeal} />
        <View style={styles.listOuterContianer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredient</Subtitle>
            <List list={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List list={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },

  detailItem: {
    marginHorizontal: 4,
    fontSize: 15,
    color: "white",
  },
  listOuterContianer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

export default MealDetailScreen;
