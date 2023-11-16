import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable,
} from "react-native";

function man1({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
      <Image
            source={require('../assets/imgManageYourTask/Container 14.png')}
            style={{height: '40px', width:'100%', resizeMode:'contain'}}
        />
      </View>
      <View style={{justifyContent: 'center', alignItems:'center', top: '30px'}}>
        <Image
            source={require('../assets/imgManageYourTask/Image.png')}
            style={{height: '50px', width:'50px', resizeMode:'contain'}}
        />
      </View>
      <View style={{}}>
        <Text style={{color: 'rgba(0, 189, 214, 1)', fontSize: '40px', fontWeight: 'bold', textAlign: 'center', top:'60px'}}>TAKE NOTES</Text>
      </View>
      <View style={{flexDirection: 'row', borderWidth: '1px', borderRadius: '10px', borderColor: 'gray',height: '40px', width: '300px', alignItems: 'center', top: '110px', left: '30px'}}>
        <Image
            source={require('../assets/img/Vector.png')}
            style={{height:'20px', width:'20px', resizeMode:'contain', left: '5px'}}
        />
        <TextInput placeholder="   Enter your name" style={{height: '40px', width: '300px'}}>
        </TextInput>
      </View>
      <View style={{flexDirection: 'row', borderWidth: '1px', borderRadius: '10px', borderColor: 'gray',height: '40px', width: '300px', alignItems: 'center', top: '120px', left: '30px'}}>
        <Image
            source={require('../assets/img/Vector.png')}
            style={{height:'20px', width:'20px', resizeMode:'contain', left: '5px'}}
        />
        <TextInput placeholder="   Enter your password" style={{height: '40px', width: '300px'}}>
        </TextInput>
      </View>
      <View style={{top:'200px'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
                onPress={()=>{navigation.navigate('man2')}} 
                style={{height: '40px', width: '180px', backgroundColor: 'rgba(0, 189, 214, 1)', borderRadius: '10px', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', fontSize: '18px', color:'white'}}>LOGIN</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  
});

export default man1;
