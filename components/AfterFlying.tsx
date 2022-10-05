import {SafeAreaView, View, Text, Image, ImageBackground} from 'react-native';
import styles, {customStyles} from './css';
import {Button} from 'react-native-paper';
import afterViews from './afterLifes';
// 3プラスで変化
// n*3=徳でn番目のindex

export default function AfterFlying({navigation, allTokus, tokuCount}) {
  function setMessage() {
    if (tokuCount % 3 === 2) {
      return (
        <>
          <Text style={styles.FBMessageSP}>
            <Text style={{textAlign: 'left'}}> おや、</Text>
            {'\n'}
            <Text style={{textAlign: 'center'}}>
              {afterViews[Math.floor((tokuCount % 54) / 3)][1]}
            </Text>
            {'\n'}

            <Text style={{textAlign: 'right'}}>の様子が...?</Text>
          </Text>
          <View style={styles.avatarContainer}>
            <ImageBackground
              source={require('../assets/icon-bg.jpeg')}
              style={styles.afterPostBg}
              imageStyle={{borderRadius: 150, opacity: 0.3}}>
              <Image
                source={afterViews[Math.floor((tokuCount % 54) / 3)][0]}
                style={styles.afterPostIcon}
              />
            </ImageBackground>
          </View>
        </>
      );
    } else if (tokuCount % 3 === 0 && tokuCount !== 0) {
      return (
        <>
          <Text style={styles.FBMessageSP}>
            {afterViews[Math.floor((tokuCount % 54) / 3)][1]}
            {'\n'}
            に進化しました！
          </Text>
          <View style={styles.avatarContainer}>
            <ImageBackground
              // source={require('../assets/icon-bg2.png')}
              source={require('../assets/icon-bg.jpeg')}
              style={styles.afterPostBg}
              imageStyle={{borderRadius: 150, opacity: 1}}>
              {/* imageStyle={{opacity: 1}}> */}
              <Image
                source={afterViews[Math.floor((tokuCount % 54) / 3)][0]}
                style={styles.afterPostIcon}
              />
            </ImageBackground>
          </View>
        </>
      );
    }
    return (
      <>
        <Text style={styles.FBMessageSP}>
          あなたの来世は{'\n'}
          {afterViews[Math.floor((tokuCount % 54) / 3)][1]}
        </Text>
        <View style={styles.avatarContainer}>
          <ImageBackground
            source={require('../assets/icon-bg2.png')}
            style={styles.afterPostBg}
            imageStyle={{opacity: 1}}>
            <Image
              source={afterViews[Math.floor((tokuCount % 54) / 3)][0]}
              style={styles.afterPostIcon}
            />
          </ImageBackground>
        </View>
      </>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.inner, customStyles.inner, styles.FBMessageInner]}>
        <Text style={[styles.p, customStyles.p]}>🎉🎉おめでとう🎉🎉</Text>
        <Text style={[styles.p, customStyles.p]}>
          今日世界で<Text style={styles.afterPostCount}>{allTokus}羽</Text>
          の鳥が放たれました。
        </Text>
        {setMessage()}
        <View style={styles.FBAfterButtonWrapper}>
          <Button
            mode="contained"
            onPress={() => navigation.goBack()}
            contentStyle={{backgroundColor: 'orange'}}>
            やったね❤️
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
