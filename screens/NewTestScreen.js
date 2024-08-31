import { Button, Text, View } from "react-native";

function NewTestScreen({navigation}) {
    function handdleOnPress(){
        navigation.navigate('MealsCategories')
    }
  return (
    <View>
      <Text>This is New Test Screen</Text>
      <Button title="Navi" onPress={handdleOnPress}></Button>
    </View>
  );
}

export default NewTestScreen;
