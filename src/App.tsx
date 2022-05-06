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
import { SafeAreaView, TextInput, View } from 'react-native';

const VALID_PASSWORD = 8;
const MAX_CHARACTER_TEXT = 15;

/*  =========== PROPRIEDADE DOS COMPONENTS ==========
 *  Cada componente é generalizado e, portanto, pode receber diversas
 *  propriedades que vão ajudar a customizar seu uso para cada situação.
 *
 *  Nessa tela queremos construir um funcionalidade simples de login
 *  e para tal iremos customizar dois componentes TextInput.
 *  Tanto os campos de input de texto apra senha e nome de usuário
 *  estão com diversas propriedades que vão de acordo com aquilo
 *  que você precisa para construir sua tela/aplicação.
 */

const App = () => {
  const [login, onChangeLogin] = useState('');
  const [password, onChangePassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
      }}>
      <View
        style={[
          {
            width: 250,
            alignItems: 'flex-start',
            borderBottomWidth: 1,
            marginVertical: 10,
          },
          validPassword
            ? { borderColor: '#55AA22' }
            : { borderColor: '#FFFFFF' },
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
          style={{
            fontSize: 22,
            marginTop: 5,
            color: '#FFFFFF',
          }}
        />
      </View>
      <View
        style={[
          {
            width: 250,
            alignItems: 'flex-start',
            borderBottomWidth: 1,
            marginVertical: 10,
          },
          validPassword
            ? { borderColor: '#55AA22' }
            : { borderColor: '#FFFFFF' },
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
          style={{
            fontSize: 22,
            marginTop: 5,
            color: '#FFFFFF',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
