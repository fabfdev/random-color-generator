import { StyleSheet, Text, View, Pressable, Button } from 'react-native';

import { useGenerateRandomColor } from "@hooks/useGenerateRandomColor";

export default function App() {
  const { color, generateColor, resetColor } = useGenerateRandomColor();

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable style={styles.pressableArea} onPress={generateColor}>
        <Text style={styles.text}>Hello there!</Text>
      </Pressable>
      <View style={styles.resetButton}>
        <Button title='Reset Background' onPress={resetColor} color={"#000"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  resetButton: {
    position: 'absolute',
    bottom: 50,
  }
});
