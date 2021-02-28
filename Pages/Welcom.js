import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { Button, Icon } from 'native-base'

export default function Welcom({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.buttonPlaceholder}>
                <Button
                    onPress={() => navigation.navigate('StudentForm')}
                    style={styles.login}>
                    <Text style={styles.textstyle}>
                        STUDENT
                    </Text>
                </Button>
                <Button
                    onPress={() => navigation.navigate('CampusForm')}
                    style={styles.login}>
                    <Text style={styles.textstyle}>
                        CAMPUS
                    </Text>
                </Button>
                <Button
                    onPress={() => navigation.navigate('Login')}
                    style={styles.login}>
                    <Text style={styles.textstyle}>
                        ADMIN
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
        color: '#6B2F',
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