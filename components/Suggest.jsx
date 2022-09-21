import {ScrollView, View, Button} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import styles from './css';

const Suggest = (props) => {
  const navigation = useNavigation();

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
    // <ScrollView>
    <PaperProvider>
      <View style={styles.suggestContainer}>
        {suggests.map((item, key) => (
          <Button
            title={item}
            style={styles.suggestText}
            key={key}
            onPress={(event) => {
              console.log(event);
              props.setToku(
                // event
                event.target._internalFiberInstanceHandleDEV.child.memoizedProps
              );
              navigation.navigate('Top');
            }}></Button>
        ))}
      </View>
    </PaperProvider>
    // </ScrollView>
  );
};

export {Suggest};
