import { StyleSheet, Text, View } from "react-native";


export default function ExerciseListItem({ item }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.muscleName}>
        <Text style={styles.subTitle}>{item.muscle}</Text> | <Text style={styles.subTitle}>{item.equipment}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "gainsboro",
      justifyContent: "center",
      padding: 10,
    },
    exerciseContainer: {
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 10,
      gap: 5,
    },
    exerciseName: {
      fontSize: 20,
      fontWeight: "500",
    },
    muscleName: {
      color: "dimgray",
    },
    subTitle: {
        textTransform: 'capitalize',
    },
  });
  