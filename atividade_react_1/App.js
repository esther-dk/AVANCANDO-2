import React, { useState } from 'react';
import { StatusBar, TextInput, View, Text, Pressable, Image, StyleSheet } from 'react-native';


  
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <View>
        <Resultado />
      </View>
    </View>
  );
}

function Resultado() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imagem, setImagem] = useState('');

  let fisico;

  const Imc = () => {
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);
    
    if (!alturaNum || !pesoNum) {
      alert("Por favor, insira valores válidos para altura e peso.");
      return;
    }
  
    const imc = (pesoNum / (alturaNum ** 2)).toFixed(1);
    if (imc < 18.5) {
      fisico = "Abaixo do Peso";
      setImagem('https://i.pinimg.com/736x/fd/27/63/fd2763842d0f082cf30ef4ee2ff0392a.jpg');
    } else if (imc >= 18.5 && imc < 24.9) {
      fisico = "Peso Normal";
      setImagem('https://i.pinimg.com/736x/ed/d1/81/edd181fca27870f0e8f7a6f75df617f6.jpg');
    } else if (imc >= 25 && imc < 30) {
      fisico = "Sobrepeso";
      setImagem('https://i.pinimg.com/736x/25/49/88/25498826776e6c4a896e90717ec55fb4.jpg');
    } else if (imc >= 30 && imc < 35) {
      fisico = "Obesidade Grau I";
      setImagem('https://i.pinimg.com/736x/57/4e/ac/574eacf7fb08979349237cc0dee84870.jpg');
    } else if (imc >= 35 && imc < 40) {
      fisico = "Obesidade Grau II";
      setImagem('https://i.pinimg.com/736x/65/30/73/653073a332d3d9d0b3b12070eccb2d32.jpg');
    } else if (imc >= 40) {
      fisico = "Obesidade Mórbida";
      setImagem('https://i.pinimg.com/736x/ad/b8/68/adb86800f5aa85d635aad26f630fcbf3.jpg');
    }
    alert(`O Resultado é:\nIMC = ${imc}\nEstado físico: ${fisico}`);
  };

  return (

    <View style={styles.resultContainer}>
      <View>
        
        <Text style={{fontSize: 25,  alignSelf: 'center', alignItems: 'center',color:"blue", marginTop: 40, marginBottom: 10}}>
          Calculando e transcrevendo o seu IMC:
        
        </Text>
        <TextInput
          style={styles.input}
          value={altura}
          keyboardType="numeric"
          placeholder="Digite sua altura. Ex.: 1.70"
          onChangeText={(altura) => setAltura(altura)}
        />
        <TextInput
          style={styles.input}
          value={peso}
          keyboardType="numeric"
          placeholder="Digite seu peso. Ex.: 70"
          onChangeText={(peso) => setPeso(peso)}
        />
        <Pressable style={styles.button} onPress={Imc}>
          <Text style={styles.buttonText}>Calcular IMC</Text>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Text style={styles.resultText}>Você se encontra nesse estado:</Text>
        <Image style={styles.image} source={{ uri: imagem }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  resultContainer: {
    marginTop: 20,
  },
  input: {
    marginVertical: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    fontSize: 15,
    width: '50%',
    alignSelf: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10, 
    color: '#333',
  },
  image: {
    height: 250,
    width: 250,
    borderRadius: 125,
    borderWidth: 2,
    borderColor: '#6200ee',
  },

    button: {
      backgroundColor: '#6200ee',
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 8,
      marginTop: 10,
      width: '40%',  
      alignSelf: 'center', 
      alignItems: 'center',
    },
    

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
