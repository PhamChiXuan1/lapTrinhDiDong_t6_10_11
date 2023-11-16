import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";

function man2({ navigation }) {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://6554c4a463cafc694fe6ee28.mockapi.io/ghichu")
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error));
    }, []);
    //them
    const [noidungghichu, setNoidungghichu]=useState("");
    const addNote = (note) => {
      fetch("https://6554c4a463cafc694fe6ee28.mockapi.io/ghichu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ noidungghichu}),
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.log(error));
    };
    //xoa
    const DeleteNote = async (id) => {
        await fetch(`https://6554c4a463cafc694fe6ee28.mockapi.io/ghichu/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            const newData = data.filter((item) => item.id !== id);
            setData(newData);
          })
          .catch((error) => console.error(error));
      };

  return (
    <View style={styles.container}>
      <View>
      <Image
            source={require('../assets/imgManageYourTask/Container 14.png')}
            style={{height: '40px', width:'100%', resizeMode:'contain'}}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: '10px'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('man1')}}>
            <Text>{'<-'}</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
            <Image
                source={require('../assets/imgManageYourTask/Image.png')}
                style={{height: '35px', width: '35px', resizeMode: 'contain'}}
            />
        </View>
      </View>

      <View style={{flexDirection: 'row', borderWidth: '1px', borderRadius: '3px', borderColor: 'gray',height: '40px', width: '300px', alignItems: 'center', top: '40px', left: '30px'}}>
        <Image
            source={require('../assets/img/Vector.png')}
            style={{height:'20px', width:'20px', resizeMode:'contain', left: '5px'}}
        />
        <TextInput style={{height: '30px', width: '280px', borderRadius: '10px', borderWidth: '1px'}} onChangeText={setNoidungghichu}></TextInput>
      </View>
      <View style={{top:'80px'}}>
        <FlatList
            data={data}
            renderItem={({item})=>{
                return(
                    <View style={{height: '50px', width:'300px', borderRadius:'40px', backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', left: '30px', marginBottom: '10px'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <TouchableOpacity 
                                onPress={()=>{DeleteNote(item.id)}}
                                style={{width:'50px'}}
                            >
                                <Image
                                    source={require('../assets/img/Vector.png')}
                                    style={{height:'20px', width:'20px', resizeMode:'contain', left: '5px'}}
                                />  
                            </TouchableOpacity>
                            <Text style={{width:'200px'}}>{item.noidungghichu}</Text>
                            {/* <View style={{width:'50px'}}>
                                <Image
                                    source={require('../assets/img/Vector.png')}
                                    style={{height:'20px', width:'20px', resizeMode:'contain', left: '5px'}}
                                />
                            </View> */}
                        </View>
                    </View>
                )
            }}
        />
      </View>

      <View style={{top:'140px', alignItems: 'center'}}>
        <View style={{height: '50px', width: '50px', backgroundColor:'rgba(0, 189, 214, 1)', borderRadius: '60px', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>addNote(noidungghichu)}>
                <Text style={{fontSize: '30px', color: 'white'}}>+</Text>
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
  content: {
    flex: 8,
  }
  
});

export default man2;
