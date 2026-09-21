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
        <Text style={estilo_texto.titulo}> Cadastre -se</Text>
        <Text> Coloque seu email abaixo: </Text>
        <TextInput palceholder="seu e-mail" style={estilo_texto.input} />

        <Text> Insira sua senha abaixo: </Text>
        <TextInput
          secureTextEntry={true}
          palceholder="seu e-mail"
          style={estilo_texto.input}
        />

        <Text> Confirme sua senha abaixo: </Text>
        <TextInput
          secureTextEntry={true}
          palceholder="seu e-mail"
          style={estilo_texto.input}
        />

        <Button
          title="Criar conta"
          color="#1B0E2B"
          onPress={() => {
            alert('Conta criada com sucesso!');
          }}
        />
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
  titulo: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#1B0E2B',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderRadius: 3,
    margin: 20,
    padding: 20,
    color: '#ffffff',
    backgroundColor: '#ffff',
  },
});

const estilo_imagem = StyleSheet.create({
  logo: {
    width: 140,
    height: 140,
    margin: 20,
  },
});
