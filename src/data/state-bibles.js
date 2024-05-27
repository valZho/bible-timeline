import { atom } from 'recoil';

const biblesState = atom({
  key: 'bibleVersions',
  default: { languageCode: 'en', default: '1713' },
});

export default biblesState;
