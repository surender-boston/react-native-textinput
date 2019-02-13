import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const listItem = (props) => {
    return (
        <View style={styles.listItemContainer}>
            <Text>{props.placeName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItemContainer:{
        width:"100%",
        backgroundColor:"#eee",
        padding:10,
        margin:5

    }
})

export default listItem