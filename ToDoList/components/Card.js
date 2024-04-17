import { View, Text, TouchableOpacity } from "react-native";

export function Card (props) {
    const {
        value,
        checked,
    } = props.item;

return (
    <View style={{borderColor: 'gray', borderWidth: 1, padding: 10,   justifyContent:"center", margin: 10}}  >
        <TouchableOpacity style={{'width': '15%'}} onPress={() => props.onDelete(value)}>
            <Text  style ={{ fontSize: 15, color: 'white' }} >X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => props.onCheck(value)} >
       
        <Text style ={{ fontSize: 30 }}> {checked ? '👍' : '👎'}</Text>
        </TouchableOpacity>

        <Text  style ={{ fontSize: 20, margin:'0 auto',color: 'white' }}>{value}</Text>

    </View>
)


}