import React, { Component } from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from 'react-navigation';

import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image
} from 'react-native';

import { Container, Content, Header, Left, Right, Icon, Item, Input,Card,CardItem} from "native-base";

import FAIcon from 'react-native-vector-icons/FontAwesome'
import RecommendedCardItem from './components/RecommendedCardItem'

import Swiper from 'react-native-swiper';

class HomeScreen extends Component {

    
    render(){

        
        
        return(
            
           
            <Container>
                <Header style={[{backgroundColor:'#3a455c',
            height:90, borderBottomColor:'#757575'}, styles.androidHeader]}>
                <Left style={{ flexDirection: 'row'}}>
                    <Ionicons onPress={()=> this.props.navigation.navigate('DrawerOpen')}
                     name="md-apps" style={{color:'white',
                     marginRight: 15,fontSize:32}} />
                    <Ionicons name="md-jet" style={{
                    fontSize:32, color:'white'}} />
                </Left>

                

                <View style={{flex: 1, height: "100%",
              marginLeft: 5, justifyContent:'center'}}>
                <Item style={{backgroundColor:'white',
                 paddingHorizontal: 10, borderRadius:4}}>


                     <Ionicons name="search" style={{
                         fontSize:20, paddingTop:5
                     }} />
                     <Input placeholder="Search" />

                     

                 </Item>
                </View>



                </Header>
                

            
             <Content style={{ backgroundColor: '#d5d5d6',marginTop:0 }}>
                <View style={{height: 50, backgroundColor:'white', flexDirection:'row',
                               paddingHorizontal:5, alignItems:'center', justifyContent:'space-between' }}>
                
                <Text>Hi! Lebron James</Text>
                <View style={{ flexDirection: 'row'}}>
                    <Text>You Account </Text>
                    <Ionicons name="arrow-forward" style={{ fontSize:18 }} />

                </View>

             </View>
               <Swiper 
             autoplay={true}
             style={{ height:100}}>
                 <View style={{ flex:1}} >
                     <Image style={{ flex: 1, height: null, width: null, resizeMode:'contain'}}
                      source={require('./assets/download.jpeg')} />

                 </View>

                 <View style={{ flex: 1}}>
                 <Image style={{ flex: 1, height: null, width: null, resizeMode:'contain'}}
                      source={require('./assets/download.jpeg')} />

                 </View>
                 <View style={{ flex: 1}}>
                 <Image style={{ flex: 1, height: null, width: null, resizeMode:'contain'}}
                      source={require('./assets/splash.png')} />

                 </View>
                 

             </Swiper>
             <Card style={{marginLeft:5, marginRight:4}}>
                 <CardItem header style={{borderBottomWidth:1, borderBottomColor:'#dee0e2'}}>
                     <Text>Your Recommendations</Text>

                 </CardItem>
                 <RecommendedCardItem 
                 
                 itemName="You can heal your life"
                 itemCreator="Louise Hay"
                 itemPrice="$10"
                 savings="2.5"
                 imageUri={require("./assets/download.jpeg")}
                 rating={4}/>

                <RecommendedCardItem 
                 
                 itemName="You can heal your life"
                 itemCreator="Louise Hay"
                 itemPrice="$10"
                 savings="2.5"
                 imageUri={require("./assets/download.jpeg")}
                 rating={4}/>
 
                <RecommendedCardItem 
                 
                 itemName="You can heal your life"
                 itemCreator="Louise Hay"
                 itemPrice="$10"
                 savings="2.5"
                 imageUri={require("./assets/download.jpeg")}
                 rating={4}/>


             </Card>
             </Content>



            </Container>
        );
    }
}

const StackNavigation = createStackNavigator({

    Home:{
        screen: HomeScreen,
       
    }
})



export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    androidHeader:{
     ...Platform.select({


       
        android:{
            paddingTop: StatusBar.currentHeight,

        }
    }) 
    }


})