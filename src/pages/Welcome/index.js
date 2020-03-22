import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    TextInput,
    Animated,
    ScrollView,
    CheckBox
} from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';



export default function Welcome({ navigation }) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [nic, setNic] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    // Ações do modal
    const [modalVisibleLogin, setModalVisibleLogin] = useState(false);
    const [modalVisibleSignUp, setModalVisibleSignUp] = useState(false);
    const [modalVisibleLanguage, setModalVisibleLanguage] = useState(false);
    const [scrollOffset, setScrollOffset] = useState('');

    function handleOnScroll(event) {
        setScrollOffset(event.nativeEvent.contentOffset.y);
    }

    function handleScrollTo(p) {
        if (this.scrollViewRef.current) {
            this.scrollViewRef.current.scrollTo(p);
        }
    }

    function toggleModalVisibleLogin() {
        setModalVisibleLogin(!modalVisibleLogin);
    }

    function toggleModalVisibleSignUp() {
        setModalVisibleSignUp(!modalVisibleSignUp);
    }

    function toggleModalVisibleLanguage() {
        setModalVisibleLanguage(!modalVisibleLanguage);
    }


    function heandleLogin() {
        if (user === "" && password === "") {
            Alert.alert('Por favor informe login e senha para continuar...');
            return;
        } else {
            Alert.alert('Login efetuado, em breve você irá para nova home...');
            setModalVisibleLogin(false);
            navigation.navigate('Tabs');
            return;
        }
    }

    function heandleCreate() {
        if (pass !== confirmPass) {
            Alert.alert('As senhas não conferem');
            return;
        } else {
            Alert.alert('Cadastro efetuado, em breve você irá para nova home...');
            return;
        }
    }

    async function heandleLanguage(e) {
        try {
            await AsyncStorage.setItem('LanguageSelect', 'English')
        } catch (e) {
            // saving error
        }
    }

    return (


        < View style={styles.Container} >
            {/* <Icon name="Home" size={58} color="#f00" /> */}
            < View style={styles.Logo} >
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
                        onPress={toggleModalVisibleSignUp}
                    >
                        <Text style={styles.ButtonSingUpText}>SIGN UP</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonLogin} onPress={toggleModalVisibleLogin}>
                        <Text style={styles.ButtonLoginText}>LOGIN</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.Language} >
                    <Text style={styles.LanguageText}>Language</Text>
                    <TouchableOpacity style={styles.ButtonLanguage} onPress={toggleModalVisibleLanguage}>
                        <Text style={styles.ButtonLanguageText}>English</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <Modal style={{ padding: 0 }} isVisible={modalVisibleLogin}>
                <Animated.View style={styles.ModalArea}>
                    <View style={[styles.AreaTextModal]}>
                        <View>
                            <Text style={styles.TitleModal}>Login</Text>
                            <Text style={styles.SubTitleModal}>Lets get started</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.ButtonClose} onPress={toggleModalVisibleLogin}>
                                <Icon name="close" size={14} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TextInput style={styles.Input} onChangeText={setUser} placeholder="Mobile number" />

                    <TextInput style={styles.Input} onChangeText={setPassword} placeholder="Password" />

                    <View style={styles.ForgotPassword}>
                        <Text style={styles.ForgotPasswordText}>Forgot password ?</Text>
                    </View>

                    <TouchableOpacity style={styles.ButtonLoginModal} onPress={heandleLogin}>
                        <Text style={styles.ButtonLoginModalText}>Login</Text>
                    </TouchableOpacity>

                </Animated.View>
            </Modal>

            <Modal isVisible={modalVisibleSignUp}>
                <Animated.View style={[styles.ModalArea, {
                    height: 370,
                }]}>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={[styles.AreaTextModal]}>
                            <View>
                                <Text style={styles.TitleModal}>Signup</Text>
                                <Text style={styles.SubTitleModal}>Register with airtel account number, to start your account!</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={[styles.ButtonClose, { right: 30, top: -20 }]} onPress={toggleModalVisibleSignUp}>
                                    <Icon name="close" size={14} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TextInput style={styles.Input} onChangeText={setUser} placeholder="Mobile number" />

                        <TextInput style={styles.Input} onChangeText={setNic} placeholder="NIC number" />

                        <TextInput style={styles.Input} onChangeText={setEmail} placeholder="Email address" />

                        <TextInput style={styles.Input} onChangeText={setPass} placeholder="Password" />

                        <TextInput style={styles.Input} onChangeText={setConfirmPass} placeholder="Confirm password" />

                        <CheckBox />
                        <Text>Terms & conditions</Text>


                        <TouchableOpacity style={styles.ButtonLoginModal} onPress={heandleCreate}>
                            <Text style={styles.ButtonLoginModalText}>SIGN UP</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </Animated.View>
            </Modal>

            <Modal isVisible={modalVisibleLanguage}>
                <Animated.View style={[styles.ModalArea]}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: '#999999' }}>Select language</Text>
                        </View>
                        <View >
                            <TouchableOpacity style={styles.ButtonClose} onPress={toggleModalVisibleLanguage}>
                                <Icon name="close" size={14} color="#fff" />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center' }}>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={heandleLanguage} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7F2F2', width: 60, height: 60, borderRadius: 50, margin: 15 }}>
                                <Icon name="etsy" size={18} color="#D6001B" />
                            </TouchableOpacity>
                            <Text style={{ color: '#999999' }}>English</Text>
                        </View>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={heandleLanguage} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7F2F2', width: 60, height: 60, borderRadius: 50, margin: 15 }}>
                                <Icon name="home" size={18} color="#D6001B" />
                            </TouchableOpacity>
                            <Text style={{ color: '#999999' }}>Português</Text>
                        </View>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={heandleLanguage} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7F2F2', width: 60, height: 60, borderRadius: 50, margin: 15 }}>
                                <Icon name="home" size={18} color="#D6001B" />
                            </TouchableOpacity>
                            <Text style={{ color: '#999999' }}>Espanhol</Text>
                        </View>
                    </View>

                </Animated.View>
            </Modal>
        </View >
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
    ModalArea: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'absolute',
        width: 360,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingHorizontal: 15,
        marginHorizontal: -18,
        padding: 30,
        bottom: -20
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
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
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
        width: '100%',
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
        width: 22,
        height: 22,
        borderRadius: 50,
        backgroundColor: '#D6001B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    white: {
        color: '#fff',
        fontSize: 14
    }
});
