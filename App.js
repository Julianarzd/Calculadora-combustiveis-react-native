import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Pressable } from 'react-native';
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
          width: 200,
          height: 200,

        }}
        source={Logo}

      />
      <Text
        style={{
          paddingTop: 10,
          fontWeight: 800,
          color: '#fff',

        }}

      > Qual a melhor opção?</Text>

      <View style={{ padding: 15, gap: 20 }}>

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 60,
            borderRadius: 15,
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
            paddingHorizontal: 20,
            borderRadius: 15,
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

        <Button 
          
          title='Calcular'
          onPress={calcularValor}
          color='#2d8686'

        />
      </View>

      <View>

        {mensagem ? ( /* operador condicional*/
          <Text style={{ paddingTop: 10, color: '#fff',}}>
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