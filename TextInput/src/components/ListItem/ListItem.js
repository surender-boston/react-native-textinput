import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const listItem = (props) => {
    return (
        <TouchableOpacity onPress={props.handleItemTouch}>
            <View style={styles.listItemContainer}>
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        width: "100%",
        backgroundColor: "#eee",
        padding: 10,
        margin: 5

    }
})

export default listItem