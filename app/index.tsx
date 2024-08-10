import ItemFlatList from "@/components/ItemList";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
        gap: 10,
      }}
    >
      <Text style={style.title}>Buenas Noches n0ne</Text>

      <Text style={style.subtitle}>Gastos recientes</Text>
      <ItemFlatList />

      <Button title="add" />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: "center",
    borderWidth: 1,
  },

  subtitle: {
    fontSize: 20,

    borderWidth: 1,
  },
});
