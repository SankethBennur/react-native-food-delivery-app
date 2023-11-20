import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import FoodCard_Small from "../common/FoodCard_Small";

const __restaurant_list = require("../../../models/restaurants_menu");

const RestaurantList = () => {
    return (
        <View>
            <ScrollView style={ styles.container }>
                { __restaurant_list.map((res_item) => (
                    <View key={ res_item.__id }>
                        <Text style={ styles.restaurant_name }>{ res_item.name }</Text>
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
        // width: "100vw",
        // flex: 1,
        // padding: 16,
    },
    restaurant_name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});

export default RestaurantList;
