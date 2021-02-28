import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { Button, Icon } from 'native-base'


//...
export default function CampusForm({ navigation }) {

    return (
        <View style={styles.container}>


            <View style={styles.buttonPlaceholder}>
                
                <Button
                    onPress={() => navigation.navigate('CampusLogin')}
                    style={styles.login}>
                    <Text style={styles.textstyle}>
                        Sign In 
                    </Text>
                </Button>

                <Button
                    onPress={() => navigation.navigate('CampusRegistration')}
                    style={styles.login}>
                    <Text style={styles.textstyle}>
                        Sign Up
                    </Text>
                </Button>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginHorizontal: 70,
        alignSelf: 'center',
        marginVertical: 150,

    },
    header1: {

        fontSize: 30,
        color: '#307ecc',
        fontWeight: 'bold'
    },
    header2: {
        position: 'relative',
        textAlign: 'center',
        fontSize: 15,
        color: '#6B2F',

    },
    buttonPlaceholder: {
        flexDirection: 'column',
        flex: 1,
        marginTop: 50,

    },
    login: {
        padding: 20,
        borderRadius: 3,
        marginBottom: 10,
        backgroundColor: '#6B2F',
        justifyContent: 'center',

    },
    textstyle: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        width: '100%',

    }

});