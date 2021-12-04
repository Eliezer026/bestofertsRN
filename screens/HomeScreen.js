import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class HomeScreen extends Component {
    render(){
        return(
            <View style={style.container}>
                <Text> HomeScreen </Text>
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})