import React from "react";
import
    {
        View,
        Text,
        StyleSheet,
        ScrollView,
        TouchableOpacity,
    } from "react-native";

import { useNavigation } from "@react-navigation/native";

import FoodCard_Small from "../common/src.components.common.FoodCard_Small";

const __restaurant_list = require("../../../models/restaurants_menu");

const RestaurantList = () =>
{
    const navigation = useNavigation();

    const __handle_restaurant_name_press = (restaurant_id, restaurant_name) =>
    {
        navigation.navigate("Restaurant", { restaurant_id, restaurant_name });
    }

    return (
        <View style={ styles.container }>
            <ScrollView style={ styles.scroll_view }>
                { __restaurant_list.map((res_item) => (
                    <View key={ res_item.__id }>
                        <TouchableOpacity onPress={ () => ( __handle_restaurant_name_press(
                            res_item.__id,
                            res_item.name,
                        ) ) }>
                            <Text style={ styles.restaurant_name } >
                                { res_item.name }
                            </Text>
                        </TouchableOpacity>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={ false }
                        >
                            { res_item.menu.map((food_item) => (
                                <View key={ food_item.__id }>
                                    <FoodCard_Small
                                        image_url={ food_item.image }
                                        title={ food_item.title }
                                        description={ food_item.description }
                                        price={ food_item.price }
                                    />
                                </View>
                            )) }
                        </ScrollView>
                    </View>
                )) }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll_view: {
        flex: 1,
        padding: 16,
    },
    restaurant_name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});

export default RestaurantList;
