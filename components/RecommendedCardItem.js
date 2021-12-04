import React, { Component } from "react";
import {View, Text, StyleSheet, Image} from "react-native"
import { Card, CardItem, Right} from 'native-base';
import StarRating from "react-native-star-rating";
import { Ionicons } from '@expo/vector-icons';



class RecommendedCardItem extends Component{
    render(){
        return(
        <CardItem>
            <View>
                <Image style={{height: 90, width: 90}} 
                source={this.props.imageUri} />
            </View>
            <Right style={{ flex: 1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20}} >
              <Text>{this.props.itemName}</Text>
              <Text style={{color:'grey', fontSize:11}}>{this.props.itemCreator}</Text>
              <Text>{this.props.itemPrice}</Text>
              <Text>${this.props.rating}</Text>
              
              

            </Right>


            


        </CardItem>

        
        );
    }
}


export default RecommendedCardItem;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});