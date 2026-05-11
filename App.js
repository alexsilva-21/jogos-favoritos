import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🎮 Super Mario Bros. 🎮</Text>
        <Text style={styles.subtitle}>O Clássico Jogo de Plataforma</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📖 Introdução</Text>
        <Text style={styles.text}>
          Super Mario Bros. é um icônico jogo de plataforma desenvolvido pela Nintendo, lançado em 1985 para o NES. O jogador controla Mario, um encanador italiano, em sua missão para resgatar a Princesa Peach do vilão Bowser.
        </Text>
      </View>

      <View style={styles.section}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZThi0flQgWgPhhwxbB75ZY0xtOADWFo7c9Xa1mXaBBoCC29Ks_GdYzYrjttBOM1NzOr20pb3NjZgxe1GuGWl8p8Q0ysdx_And8uerbeY&s=10' }}
          style={styles.image}
        />
        <Text style={styles.sectionTitle}>👥 Personagens Principais</Text>
        <Text style={styles.text}>
          - Mario: O herói principal, conhecido por seu bigode e chapéu vermelho.{'\n'}
          - Luigi: Irmão de Mario, mais alto e às vezes verde.{'\n'}
          - Princesa Peach: A donzela em perigo.{'\n'}
          - Bowser: O rei dos Koopas, o antagonista.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎯 Jogabilidade</Text>
        <Text style={styles.text}>
          O jogo consiste em 8 mundos, cada um com 4 fases. Mario deve pular sobre obstáculos, derrotar inimigos e coletar moedas e power-ups como cogumelos e flores de fogo para progredir.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🏆 Legado</Text>
        <Text style={styles.text}>
          Super Mario Bros. revolucionou os jogos de plataforma e lançou a franquia Mario, que continua popular até hoje com jogos como Super Mario Odyssey e Mario Kart.
        </Text>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e8',
  },
  header: {
    backgroundColor: '#ff4444',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  section: {
    margin: 15,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
});


