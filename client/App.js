import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import ProfileSetup from './screens/ProfileSetup';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}