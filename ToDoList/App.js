import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './routes/index'



export default function App() {
  return (
  <NavigationContainer>
      <MyStack/>
  </NavigationContainer>
  );
}