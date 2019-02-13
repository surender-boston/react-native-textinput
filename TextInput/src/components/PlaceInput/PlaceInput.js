import React from 'react'
import {View,StyleSheet,TextInput,Button} from 'react-native'

const placeInput = (props) => {
    return (
        <View style = {styles.inputContainer}>
          <TextInput style={styles.inputTextStyle}
            placeholder="Enter your text here"
            value={props.placeName}
            onChangeText={props.textChangeAction}
          >
          </TextInput>
          <Button 
          title="Add" 
          style={styles.inputButtonStyle} 
          onPress={props.buttonAction}/>
       </View>
    )
}

const styles = StyleSheet.create({
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
    }  
  });

export default placeInput