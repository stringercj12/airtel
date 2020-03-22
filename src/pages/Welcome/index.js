import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    TextInput
} from 'react-native';

export default function Welcome() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function heandleLogin() {
        if (user === "" && password === "") {
            Alert.alert('Por favor informe login e senha para continuar...');
            return;
        }else{
            Alert.alert('Login efetuado, em breve você irá para nova home...');
            return;
        }
    }

    return (
        <View style={styles.Container}>
            {/* <Icon name="Home" size={58} color="#f00" /> */}
            <View style={styles.Logo}>
                <Image source={require('./../../assets/logo-branca.png')} />
            </View>


            <View style={styles.Conteudo}>
                <View style={styles.AreaText}>
                    <Text style={styles.Titulo}>Welcome</Text>
                    <Text style={styles.SubTitulo}>Enjoy the worlds fastest and best network</Text>
                </View>
                <View style={styles.AreaButton}>

                    <TouchableOpacity
                        style={styles.ButtonSingUp}
                        onPress={() => Alert.alert('SIGN UP')}
                    >
                        <Text style={styles.ButtonSingUpText}>SIGN UP</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonLogin} onPress={() => Alert.alert('LOGIN')}>
                        <Text style={styles.ButtonLoginText}>LOGIN</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.Language}>
                    <Text style={styles.LanguageText}>Language</Text>
                    <TouchableOpacity style={styles.ButtonLanguage} onPress={() => Alert.alert('Language')}>
                        <Text style={styles.ButtonLanguageText}>English</Text>
                    </TouchableOpacity>
                </View>

            </View>


            <View style={styles.Modal}>
                <View style={styles.AreaTextModal}>
                    <View style={styles.ButtonClose}>
                        <Text style={styles.white}>x</Text>
                    </View>
                    <Text style={styles.TitleModal}>LOGIN</Text>
                    <Text style={styles.SubTitleModal}>Lets get started</Text>
                </View>
                <TextInput style={styles.Input} onChangeText={setUser} placeholder="Mobile number" />

                <TextInput style={styles.Input} onChangeText={setPassword} placeholder="Password" />

                <View style={styles.ForgotPassword}>
                    <Text style={styles.ForgotPasswordText}>Forgot password ?</Text>
                </View>

                <TouchableOpacity style={styles.ButtonLoginModal} onPress={heandleLogin}>
                    <Text style={styles.ButtonLoginModalText}>Login</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D6001B',
    },
    Logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Conteudo: {
        width: '90%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    AreaText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    Titulo: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold'
    },
    SubTitulo: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    AreaButton: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 60
    },
    ButtonSingUp: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        width: 335,
        height: 52,
        padding: 15,
        marginBottom: 15
    },
    ButtonLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#fff',
        width: 335,
        height: 52,
        padding: 15,
        marginBottom: 15
    },
    ButtonSingUpText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    ButtonLoginText: {
        color: '#D6001B',
        fontSize: 16,
        fontWeight: 'bold'
    },
    Language: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    LanguageText: {
        fontSize: 16,
        color: '#fff',
        marginRight: 10,
        fontWeight: 'bold'
    },
    ButtonLanguage: {
        backgroundColor: '#B80D23',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 100
    },
    ButtonLanguageText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
    Modal: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'absolute',
        width: '100%',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingHorizontal: 15,
        padding: 30,
        bottom: -40
    },
    Input: {
        padding: 10,
        marginBottom: 15,
        bottom: 0,
        backgroundColor: '#f3f3f3',
        borderRadius: 5
    },
    AreaTextModal: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingBottom: 20
    },
    TitleModal: {
        color: '#D6001B',
        fontSize: 20,
        fontWeight: 'bold'
    },
    SubTitleModal: {
        color: '#c3c3c3',
        fontSize: 14,
    },
    ForgotPassword: {
        flex: 1,
        alignItems: 'flex-end',
        marginBottom: 15,
    },
    ForgotPasswordText: {
        color: '#3f3f3f'
    },
    ButtonLoginModal: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#D6001B',
        backgroundColor: '#D6001B',
        width: 335,
        height: 52,
        padding: 15,
        marginBottom: 35,
        borderRadius: 5
    },
    ButtonLoginModalText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    ButtonClose: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#D6001B',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        right: 0
    },
    white: {
        color: '#fff',
        fontSize: 14
    }
});
