import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";

function FoodCard_Small(props = { image_url: "", title: "", description: "", price: 0.0 })
{
    return (
        <View style={ style.card }>
            <Image source={ { uri: props.image_url } } style={ style.card_image } />

            <Text style={ style.card_title } >{ props.title }</Text>
            <Text style={ style.card_description }>{ props.description }</Text>
            <Text style={ style.card_price }>{ props.price }</Text>
        </View>
    );
}

const style = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        margin: 8,
        width: 150,
        elevation: 4,
    },
    card_image: {
        width: "100%",
        height: 100,
        objectFit: "cover",
        marginBottom: 8,
        borderRadius: 8,
    },
    card_title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    card_description: {
        fontSize: 12,
        color: "#888",
        marginBottom: 4,
    },
    card_price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3498db',
    },
});

export default FoodCard_Small;
