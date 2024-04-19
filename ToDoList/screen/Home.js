import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, SafeAreaView, Keyboard} from 'react-native';
import { useState, useRef, useEffect} from 'react';
import { Card } from '../components/Card';

export default function Home({ navigation }) {
  const [cards, setCards] = useState([]);
  const [text, setText] = useState('');
  const [selectedId, setSelectedId] = useState();
  const [keyBoardShow, setKeyboardShow] = useState(false);

  const inputRef = useRef();

  const onClickHandle = () =>{
    //adicionar
    const value = text;
    const date = new Date();

    const valueObj = {
       description:'',
       id: Math.random().toString(), 
       date,
       value,
      checked: false
    }

    setText('');
    setCards((valorAntigo) => {
      return [...valorAntigo, valueObj]
    })    
  }
  
  //delete 
  const onDeleteHandle = (value) => {
    setCards((cards) => cards.filter(el => el.value !== value) );
  }

  //check
  const onCheckHandle = ( id) => {
    setCards((cards) => cards.map(el => {
      if (el.id === id) {
        return { ...el, checked: !el.checked } 
      }
      return el
    }))
  }
useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardShow(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardShow(false);
    });
 
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <>
      
      <View style={styles.container}>
        <Text style={{fontSize: 30, color: 'white', marginTop: 70, textAlign: 'center' }}>ToDoList da ANNINHA </Text>
        <View style={{ alignItems: 'center' }}>

            <TextInput
            onChangeText={(value )=> setText(value)}
            type="text"
            placeholder="Digite sua tarefa..."
            value={text}
            placeholderTextColor={'#ddeff0'}
            style={{fontSize: 12,  borderColor: '#bfe0e2', borderWidth: 1, color: 'white', marginTop: 70, padding: 10, width: '80%' , borderRadius: 30}}
            />
            <TouchableOpacity onPress={onClickHandle} style={{width: '30%',}}>
            <Text style={{fontSize: 15, backgroundColor: '#5faab1', borderRadius: 20, marginTop: 20, padding: 10, color: 'white', textAlign: 'center'  }}>Adicionar</Text>
            </TouchableOpacity>
        </View>
        {!keyBoardShow && <View>

            <FlatList style={{width: '100%', backgroundColor: '#000', color: 'white' , marginTop: 50, marginBottom: 50}}
            data={cards}
            renderItem={({ item }) => <Card item={item} onDelete={onDeleteHandle} onCheck={onCheckHandle} navigation={navigation}  setCards={setCards}/>}
            keyExtractor={item => item.id.toString()}
            />
            
        </View>}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    minHeight: '100%',
    // justifyContent: 'center',
  },
});
