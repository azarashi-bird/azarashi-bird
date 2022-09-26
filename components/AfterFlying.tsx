import {useEffect, useState, useLayoutEffect} from 'react';
import {getAllToku} from '../firebase';
import {View, Text, Image, ImageBackground} from 'react-native';
import styles from './css';
import {Button} from 'react-native-paper';
import afterViews from './afterLifes';
// 3プラスで変化
// n*3=徳でn番目のindex

export default function AfterFlying({navigation, allTokus, tokuCount}) {
  function setMessage() {
    if (tokuCount % 3 === 2) {
      return (
        <>
          <Text style={styles.FBMessage}>
            おや、{afterViews[Math.floor((tokuCount % 45) / 3)][1]}の様子が...?
          </Text>
          <View style={styles.afterInnerContainer}>
            <ImageBackground
              source={require('../assets/icon-bg.jpeg')}
              style={styles.afterPostBg}>
              <View style={styles.afterPostOpacity}>
                <Image
                  source={afterViews[Math.floor((tokuCount % 45) / 3)][0]}
                  style={styles.afterPostIcon}
                />
              </View>
            </ImageBackground>
          </View>
        </>
      );
    } else if (tokuCount % 3 === 0 && tokuCount !== 0) {
      return (
        <>
          <Text style={styles.FBMessage}>
            {afterViews[Math.floor((tokuCount % 45) / 3)][1]}に進化しました！
          </Text>
          <View style={styles.afterInnerContainer}>
            <ImageBackground
              source={require('../assets/icon-bg.jpeg')}
              style={styles.afterPostBg}>
              <View>
                <Image
                  source={afterViews[Math.floor((tokuCount % 45) / 3)][0]}
                  style={styles.afterPostIcon}
                />
              </View>
            </ImageBackground>
          </View>
        </>
      );
    }
    return (
      <>
        <View style={styles.afterInnerContainer}>
          <ImageBackground
            source={require('../assets/icon-bg.jpeg')}
            style={styles.afterPostBg}>
            <View style={styles.afterPostOpacity2}>
              <Image
                source={afterViews[Math.floor((tokuCount % 45) / 3)][0]}
                style={styles.afterPostIcon}
              />
            </View>
          </ImageBackground>
        </View>
      </>
    );
  }
  return (
    <View style={styles.FBMessageContainer}>
      <Text style={styles.FBMessage}>おめでとう！🎉</Text>
      <Text style={styles.FBMessage}>
        今日世界で{allTokus}羽の鳥が放たれました。
      </Text>
      {setMessage()}
      {/* <View style={styles.afterInnerContainer}>
      <ImageBackground source={require('../assets/icon-bg.jpeg')}
        style={styles.afterPostBg} >
        <Image
        source={afterViews[Math.floor(tokuCount % 45 / 3)][0]}
        style={styles.afterPostIcon} /> 
        </ImageBackground>
      
      </View> */}
      <View style={styles.afterButtonWrapper}>
        <Button
          mode="contained"
          // style={styles.button2}
          onPress={() => navigation.goBack()}>
          やったね🙌
        </Button>
      </View>
    </View>
  );
}
