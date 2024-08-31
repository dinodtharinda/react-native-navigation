import { Text, View, StyleSheet } from "react-native";

function List({ list }) {
  return list.map((dataPoint, key) => (
    <View style={styles.listItem} key={key}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2d497",
  },

  itemText:{
    color:'#351401'
  }
});

export default List;
