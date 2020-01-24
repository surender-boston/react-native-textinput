import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

//govind 1
export default class App extends React.Component {

  state = {
    placeName: "",
    places: []
  }

  //input text handler
  placeNameChangeHandler = (val) => {
    this.setState({
      placeName:val
    })
  }

  //button click handler
  //add input text into an array
  addButtonClickHandler = () => {
    console.log('Add button tapped');
    
    //check if placeName is empty or blank
    // if empty do not add into array
    if (this.state.placeName.trim() === "") {
      return
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  itemDeletionHandler = (index) => {
    console.log(index)
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place,i) => {
           return i !== index;
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput placeName={this.state.placeName} 
        textChangeAction={this.placeNameChangeHandler}
        buttonAction={this.addButtonClickHandler}
        ></PlaceInput>
       <PlaceList places={this.state.places} handleItemDeletion={this.itemDeletionHandler}></PlaceList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
