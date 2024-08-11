import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescrip, setItemDescrip] = useState("");

  const handleSubmit = () => {
    console.log(`item: ${itemName} 
    price: ${itemPrice}
    description: ${itemDescrip}`);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
        gap: 10,
      }}
    >
      <Text> Modal add</Text>

      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          value={itemName}
          onChangeText={setItemName}
          placeholder="Nombre"
          placeholderTextColor={"#000"}
        />
        <TextInput
          style={style.input}
          value={itemPrice}
          keyboardType="numeric"
          onChangeText={setItemPrice}
          placeholder="precio"
          placeholderTextColor={"#000"}
        />
        <TextInput
          style={style.input}
          value={itemDescrip}
          onChangeText={setItemDescrip}
          placeholder="description"
          placeholderTextColor={"#000"}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  inputContainer: {
    gap: 10,
  },

  input: {
    borderWidth: 1,
    height: 40,
    padding: 10,
    borderRadius: 8,
  },
});
