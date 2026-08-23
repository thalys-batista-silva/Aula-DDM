import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.caixa}>
      <View style={{ flex: 1 }} />

      <View style={styles.logoM}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://images.unsplash.com/photo-1551947391-249dcb8ed976?w=400&q=80',
          }}
        />
      </View>
      <Text style={styles.titulo}>Catálogo de Minerais</Text>
      <Text style={styles.subtitulo}>
        Descubra, colecione e procure todos os minerais
      </Text>
      <View style={{ flex: 1 }} />
      <View style={styles.rodapé}>
        <Text style={{ fontSize: 15, color: '#8A6FA8' }}>
          v1.0 - Thalys Batista Silva
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  caixa: {
    flex: 1,
    backgroundColor: '#1B0E2B',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logoM: {
    width: 160,
    height: 160,
    borderRadius: 80,
    overflow: 'hidden',
    borderWidth: 3,
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  titulo: {
    fontSize: 32,
    fontWeight: '700',
    color: '#F3E8FF',
    letterSpacing: 1,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 15,
    color: '#C9A9E9',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  rodapé: {
    margin: 30,
    alignItems: 'center',
  },
});
