import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from "./Home";
import Detail from "./Detail";

const StackNavigation = createStackNavigator({

    Home:{
        screen: Home,
        navigationOptions:{
            headerShow: false
        }
    }
})



export default createAppContainer(StackNavigation);



