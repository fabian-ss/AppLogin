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
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'cyan',

      },    

        headerlogin: {
            width: '100%',
            height: '6%',
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',

        },    

            containhead: {
                backgroundColor: 'rgb(55,150,100)',
                width: '98%',
                height: '87%',
                justifyContent: 'center',
                alignItems: 'center',
              
            },
            
                containheadtext: {
                    color: '#fff',

                },

        bodylogin: {
            width: '100%',
            height: '94%',
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',

        },
            containbody: {
                backgroundColor: 'blue',
                width: '98%',
                height: '98%',
                // justifyContent: 'center',
                // alignItems: 'center',
                
            },


            bodyloginsuper: {
                backgroundColor: 'yellow',
                width: '100%',
                height:'20%',
                // minHeight: 140,
                // maxHeight: 150,
                justifyContent: 'center',
                alignItems: 'center',

            },  

            bodylogininfer: {
                backgroundColor: 'rgb(255,120,120)',
                color: 'white',
                width: '100%',
                height:'80%',

                },  

                PageLogo:{
                    width: 100,
                    height: 100,
                },                

                bodylogininferTitle: {
                    backgroundColor: 'rgb(155,150,80)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height:'8%',
                    },  
                bodylogininferfields: {
                    backgroundColor: 'rgb(255,200,100)',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    height:'92%',
                    paddingTop: 30,
                },  

       
                StyledFormArea:{
// export const StyledFormArea = styled.View`
//     width: 85%;
// `;
            width: '85%',
                },
                MsgBox:{
                    alignItems: 'center',
                    fontSize: 13,
            
// export const MsgBox = styled.Text`
//     text-align: center;
//     font-size: 13px;
// `;
                },
                StyledButton:{
                    backgroundColor: 'rgb(0, 0, 26)',
                    padding: 15,
                    justifyContent: 'center',
                    alignContent: 'center',
                    borderRadius: 5,
                    height: 55,

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
                },
                ButtonText:{
                   color: 'rgb(0, 0, 26)',
                   fontSize: 16,
// export const ButtonText = styled.Text`
//     color: rgb(0, 0, 26);
//     font-size: 16px;

//     ${(props) => props.google == true && `
//         padding-left: 10px;
//         padding-right: 10px;
//         justify-content: center;
//     `}

// `;
                },
                Line:{
                    width: '100%',
                    height: 1,
                    marginTop: 10,
                    marginBottom: 10,
                    backgroundColor: 'rgb(0, 0, 26)',
// export const Line = styled.View`
//     width: 100%;
//     height: 1px;
//     margin-top: 10px;
//     margin-bottom: 10px;
//     background-color: 'rgb(0, 0, 26)';    
// `; 
                },
                ExtraView:{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10,
// export const ExtraView = styled.View`
//     justify-content: center;
//     flex-direction: row;
//     align-items: center;
//     padding: 10px;
// `;

                },
                ExtraText:{
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'rgb(0, 0, 26)',
                    fontSize: 15,
// export const ExtraText = styled.Text`
//     justify-content: center;
//     align-items: center;
//     color: 'rgb(0, 0, 26)';
//     font-size: 15px;
// `;
                },
                TextLink:{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 7,
// export const TextLink = styled.TouchableOpacity`
//     justify-content: center;
//     align-items: center;
//     margin-left: 7px;
// `;
                },
                TextLinkContent:{
                    color: 'rgb(0, 0, 26)',
                    fontSize: 15,
// export const TextLinkContent = styled.Text`
//     color: 'rgb(0, 0, 26)';
//     font-size: 15px;
// `;
                },
                LeftIcon:{
                    left: 15,
                    top: 34,
                    position: 'absolute',
                    zIndex: 1,
// export const LeftIcon = styled.View`
//     left: 15px;
//     top: 34px;
//     position: absolute;
//     z-index: 1;
// `;
                },
                StyledTextInput:{
                    backgroundColor: 'rgb(0, 0, 26)',
                    padding: 15,
                    borderRadius: 5,
                    fontSize: 16,
                    height: 60,
                    marginBottom: 'rgb(0, 0, 26)',
                    color: ''
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
                },
                StyledInputLabel:{
                    color: 'rgb(0, 0, 26)',
                    fontSize: 13,
                    textAlign: 'left',
// export const StyledInputLabel = styled.Text`
//     color: 'rgb(0, 0, 26)';
//     font-size: 13px;
//     text-align: left;
// `;
                },
                RigthtIcon:{
                    right: 15,
                    top: 34,
                    position: 'absolute',
                    zIndex: 1,
// export const RigthtIcon = styled.TouchableOpacity`
//     right: 15px;
//     top: 34px;
//     position: absolute;
//     z-index: 1;
// `;
                },
                StyledTextInput:{

                }

});





























