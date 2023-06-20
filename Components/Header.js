import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <View style={{marginLeft:15 , marginTop:30 , backgroundColor:'white', marginRight:16}}>
        <Text style={{fontWeight:'bold', fontSize:28, color:'black'}}>
            Google Oauth with Firebase 
        </Text>
      </View>
    )
  }
}

export default Header