import React from 'react';
import { Colors } from './../styles/styles'
const { primary, tertiary } = Colors;

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Sreens
import Login from "./../Screens/Login";
import Signup from "./../Screens/Signup";
import Welcome from "./../Screens/Welcome";

const Stack = createNativeStackNavigator();

//credentials context
// import { CredentialsContext } from './../components/CredentialsContext';

// import { getHeaderTitle } from '@react-navigation/elements';

const RootStack = ({navigation}) => {
    // const title = getHeaderTitle(options, route.name);

    return (
        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                    headerTitleStyle: {
                        color: 'green',
                    
                    },
                    headerShown: true,
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: 'Holis titulo bolis',
                    // headerLeftContainerStyle: {
                    //     paddingLeft: 20,
                    // },
                headerShown: true,

                }}
                initialRouteName="Login"
            >
                <Stack.Screen 
                    
                    options={{
                        // // contentStyle:
                        // headerShadowVisible: false,
                        // headerTitleStyle: {
                        //     color: 'red',
                        
                        // },
                        
                        headerStyle: {
                            // backgroundColor: '#ffff',
                            backgroundColor:'transparent'
                        },
                        headerTransparent: true,

                    }}   
                    
                    options={{
                        headerShown: false,
                    }}                
                    name="Login" component={Login} 
                />
                <Stack.Screen 
                    // options={{
                        //     headerTitle: '',
                    // }}                   
                    name="Signup" component={Signup}  
                />
                <Stack.Screen 
                    options={{ 'headerTintColor': primary}} 
                    name="Welcome" component={Welcome}  
                />
            </Stack.Navigator>
        </NavigationContainer>                

    );
};

export default RootStack;
