import {
  Pressable,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style={estilo_tela.safearea1}>
      <StatusBar style="light" />
      <SafeAreaView style={estilo_tela.safearea2}>
        <View style={estilo_tela.tela_pricipal}>
          <Pressable
            onPress={() => {
              alert('Tela de Login!');
            }}>
            <Image
              source={require('./assets/photo-1551947391-249dcb8ed976.jpg')}
              style={estilo_imagem.imagem_acesa}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              alert('Você já está na Tela inicial!');
            }}>
            <Image
              source={require('./assets/photo-1551947391-249dcb8ed976.jpg')}
              style={estilo_imagem.imagem_apagada}
            />
          </Pressable>

          <Pressable
            onPress={() => {
              alert('Menu aberto com sucesso!');
            }}>
            <Image
              source={require('./assets/photo-1551947391-249dcb8ed976.jpg')}
              style={estilo_imagem.imagem_acesa}
            />
          </Pressable>
        </View>

        <ScrollView style={estilo_tela.scroll}>
          <Text style={estilo_texto.titulo}>Dados do minerio</Text>

          <View style={{ width: '100%' }}>
            <Text style={estilo_texto.texto_questionario}>
              Insira o nome do seu minerio:
            </Text>
            <TextInput
              placeholder=" Diamante*"
              style={estilo_texto.input}
            />

            <Text style={estilo_texto.texto_questionario}>
              Digite o código do minerio:
            </Text>
            <TextInput placeholder=" código*" style={estilo_texto.input} />
            <Text style={estilo_texto.texto_questionario}>
              Insira o tipo de minerio:
            </Text>
            <TextInput
              placeholder=" tipo*"
              style={estilo_texto.input}
            />

            <Text style={estilo_texto.texto_questionario}>
              Descrição do minerio:
            </Text>
            <TextInput placeholder=" descrição*" style={estilo_texto.input} />
            <Text style={estilo_texto.texto_questionario}>
              Data e Hora da coleta do minerio:
            </Text>
            <TextInput placeholder=" data e hora*" style={estilo_texto.input} />
            <Text style={estilo_texto.texto_questionario}>
              Insira o arquivo ou foto do minerio:
            </Text>
            <Button
              title="Arquivo"
              color="#C9A9E9"
              onPress={() => {
                alert('Download do arquivo completo!');
              }}
            />

            <Text style={estilo_texto.texto_questionario2}>
              {' '}
              Registre o Vestígio no Inventário:{' '}
            </Text>
            <Button
              title="Registrar"
              color="#C9A9E9"
              onPress={() => {
                alert('Registrado com com sucesso!');
              }}
            />

            <Pressable
              onPress={() => {
                alert('Inventário!');
              }}
              style={{ marginTop: 20, alignItems: 'center' }}>
              <Text style={{ color: '#C9A9E9', fontWeight: 'bold' }}>
                {' '}
                Ver Mineiros
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const estilo_tela = StyleSheet.create({
  safearea1: {
    flex: 1,
    backgroundColor: '#423338',
  },

  safearea2: {
    flex: 1,
  },

  tela_pricipal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1B0E2B',
    position: 'relative',
  },

  scroll: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const estilo_texto = StyleSheet.create({
  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#C9A9E9',
    margin: 20,
    textAlign: 'center',
  },

  texto_questionario: {
    color: '#C9A9E9',
    marginBottom: 5,
  },

  texto_questionario2: {
    color: '#C9A9E9',
    marginBottom: 5,
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 20,
    padding: 15,
    color: '#000000',
    backgroundColor: '#ffffff',
  },
});

const estilo_imagem = StyleSheet.create({
  imagem_acesa: {
    width: 60,
    height: 60,
    tintColor: '#1B0E2B',
  },
  imagem_apagada: {
    width: 60,
    height: 60,
  },
});
