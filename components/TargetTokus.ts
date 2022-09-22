import {getUserToku} from '../firebase';

async function getTargetTokus() {
  const result = await getUserToku();
  return result;
}

const userTokus = getTargetTokus();

export default userTokus;
