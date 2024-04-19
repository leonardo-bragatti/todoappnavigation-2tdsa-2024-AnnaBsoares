import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, SafeAreaView, Keyboard} from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';



export default function Details({ route }) {
    const { card, setCards } = route.params;
    const [description, setDescription] = useState(card.description);
    
    const onChangeTextHandle = (value) => {
        setCards((cards) => cards.map(el => {
            if (el.id === card.id) {
                return { ...el, description: value }
            }
            return el
        }))

        setDescription(value)

        
    }
    const yyyy =card.date.getFullYear();
    let mm =card.date.getMonth() + 1;
    let dd =card.date.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const today = dd + '/' + mm + '/' + yyyy;



    return (
        <ScrollView style={styles.container}>
            <Text  style ={{ fontSize: 25, color: 'white', marginTop:20, textAlign: 'center' }}>{card.value}</Text>
            <TextInput placeholder="Descrição"  placeholderTextColor={'#ddeff0'} style={{borderColor: 'gray', borderWidth: 1, padding: 10, 
             justifyContent:"center", margin: 10, width: '90%', marginTop:50, color: 'white'}} value={description} onChangeText={onChangeTextHandle}
             multiline={true}
             numberOfLines={5}
             textAlignVertical={'top'}
             scrollEnabled={true}

             />


            <Text style ={{ fontSize: 18, color: 'white', marginTop: 20 }}> Criado em: {today}</Text>


        </ScrollView>
    );



    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
     
      
    },
  });