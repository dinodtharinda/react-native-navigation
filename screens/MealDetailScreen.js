import { Button, Image, ScrollView, StyleSheet, View } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
// import { FavoritesContext } from "../store/context/favorite-context";
import { addFavorite ,removeFavorite } from "../store/redux/favorites";

function MealDetailScreen({ route, navigation }) {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => {
    return meal.id === mealId;
  });

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function HeaderButtonPressHandler() {
    console.log("Pressed!");
  }

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({id:mealId}))
      // favoriteMealsCtx.removeFavorite(mealId);
    } else {
      dispatch(addFavorite({id:mealId}))
      // favoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            color="white"
            icon={mealIsFavorite ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [mealId, selectedMeal, navigation, changeFavoriteStatusHandler]);

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
