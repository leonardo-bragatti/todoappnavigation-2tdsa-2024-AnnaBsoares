import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/Home"; 
import DetailsScreen from "../screen/Details";
const Stack = createStackNavigator();


export function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}