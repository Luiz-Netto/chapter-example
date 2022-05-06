/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { SafeAreaView, Text } from "react-native";

/*  =========== ESTILIZAÇÃO ==========
 *   Cada componente pode ter seu estilo customizado
 *   ao se passar uma proprieda para tal componente.
 *   A estilização mais simples é a estilizaçnao Inline,
 *   aonde o componente recebe, na mesma linha da declaração
 *   da propriedade "style", um objeto contendo todas as
 *   opções de estilo para o componente.
 */

const App = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HOME</Text>
    </SafeAreaView>
  );
};

export default App;
