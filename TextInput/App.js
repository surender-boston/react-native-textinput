import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem'
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

  render() {

    const placeOutputHolder = this.state.places.map((place,index) => (
      <ListItem key={index} placeName={place}/>
    ));

    return (
      <View style={styles.container}>
        <View style = {styles.inputContainer}>
          <TextInput style={styles.inputTextStyle}
            placeholder="Enter your text here"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          >
          </TextInput>
          <Button 
          title="Add" 
          style={styles.inputButtonStyle} 
          onPress={this.addButtonClickHandler}/>
       </View>
        <View style={styles.listItemContainer}>{placeOutputHolder}</View>      
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
  },
  inputContainer:{
    //flex:1,
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  inputTextStyle:{
    width:"70%"
  },
  inputButtonStyle:{
    width:"30%"
  },
  listItemContainer:{
    width:"100%"
  }
  
});
