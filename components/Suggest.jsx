import {View, Text} from 'react-native';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const Suggest = () => {
  const suggests = [
    '部屋を掃除した',
    '駅前の募金で寄付してみた',
    '歯を磨いた',
    'ゴミを分別した',
    '迷子を保護した',
    '赤ちゃんを笑顔にした',
    '道案内をした',
    'ガスの元栓を閉めた',
    'お皿を洗った',
    '世界を救ってみた',
  ];

  return (
    <PaperProvider>
      <View>
        {suggests.map((item) => (
          <Text>item</Text>
        ))}
      </View>
    </PaperProvider>
  );
};

export {Suggest};
