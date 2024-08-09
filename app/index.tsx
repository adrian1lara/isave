import ItemFlatList from "@/components/ItemList";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Buenas Noches n0ne</Text>
      <ItemFlatList />

      <Button title="add" />
    </View>
  );
}
