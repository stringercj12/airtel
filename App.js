import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';

export default function App() {
  return (
    <View style={styles.Container}>
      {/* <Icon name="Home" size={58} color="#f00" /> */}
      <View style={styles.Logo}>
        <Image source={require('./src/assets/logo-branca.png')} />
      </View>


      <View style={styles.Conteudo}>
        <View style={styles.AreaText}>
          <Text style={styles.Titulo}>Welcome</Text>
          <Text style={styles.SubTitulo}>Enjoy the worlds fastest and best network</Text>
        </View>
        <View style={styles.AreaButton}>
          <TouchableOpacity style={styles.ButtonSingUp} onPress={() => Alert.alert('SIGN UP')}>
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


});
