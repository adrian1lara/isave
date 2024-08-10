import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

type ItemsProps = {
  title: string;
  description: string;
  price: number;
};

// test data
const DATA = [
  {
    id: 1,
    title: "object one",
    description: "description one",
    price: 10,
  },
  {
    id: 2,
    title: "object one",
    description: "description one",
    price: 10,
  },
  {
    id: 3,
    title: "object one",
    description: "description one",
    price: 10,
  },
  {
    id: 4,
    title: "object one",
    description: "description one",
    price: 10,
  },
];

const Item = ({ title, description, price }: ItemsProps) => {
  return (
    <View style={style.itemContainer}>
      <View>
        <Text style={style.titleText}>{title}</Text>
        <Text style={style.descripText}>{description}</Text>
      </View>
      <View>
        <Text style={style.priceText}>$ {price}</Text>
      </View>
    </View>
  );
};

// component to render item in a FlatList
export default function ItemFlatList() {
  return (
    <FlatList
      data={DATA}
      style={style.flatlistContainer}
      renderItem={({ item }) => (
        <Item
          title={item.title}
          description={item.description}
          price={item.price}
        />
      )}
    />
  );
}

const style = StyleSheet.create({
  flatlistContainer: {},

  itemContainer: {
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },

  priceText: {
    fontSize: 25,
  },

  titleText: {
    fontSize: 20,
  },

  descripText: {
    fontSize: 12,
  },
});
