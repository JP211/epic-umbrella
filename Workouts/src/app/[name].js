import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises.json";

export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) {
    return <Text>Exercise Not Found! </Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.muscleName}>
        <Text style={styles.subTitle}>{exercise.muscle}</Text> |{" "}
        <Text style={styles.subTitle}>{exercise.equipment}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  muscleName: {
    color: "dimgray",
  },
  subTitle: {
    textTransform: "capitalize",
  },
});
