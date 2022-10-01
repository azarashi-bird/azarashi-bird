// https://reactnative-st.com/2020/07/07/%E3%80%90react-native%E3%80%91dimensions%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E7%94%A8%E3%81%84%E3%81%A6%E3%80%81%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E7%94%BB/

import {Dimensions} from 'react-native';

const Inch47_WIDTH = 375; // iPhone 6, 7, 8, SE(第2世代)
const Inch47_HEIGHT = 667; // iPhone 6, 7, 8, SE(第2世代)
const Inch55_WIDTH = 414; // iPhone 6s, 7Plus, 8Plus
const Inch55_HEIGHT = 736; // iPhone 6s, 7Plus, 8Plus
const Inch58_WIDTH = 375; // iPhone x, xs, 11Prp
const Inch58_HEIGHT = 812; // iPhone x, xs, 11Pro
const Inch61_WIDTH = 390; // iPhone12, 12Pro, 13, 13Pro
const Inch61_HEIGHT = 844; // iPhone12, 12Pro, 13, 13Pro
const Inch65_WIDTH = 414; // iPhone xr, xsMax, 11, 11proMax
const Inch65_HEIGHT = 896; // iPhone xr, xsMax, 11, 11proMax
const Inch67_WIDTH = 428; // iPhone 12ProMax, 14Plus
const Inch67_HEIGHT = 926; // iPhone 12ProMax, 14Plus

const IPAD_PRO_129_WIDTH = 1024; // iPad 12.9
const IPAD_PRO_129_HEIGHT = 1366; // iPad 12.9
const IPAD_PRO_11_WIDTH = 1112; // iPad 11
const IPAD_PRO_11_HEIGHT = 834; // iPad 11
const IPAD_PRO_97_WIDTH = 768; // iPad 9.7
const IPAD_PRO_97_HEIGHT = 1024; // iPad 9.7

const {width, height} = Dimensions.get('window');

// iPhone 6, 7, 8, SE(第2世代)対応
export const iPhoneInch47 = () => {
  return width === Inch47_WIDTH && height === Inch47_HEIGHT;
};

// iPhone 6s, 7Plus, 8Plus対応
export const iPhoneInch55 = () => {
  return width === Inch55_WIDTH && height === Inch55_HEIGHT;
};
// iPhone x, xs, 11Pro対応
export const iPhoneInch58 = () => {
  return width === Inch58_WIDTH && height === Inch58_HEIGHT;
};

// iPhone12, 12Pro, 13, 13Pro対応
export const iPhoneInch61 = () => {
  return width === Inch61_WIDTH && height === Inch61_HEIGHT;
};

// iPhone xr, xsMax, 11, 11proMax対応
export const iPhoneInch65 = () => {
  return width === Inch65_WIDTH && height === Inch65_HEIGHT;
};

// iPhone 12ProMax, 14Plus対応
export const iPhoneInch67 = () => {
  return width === Inch67_WIDTH && height === Inch67_HEIGHT;
};

// iPad 12.9対応
export const iPad129 = () => {
  return width === IPAD_PRO_129_WIDTH && height === IPAD_PRO_129_HEIGHT;
};

// iPad 11対応
export const iPad11 = () => {
  return width === IPAD_PRO_11_WIDTH && height === IPAD_PRO_11_HEIGHT;
};

// iPad 9.7対応
export const iPad97 = () => {
  return width === IPAD_PRO_97_WIDTH && height === IPAD_PRO_97_HEIGHT;
};
