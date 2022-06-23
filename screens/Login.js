import {
  View,
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import TextInput from "../Common/TextInput";
import Text from "../Common/Text";
import AndroidSafeArea from "../Components/AndroidSafeArea";
const Login = ({ navigation }) => {
  return (
   <AndroidSafeArea>
     <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.image} />
      <Text 
      text="Login To Continue" 
      fontSize={20} 
      color="red"
       />
      <TextInput placeholder="Mobile" max={10} />
      <TextInput placeholder="Password" secureEntry={true} />
      <Button  title="Login" onPress={function() {
        navigation.navigate("Home")
      }} />
    </View>
   </AndroidSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 10,
    backgroundColor: "white",
  },
  image: {
    width: 160,
    height: 80,

  },
});

export default Login;
