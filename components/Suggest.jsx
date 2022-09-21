import {View, Button} from 'react-native';
import styles from './css';

const Suggest = (props) => {
  const suggests = [
    '部屋を掃除した',
    '駅前の募金で寄付してみた',
    '歯を磨いた',
    'ゴミを分別した',
    '迷い猫を保護した',
    '赤ちゃんを笑顔にした',
    '世界を救ってみた',
  ];

  return (
    <View style={styles.suggestContainer}>
      {suggests.map((item, key) => (
        <Button
          color="black"
          title={item}
          style={styles.suggestText}
          key={key}
          onPress={(event) => {
            props.setToku(
              event.target._internalFiberInstanceHandleDEV.child.memoizedProps
            );
          }}></Button>
      ))}
    </View>
  );
};

export {Suggest};
