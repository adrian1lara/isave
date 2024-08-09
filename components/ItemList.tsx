import { View, Text, FlatList } from "react-native";

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

const Item = ({ title, description, price }: ItemsProps) => (
  <View>
    <Text>{title}</Text>
    <Text>{description}</Text>
    <Text>{price}</Text>
  </View>
);

// component to render item in a FlatList
const ItemFlatList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <Item
          title={item.title}
          description={item.description}
          price={item.price}
        />
      )}
    />
  );
};

export default ItemFlatList;
