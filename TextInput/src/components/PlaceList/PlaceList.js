import React from 'react';
import {View,StyleSheet,ScrollView} from 'react-native'
import ListItem from '../ListItem/ListItem'

const placeList = (props) => {

    touchAction = (index) => {
        alert('Item pressed' + index)
    }
    const placeOutputHolder = props.places.map((place,index) => (
        <ListItem key={index} placeName={place} handleItemTouch={ () => props.handleItemDeletion(index) }/>
      ));
    return (
        <ScrollView style={styles.listItemContainer}>{placeOutputHolder}</ScrollView> 
    )
}

const styles = StyleSheet.create({
    listItemContainer:{
        width:"100%"
      }
})
export default placeList