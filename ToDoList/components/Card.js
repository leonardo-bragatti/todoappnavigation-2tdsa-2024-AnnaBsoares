import { View, Text, TouchableOpacity } from "react-native";
import { StackActions } from '@react-navigation/native';
export function Card (props) {
    const {
        value,
        checked,
        id
    } = props.item;
    const onDetailsPressHandler = () => {
        const pushAction= StackActions.push("Details", { card: props.item, setCards:props.setCards });
        props.navigation.dispatch(pushAction);
    }

return (
    <View style={{borderColor: 'gray', borderWidth: 1, padding: 10,   justifyContent:"center", margin: 10, borderRadius: 30}}  >

       
        <TouchableOpacity style={{'width': '15%'}} onPress={() => props.onDelete(value)}>
            <Text  style ={{ fontSize: 15, color: 'white' }} >X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => props.onCheck(id)} >

        <Text style ={{ fontSize: 30 }}> {checked ? '👍' : '👎'}</Text>
        </TouchableOpacity>

        <Text  style ={{ fontSize: 20, margin:'0 auto',color: 'white' }}>{value}</Text>
        <TouchableOpacity style={{padding: 10, backgroundColor:'#5faab1', width: '20%', borderRadius: 20, marginLeft: 'auto'}}  onPress={onDetailsPressHandler}>
        <Text  style ={{ fontSize: 15, color: 'white'  }}>
            Details
        </Text>
       </TouchableOpacity>
    </View>
)


}