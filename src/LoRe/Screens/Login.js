
import React,{useState, useContext} from 'react';
import Constants from 'expo-constants'
import { View,StyleSheet,Text, Dimensions,SafeAreaView,StatusBar } from 'react-native';

// icons    
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

// API
import axios from 'axios';

// Colores 
import { Colors,stylesLogin,PageLogo } from './../styles/styles';
const { primary,secondary, tertiary, quaternary,brand } = Colors;

// Redux
import { useDispatch } from 'react-redux';

// import { Form, Control } from 'react-redux-form/native';

import { Formik } from 'formik';

import{

  StyledFormArea, 
  MsgBox,
  StyledButton,
  ButtonText,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  LeftIcon,
  StyledTextInput,
  StyledInputLabel,
  RigthtIcon,


  
} from './../styles/styles';

const Login = ({navigation}) => {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  console.log(width,height, width/height);

  const [hidePassword, setHidePassword] = useState(true);
  const [message,setMessage] = useState('');
  const [messageType,setMessageType] = useState('');

  return (
 <SafeAreaView style={stylesLogin.container}>
      <StatusBar 
      style="auto" 
      animated={true}
      backgroundColor="#091115"
      />

    <View style={stylesLogin.headerlogin} >
        <View style={stylesLogin.containhead}>
          <Text style={stylesLogin.containheadtext} >RandomCode Lab</Text>
          {/* <PageLogo resizeMode="cover" source={require('./../assets/img/conejito.png')}/> */}

        </View>
    </View>

    <View style={stylesLogin.bodylogin} >

        <View style={stylesLogin.bodyloginsuper}>
          {/* <PageLogo resizeMode="cover" source={require('./../../../assets/img/conejito.png')}/> */}
        </View>  

        <View style={stylesLogin.bodylogininfer}>
          <View style={stylesLogin.bodylogininferTitle}>
            <Text style={stylesLogin.containheadtext}>Inicio de Sesión</Text>
          </View>   
          <View style={stylesLogin.bodylogininferfields}>
            {/* <Text style={stylesLogin.containheadtext}>Campos a rellenar</Text> */}
            {/* <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values, {setSubmitting}) => {
                if (values.username == '' || values.password == ''){
                    handleMessage("Todos los campos son obligatorios");
                    setSubmitting(false);
                } else {
                    handleLogin(values,setSubmitting);
                };

                console.log(values);
                // navigation.navigate('Welcome');
            }}
            >
                {({ handleChange, handleBlur,handleSubmit,values,isSubmitting }) => (
                    <StyledFormArea>
                    <MyTextInput
                        label="Ingresa nombre de usuario"
                        icon="mail"
                        placeholder="username"
                        placeholderTextColor={'#9CA3AF'}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                        // keyboardType="username-address"
                    />
                    <MyTextInput
                        label="Ingresa tu contraseña"
                        icon="lock"
                        placeholder="* * * * * * * * * * "
                        placeholderTextColor={'#9CA3AF'}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />    
                    <MsgBox type ={messageType}>{message}</MsgBox>
                    {!isSubmitting &&
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>Ingresar</ButtonText>
                    </StyledButton> }     

                    {isSubmitting &&
                    <StyledButton disabled={true} >
                        <ActivityIndicator size="large" color={primary}/>
                    </StyledButton> }                        

                    <Line />
                    <StyledButton google={true} onPress={handleSubmit}>
                        <Fontisto name="google" size={25} color='rgb(0, 0, 26)'/>
                        <ButtonText google={true}>Sign in with Google</ButtonText>
                    </StyledButton>
                    <ExtraView>
                        <ExtraText>¿Aún no tienes una cuenta?</ExtraText>    
                        <TextLink onPress={()=>{navigation.navigate('Signup')}}>
                        <TextLinkContent>Signup</TextLinkContent>
                        </TextLink>
                    </ExtraView>   
                    </StyledFormArea>
                )}
            </Formik> */}
          </View>   
        </View>    

    </View>
  

</SafeAreaView>    
  )
}

// const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
//   return (
//       <View>
//       <LeftIcon>
//           <Octicons name={icon} size={30} color={brand}/>
//       </LeftIcon>
//       <StyledInputLabel>{label}</StyledInputLabel>
//       <StyledTextInput {...props} />
//       {isPassword && (
//           <RigthtIcon onPress={()=> setHidePassword(!hidePassword)} >
//               <Ionicons name={ hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color='rgb(0, 0, 26)'/>
//           </RigthtIcon>)}
//       </View>
//   );
// };


export default Login;
