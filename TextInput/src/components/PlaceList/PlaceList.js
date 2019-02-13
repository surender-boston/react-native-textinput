import React from 'react';
import {View,StyleSheet} from 'react-native'
import ListItem from '../ListItem/ListItem'

const placeList = (props) => {

    touchAction = (index) => {
        alert('Item pressed' + index)
    }
    const placeOutputHolder = props.places.map((place,index) => (
        <ListItem key={index} placeName={place} handleItemTouch={ () => this.touchAction(index) }/>
      ));
    return (
        <View style={styles.listItemContainer}>{placeOutputHolder}</View> 
    )
}


const styles = StyleSheet.create({
    listItemContainer:{
        width:"100%"
      }
})
export default placeList