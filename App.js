import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Pressable, TouchableHighlight } from 'react-native';
import Logo from './assets/Logo.png';

export default function App() {

  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [mensagem, setMensagem] = useState('');

  const calcularValor = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (!precoAlcool || !precoGasolina) {
      setMensagem('Por favor, insira os valores de alcool e gasolina');
      return;
    }

    const proporcao = precoAlcool / precoGasolina;
    alert(alcool)
    if (proporcao < 0.7) {
      setMensagem('Melhor alcool');
    } else {
      setMensagem('Melhor gasolina');
    }
  };

  return (

    <View style={styles.container}>

      <Image
        style={{
          width: 250,
          height: 250,

        }}
        source={Logo}

      />
      <Text
        style={{
          paddingTop: 15,
          fontWeight: 500,
          color: '#fff',
          fontSize: 16,
        }}

      > Qual a melhor opção?</Text>

      <View style={{ padding: 20, gap: 20 }}>

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 65,
            borderRadius: 20,
            color: '#fff',
            textAlign: 'center',
          }}

          placeholder="Alcool"
          placeholderTextColor="#888"
          keyboardType='numeric'
          value={alcool}
          onChangeText={(v) => setAlcool(v)}

        />

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 65,
            borderRadius: 20,
            textAlign: 'center',
            color: '#fff',

          }}

          placeholder="Gasolina"
          placeholderTextColor="#888"
          keyboardType='numeric'
          value={gasolina}
          onChangeText={(v) => setGasolina(v)}
        />
      </View>

      <View>

        <TouchableHighlight
          style={{
            backgroundColor: '#88c5cc',
            borderRadius: 15,
            paddingHorizontal: 20,
            width: 100,
            padding: 5,
          }}
          onPress={calcularValor}
        >
          <Text style={{ textAlign: 'center', color: '#000', fontSize: 15,}}>Calcular</Text>

        </TouchableHighlight>

      </View>

      <View>

        {mensagem ? ( /* operador condicional*/
          <Text style={{ paddingTop: 15, color: '#fff', }}>
            {mensagem}

          </Text>
        ) : null}

      </View>

      <StatusBar style="auto" />

    </View>

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
);