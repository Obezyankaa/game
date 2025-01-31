import React, {useMemo, useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useThemeStore} from '../store/themeStore';
import {themes} from '../constants/themeConfig';
import { hexagramData } from '../constants/hexagramData';


// Генерация одной линии
const throwCoins = () => {
  const sum = [Math.random(), Math.random(), Math.random()]
    .map(coin => (coin < 0.5 ? 2 : 3))
    .reduce((a, b) => a + b, 0);

  return sum === 6
    ? {line: '— —', changing: true}
    : sum === 7
    ? {line: '———', changing: false}
    : sum === 8
    ? {line: '— —', changing: false}
    : {line: '———', changing: true};
};

// Функция преобразования в бинарный код
const convertToBinary = (hexagram: {line: string}[]) => {
  return hexagram
    .map(h => (h.line === '———' ? '1' : '0'))
    .reverse()
    .join('');
};

// Функция для генерации второй гексаграммы
const getSecondHexagram = (hexagram: {line: string; changing: boolean}[]) => {
  return hexagram.map(h => ({
    line: h.changing ? (h.line === '———' ? '— —' : '———') : h.line,
    changing: false, // Во второй гексаграмме линии уже не изменяются
  }));
};

const Home = () => {
  const theme = useThemeStore(state => state.theme);
  const colors = useMemo(() => themes[theme], [theme]);
  const [hexagram, setHexagram] = useState<{line: string; changing: boolean}[]>(
    [],
  );
  const [hexagramMeaning, setHexagramMeaning] = useState<{
    name: string;
    meaning: string;
  } | null>(null);
  const [secondHexagram, setSecondHexagram] = useState<{line: string}[] | null>(
    null,
  );
  const [secondHexagramMeaning, setSecondHexagramMeaning] = useState<{
    name: string;
    meaning: string;
  } | null>(null);
  const [showSecondHexagram, setShowSecondHexagram] = useState(false); // ✅ Состояние для отображения

  const generateHexagram = () => {
    const newHexagram = Array.from({length: 6}, throwCoins);
    setHexagram(newHexagram);

    const binaryCode = convertToBinary(newHexagram);
    setHexagramMeaning(hexagramData[binaryCode] || null);

    // Проверяем, есть ли изменяющиеся линии
    if (newHexagram.some(line => line.changing)) {
      const newSecondHexagram = getSecondHexagram(newHexagram);
      setSecondHexagram(newSecondHexagram);

      const secondBinaryCode = convertToBinary(newSecondHexagram);
      setSecondHexagramMeaning(hexagramData[secondBinaryCode] || null);
    } else {
      setSecondHexagram(null);
      setSecondHexagramMeaning(null);
    }

    setShowSecondHexagram(false); // Скрываем вторую гексаграмму при новом гадании
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.dark}]}>
      {/* Основная гексаграмма */}
      <View style={styles.hexagram}>
        {hexagram
          .slice(0)
          .reverse()
          .map((line, index) => (
            <Text
              key={index}
              style={[styles.line, line.changing && styles.changing]}>
              {line.line}
            </Text>
          ))}
      </View>

      {/* Кнопка для гадания */}
      <TouchableOpacity style={styles.button} onPress={generateHexagram}>
        <Text style={styles.buttonText}>Гадать</Text>
      </TouchableOpacity>

      {/* Толкование основной гексаграммы */}
      {hexagramMeaning && (
        <View style={styles.meaningBox}>
          <Text style={styles.meaningTitle}>{hexagramMeaning.name}</Text>
          <Text style={styles.meaningText}>{hexagramMeaning.meaning}</Text>
        </View>
      )}

      {/* Кнопка "Показать вторую гексаграмму", если есть изменяющиеся линии */}
      {secondHexagram && (
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => setShowSecondHexagram(prev => !prev)}>
          <Text style={styles.buttonText}>
            {showSecondHexagram
              ? 'Скрыть вторую гексаграмму'
              : 'Показать вторую гексаграмму'}
          </Text>
        </TouchableOpacity>
      )}

      {/* Вторая гексаграмма (показывается только если нажали кнопку) */}
      {showSecondHexagram && secondHexagram && (
        <View style={styles.hexagram}>
          {secondHexagram
            .slice(0)
            .reverse()
            .map((line, index) => (
              <Text key={index} style={styles.line}>
                {line.line}
              </Text>
            ))}
        </View>
      )}

      {/* Толкование второй гексаграммы */}
      {showSecondHexagram && secondHexagramMeaning && (
        <View style={styles.meaningBox}>
          <Text style={styles.meaningTitle}>{secondHexagramMeaning.name}</Text>
          <Text style={styles.meaningText}>
            {secondHexagramMeaning.meaning}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

// Стили
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  hexagram: {marginTop: 20, alignItems: 'center'},
  line: {fontSize: 24, fontWeight: 'bold', marginVertical: 2},
  changing: {color: 'red'}, // Подсветка изменяющихся линий
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  secondaryButton: {
    backgroundColor: '#FF9500',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {color: '#fff', fontSize: 18},
  meaningBox: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  meaningTitle: {fontSize: 18, fontWeight: 'bold'},
  meaningText: {fontSize: 16, color: '#333', textAlign: 'center', marginTop: 5},
});

export default Home;
