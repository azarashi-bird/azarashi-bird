import {getAllToku} from '../firebase';

async function getTokusCount() {
  const result = await getAllToku();
  return result;
}

const allTokusData = getTokusCount();

export default allTokusData;
