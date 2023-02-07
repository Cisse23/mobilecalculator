import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";


export default function Home(){
    return(
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Welcome!</Text>
        </View>
    );
}