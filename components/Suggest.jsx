import {View, Button} from 'react-native';
import {useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import styles from './css';

const Suggest = () => {
  const navigation = useNavigation();
  const [text, setText] = useState();

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
      <View style={styles.suggestContainer}>
        {suggests.map((item, key) => (
          <Button
            title={item}
            style={styles.suggestText}
            key={key}
            // onChangeText={setText}
            onPress={(event) => {
              // console.log(
              //   event.target._internalFiberInstanceHandleDEV.child.memoizedProps
              // );
              setText(
                event.target._internalFiberInstanceHandleDEV.child.memoizedProps
              );
              navigation.navigate('Top', {params: {input: text}});
            }}></Button>
        ))}
      </View>
    </PaperProvider>
  );
};

export {Suggest};
