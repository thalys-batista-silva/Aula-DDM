import {
  Pressable,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

export default function App() {
  return (
    <View style={estilo_tela.tela_pricipal}>
      <View>
        <Image
          source={require('./assets/photo-1551947391-249dcb8ed976.jpg')}
          style={estilo_imagem.logo}
        />
      </View>
      <View>
        <Text> Insira seu email abaixo: </Text>
        <TextInput palceholder="seu e-mail" style={estilo_texto.input} />

        <Text> Insira sua senha abaixo: </Text>
        <TextInput
          secureTextEntry={true}
          palceholder="seu e-mail"
          style={estilo_texto.input}
        />

        <Button
          title="Login"
          color="#1B0E2B"
          onPress={() => {
            alert('Logado com sucesso!');
          }}
        />

        <Pressable
          onPress={() => {
            alert('Tela de cadastro!');
          }}
          style={{ margin: 4 }}>
          <Text> Não tem conta?Cadastre-se</Text>
        </Pressable>
      </View>
    </View>
  );
}

const estilo_tela = StyleSheet.create({
  tela_pricipal: {
    flex: 1,
    backgroundColor: '#C9A9E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const estilo_texto = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 3,
    margin: 20,
    padding: 20,
    color: '#C9A9E9',
    backgroundColor: '#C9A9E9',
  },
});

const estilo_imagem = StyleSheet.create({
  logo: {
    width: 160,
    height: 170,
    margin: 20,
  },
});
