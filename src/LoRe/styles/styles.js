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
//  mar:'rgb(255, 237, 138)',
 mar:'rgb(255, 0, 0)',

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
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
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
            },


            // bodyloginsuper: {
            //     backgroundColor: 'yellow',
            //     width: '100%',
            //     height:'15%',
            //     // minHeight: 140,
            //     // maxHeight: 150,
            //     justifyContent: 'center',
            //     alignItems: 'center',

            // },  

            bodylogininfer: {
                backgroundColor: 'rgb(255,120,120)',
                color: 'white',
                width: '100%',
                height:'100%',
            },  

                PageLogo:{
                    width: 35,
                    height: 35,
                },                

                bodylogininferTitle: {
                    backgroundColor: 'rgb(155,150,80)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height:'5%',
                },  

                bodylogininferfields: {
                    backgroundColor: 'rgb(110,150,160)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height:'95%',
                }, 
                
                StyledFormArea:{
                    width: '90%',
                    height: '100%',
                },

                MsgBox:{
                    alignItems: 'center',
                    fontSize: 13,
                },
                
                StyledButton:{
                    flexDirection: 'row',
                    backgroundColor: '#009DAE',
                    padding: 15,
                    justifyContent: 'center',
                    alignContent: 'flex-start',
                    borderRadius: 5,
                    height: 55,
                    marginVertical:5,

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

                Fontisto:{
                    paddingRight: 10,
                },

                ButtonText:{
                    color: 'rgb(255, 206,129)',
                    color: '#FFE652',
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
                    backgroundColor: 'rgb(0, 0, 0)',
                },

                ExtraView:{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                },

                ExtraText:{
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'rgb(0, 0, 0)',
                    fontSize: 15,

                },

                TextLink:{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 7,
                },

                TextLinkContent:{
                    color: 'rgb(0, 0, 26)',
                    fontSize: 15,
                },

                MyTextInput:{
                    width: '100%',
                    height: 100,
                    // backgroundColor: 'rgb(0,0,0)',
                    // borderWidth: 6,
                    // borderColor: 'rgb(255,0,255)',
                    marginTop: 25,
                    color: 'rgb(255,255,255)',
                },

                LeftIcon:{
                    left: 15,
                    top: 39,
                    position: 'absolute',

                    zIndex: 1,
                },

                Octicons:{
                    
                },

                StyledTextInput:{
                    backgroundColor: 'rgb(0,0,0)',

                    paddingLeft: 55,
                    borderRadius: 5,
                    fontSize: 16,
                    height: 60,
                    marginBottom: 10,
                    color: 'rgb(255,255,255)',
                    marginVertical: 3,
                },

                StyledInputLabel:{
                    color: 'rgb(0, 0, 0)',
                    fontSize: 14,
                    textAlign: 'left',
                },

                RigthtIcon:{
                    right: 5,
                    top: 39,
                    position: 'absolute',
                    zIndex: 1,
                },
});





























