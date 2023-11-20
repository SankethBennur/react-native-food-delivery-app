import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Animated } from "react-native";
import FoodCard from "../common/FoodCard";

const __restaurant_list = require("../../../models/restaurants_menu");

const RestaurantList = () =>
{
    const [scrollViewWidth, setScrollViewWidth] = React.useState(0);
    const boxWidth = scrollViewWidth * 0.8;
    const boxDistance = scrollViewWidth - boxWidth;
    const halfBoxDistance = boxDistance / 2;
    const pan = React.useRef(new Animated.ValueXY()).current;

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

                            contentContainerStyle={ { paddingVertical: 16 } }
                            contentInsetAdjustmentBehavior="never"
                            snapToAlignment="center"
                            decelerationRate="fast"
                            automaticallyAdjustContentInsets={ false }
                            showsHorizontalScrollIndicator={ false }
                            showsVerticalScrollIndicator={ false }
                            // scrollEventThrottle={ 1 }
                            snapToInterval={ boxWidth }
                            contentInset={ {
                                left: halfBoxDistance,
                                right: halfBoxDistance,
                            } }
                            contentOffset={ { x: halfBoxDistance * -1, y: 0 } }
                            onLayout={ (e) =>
                            {
                                setScrollViewWidth(e.nativeEvent.layout.width);
                            } }
                            onScroll={ Animated.event(
                                [{ nativeEvent: { contentOffset: { x: pan.x } } }],
                                {
                                    useNativeDriver: false,
                                },
                            ) }

                            keyExtractor={ (item) => item.__id }
                            renderItem={ ({ item, index }) => (
                                <Animated.View
                                    style={ {
                                        transform: [
                                            {
                                                scale: pan.x.interpolate({
                                                    inputRange: [
                                                        (index - 1) * boxWidth - halfBoxDistance,
                                                        index * boxWidth - halfBoxDistance,
                                                        (index + 1) * boxWidth - halfBoxDistance, // adjust positioning
                                                    ],
                                                    outputRange: [0.8, 1, 0.8], // scale down when out of scope
                                                    extrapolate: 'clamp',
                                                }),
                                            },
                                        ],
                                    } }>

                                    <FoodCard
                                        image_url="https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-500x500.jpg"
                                        title="Title"
                                        description="food_item.description"
                                        price={ 1.0 }
                                    />

                                </Animated.View>
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
