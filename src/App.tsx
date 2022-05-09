/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const VALID_PASSWORD = 8;
const MAX_CHARACTER_TEXT = 15;

/*  =========== STYLE SHEET ==========
 *  É um padrão de segregação de responsabilidades
 *  respeitar o escopo que cada pedaço do código se
 *  propõe a solucionar. Em WEB isso fica bem claro
 *  na separação clássica entre HTML (Estrutura), CSS
 *  (Estilo) e JavaScript (Lógica).
 *  Para melhor leitura e manutenção do código também
 *  adotamos padrões de para delimitar responsabilidades,
 *  um deles é a utilização de folhas de estilos que
 *  apenas possuem a responsabilidade de estilizar
 *  um pedaço do código e podem ser reutilizados,
 *  facilitando a leitura, escrita e manutanção do
 *  código.
 */

const App = () => {
  const [login, onChangeLogin] = useState('');
  const [password, onChangePassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);

  const handleOnPress = () => {
    validPassword
      ? Alert.alert('PASSWORD', 'Password Accepted')
      : Alert.alert('PASSWORD', 'Password needs to be at least 7 numbers');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AMAZING APP</Text>
      <View style={styles.contentContainer}>
        <View
          style={[
            styles.inputContainer,
            validPassword ? styles.validPassword : styles.invalidPassword,
          ]}>
          <TextInput
            placeholderTextColor="#55AA22"
            placeholder="USERNAME"
            keyboardType="email-address"
            maxLength={MAX_CHARACTER_TEXT}
            autoCapitalize="none"
            autoComplete="username"
            autoCorrect={false}
            value={login}
            onChangeText={onChangeLogin}
            style={styles.input}
          />
        </View>
        <View
          style={[
            styles.inputContainer,
            validPassword ? styles.validPassword : styles.invalidPassword,
          ]}>
          <TextInput
            placeholderTextColor="#55AA22"
            placeholder="PASSWORD"
            keyboardType="numeric"
            maxLength={MAX_CHARACTER_TEXT}
            autoCapitalize="none"
            autoComplete="password"
            secureTextEntry={true}
            autoCorrect={false}
            value={password}
            onChangeText={newText => {
              password.length >= VALID_PASSWORD
                ? setValidPassword(true)
                : setValidPassword(false);
              onChangePassword(newText);
            }}
            style={styles.input}
          />
        </View>
      </View>
      <Pressable
        style={[
          styles.buttonContainer,
          validPassword ? styles.validPassword : styles.invalidPassword,
        ]}
        onPress={() => handleOnPress()}>
        <Text
          style={[
            styles.buttonText,
            validPassword ? styles.validPassword : styles.invalidPassword,
          ]}>
          LOGIN
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#000000',
  },
  title: { color: '#FFFFFF', fontSize: 40, fontWeight: '500' },
  contentContainer: {
    justifyContent: 'center',
  },
  inputContainer: {
    width: 250,
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  validPassword: { borderColor: '#55AA22', color: '#55AA22' },
  invalidPassword: { borderColor: '#FFFFFF', color: '#FFFFFF' },
  input: {
    fontSize: 22,
    marginTop: 5,
    color: '#FFFFFF',
  },
  buttonContainer: {
    width: 150,
    height: 70,
    borderWidth: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { fontSize: 22, fontWeight: '500', textAlign: 'center' },
});

export default App;
