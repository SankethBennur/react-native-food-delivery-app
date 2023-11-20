import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import FoodCard from "../common/FoodCard";

const __restaurant_list = require("../../../models/restaurants_menu");

const RestaurantList = () =>
{
    return (
        <View style={ styles.container }>
            <FlatList
                data={ __restaurant_list }
                keyExtractor={ (item) => item.__id }
                renderItem={ ({ item }) => (
                    <View>
                        <Text style={ styles.restaurantName }>{ item.name }</Text>
                        <FlatList
                            horizontal
                            data={ item.menu }
                            keyExtractor={ (item) => item.__id }
                            renderItem={ ({ item }) => (
                                <FoodCard
                                    image_url="https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-500x500.jpg"
                                    title="Title"
                                    description="food_item.description"
                                    price={ 1.0 }
                                />
                            ) }
                        />
                    </View>
                ) }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    restaurantName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});

export default RestaurantList;
