import styled from 'styled-components';
import Constants from 'expo-constants';
import { View,StyleSheet,Text, Dimensions,SafeAreaView,StatusBar,Image } from 'react-native';

const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
 primary : "rgb(116, 0, 0)", 
 secondary : "rgb(0, 41, 0)",
 tertiary : "rgb(0, 0, 26)",
 quaternary : "rgb(116, 41, 26)",
 brand: "rgb(116, 0, 0)",
 darkLight: "rgb(0, 0, 26)",
};

export const stylesLogin = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#091115',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingTop:Constants.statusBarHeight, 

      },    

        headerlogin: {
            backgroundColor: '#091115',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height*(1/16),
            justifyContent: 'center',
            alignItems: 'center',
            
        },    

            containhead: {
                backgroundColor: '#091115',
                width: Dimensions.get('window').width*(15.7/16),
                height: Dimensions.get('window').height*(.8/16),
                justifyContent: 'center',
                alignItems: 'center',

            },
            
                containheadtext: {
                    color: '#fff',

                },

        bodylogin: {
            backgroundColor: 'cyan',
            width: '100%',
            height:'100%',
        },

            bodyloginsuper: {
                // backgroundColor: 'blue',
                width: '100%',
                height:'18%',
                minHeight: 140,
                maxHeight: 150,
                justifyContent: 'center',
                alignItems: 'center',

            },  
            bodylogininfer: {
                backgroundColor: 'red',
                color: 'white',
                width: '100%',
                height:'80%',

                },  
                bodylogininferTitle: {
                    backgroundColor: 'yellow',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height:'10%',
                    },  
                bodylogininferfields: {
                    backgroundColor: 'rgb(255,200,100)',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    height:'90%',
                    paddingTop: 30,
                },  

});

// export const PageLogo = styled.Image`
//     width: 125px;
//     height: 125px;
//     /* width: 125px;
//     height: 125px; */
// `;

// export const StyledFormArea = styled.View`
//     width: 85%;
// `;

// export const MsgBox = styled.Text`
//     text-align: center;
//     font-size: 13px;
// `;


// export const StyledButton = styled.TouchableOpacity`
//     padding: 15px;
//     background-color: 'rgb(0, 0, 26)';
//     justify-content: center;
//     align-items: center;
//     border-radius: 5px;
//     height: 55px;
//     /* marginVertial:5px; */

//     ${props => props.google == true && `
//         background-color: rgb(0, 0, 26);
//         flex-direction: row;
//         justify-content: center;
//     `}
// `;


// export const ButtonText = styled.Text`
//     color: rgb(0, 0, 26);
//     font-size: 16px;

//     ${(props) => props.google == true && `
//         padding-left: 10px;
//         padding-right: 10px;
//         justify-content: center;
//     `}

// `;

// export const Line = styled.View`
//     width: 100%;
//     height: 1px;
//     margin-top: 10px;
//     margin-bottom: 10px;
//     background-color: 'rgb(0, 0, 26)';    
// `; 

// export const ExtraView = styled.View`
//     justify-content: center;
//     flex-direction: row;
//     align-items: center;
//     padding: 10px;
// `;

// export const ExtraText = styled.Text`
//     justify-content: center;
//     align-items: center;
//     color: 'rgb(0, 0, 26)';
//     font-size: 15px;
// `;

// export const TextLink = styled.TouchableOpacity`
//     justify-content: center;
//     align-items: center;
//     margin-left: 7px;
// `;

// export const TextLinkContent = styled.Text`
//     color: 'rgb(0, 0, 26)';
//     font-size: 15px;
// `;

// export const LeftIcon = styled.View`
//     left: 15px;
//     top: 34px;
//     position: absolute;
//     z-index: 1;
// `;

// export const StyledTextInput = styled.TextInput`
//     background-color: 'rgb(0, 0, 26)';
//     padding: 15px;
//     padding-left: 55px;
//     border-radius: 5px;
//     font-size: 16px;
//     height: 60px;
//     margin-bottom: 10px;
//     color: 'rgb(0, 0, 26)';
//     /* marginVertial:3px; */
// `;

// export const StyledInputLabel = styled.Text`
//     color: 'rgb(0, 0, 26)';
//     font-size: 13px;
//     text-align: left;
// `;

// export const RigthtIcon = styled.TouchableOpacity`
//     right: 15px;
//     top: 34px;
//     position: absolute;
//     z-index: 1;
// `;