import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import BIBLES from './state-bibles';

// do this here so it doesn't parse out the bible versions every time a link is created
const BibleVersionsProvider = () => {
  const { t } = useTranslation();
  const [_bibles, setBibles] = useRecoilState(BIBLES);

  useEffect(() => {
    // YouVersion translations each have their own YouVersion-specific IDs, we need the id associated with a specific version to build the link
    // For ease and transparency, store the language code and the translation map in the translation file
    // that way, if a translator wants to use a specific version, they only need to update the translation file
    // string should be formed: `{languae} {version}-{id} {version}-{id} ...`
    // the first entry will be the default if no translation is provided in the reference
    // to specify a translation in the reference, use a pipe separator: "NIV|Genesis 3:3-5"
    const versionMap = t('bibleVersions').split(' ');

    const bibles = {
      languageCode: versionMap.shift(),
      default: '1713', // at least have CSB as a fallback
    };

    versionMap.map((v, i) => {
      const values = v.toUpperCase().split('-');
      bibles[values[0]] = values[1];
      // first entry becomes default
      if (i === 0) bibles.default = values[1];
    });

    setBibles(bibles);
  }, [setBibles, t]);

  return <></>;
};

export default BibleVersionsProvider;
