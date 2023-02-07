import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, Alert } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";


export default function Calculator(){

    const [firstInput, setFirstInput] = useState(0);
    const [secondInput, setSecondInput] = useState(0);
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]);
    
    const calculate = (operator) => {
        if(isNaN(parseInt(firstInput)) || isNaN(parseInt(secondInput))){
            Alert.alert('Warning', "Please use numbers for calculation.");
        }
        else{        
            if(operator === '-'){
                const sub = firstInput-secondInput; //using sub/sum consts instead of setting calculation directly to history so that it's up to date when it's set in history
                setResult(sub);
                setHistory([...history, `${firstInput} - ${secondInput} = ${sub}`]);
            }
            else{
                const sum = firstInput+secondInput;
                setResult(sum);
                setHistory([...history, `${firstInput} + ${secondInput} = ${sum}`]);
            }
        }
    }
    
    const listHeader = () => {
        return(
            <View>
                <Text style={styles.history}>History</Text>
            </View>
        );
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.containerCalculator}>
                <TextInput style={styles.input} 
                value={firstInput}
                onChangeText={input => setFirstInput(Number(input))}
                keyboardType='numeric'
            />

            <Button title=' + ' onPress={() => calculate('+')} color='tomato' />
            <Button title=' - ' onPress={() => calculate('-')} color='tomato' />

            <TextInput style={styles.input} 
                value={secondInput}
                onChangeText={input => setSecondInput(Number(input))}
                keyboardType='numeric'
            />

            <Text style={styles.resultText}>{'= ' + result}</Text>
        

        
        </View>
        <View style={styles.history}>
            <FlatList 
            ListHeaderComponent={listHeader}
            data={history}
            renderItem={({ item }) => (
            <Text>{item} </Text>
        )}
        />
        </View>
    </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCalculator: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }, 
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }, 
    resultText:{
        fontSize: 30
    },
    history:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        fontSize: 20
    }
  });
