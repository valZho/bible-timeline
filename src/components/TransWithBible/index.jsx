import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation, Trans } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import { Anchor } from '@mantine/core';
import chapterAndVerse from 'chapter-and-verse/js/cv';

import BIBLES from '@/data/state-bibles';
import { YOU_VERSION } from '@/data/constants';

// This is a replacement for the <Trans/> component
// it takes all the same values, translates the text, but has the
// added benefit of detecting bible references and making them links
const TransWithBible = ({ i18nKey = '', values = {}, components = [] }) => {
  const { t } = useTranslation();
  const bibles = useRecoilValue(BIBLES);

  // first pull the source string out of translation
  // this will still have tags in it if present, that's ok
  let output = t(i18nKey, values);

  // extract any text with a verse-like structure, e.g., version|Xxxxx #:#-#,#
  const potentialRefs = output.match(/([A-Za-z]+\|){0,1}[A-Za-z]+\W{0,1}\d+(:\d+(-\d+|,\d+)*){0,1}/gi);

  // loop through potential reference matches
  if (potentialRefs) {
    let id = components.length;
    potentialRefs.map((source, i) => {
      let REF = source;
      let VERSION = bibles.default;

      // first, see if there is a specific bible translation referenced
      let v = source.split('|');
      if (v.length > 1) {
        VERSION = bibles[v[0].toUpperCase()] ?? bibles.default;
        REF = v[1];
      }

      // use chapter-and-verse to test for legitimate references (it doesn't like commas, though)
      const splitRef = REF.split(',');
      const parsed = chapterAndVerse(splitRef[0]);
      if (!parsed.success) return;

      // translate the book name for the reference and add tags for the link component
      const bookName = t(`bible.${parsed.book.name}`);
      const replacement = REF.replace(/^[A-Za-z]+\W*(.*)/, `<${id}>${bookName} $1</${id}>`);

      // inject the reference string
      id++;
      output = output.replace(source, replacement);

      // add the link to the components array
      const BOOK = YOU_VERSION[parsed.book.name] || parsed.book.id;
      const CHAPTER = parsed.chapter || '1';
      // if there's any verse reference, just use the original (which may have commas)
      let VERSES = parsed.from ? `.${REF.split(':')[1]}` : '';
      const href = `https://www.bible.com/${bibles.languageCode}/bible/${VERSION}/${BOOK}.${CHAPTER}${VERSES}`;

      // add the link to the components
      components.push(<Anchor href={href} target="_blank" rel="noopener noreferrer" />);
    });
  }

  // now use the Trans component to parse the tags and inject components
  return <Trans i18nKey={output} components={components} />;
};

TransWithBible.propTypes = {
  i18nKey: PropTypes.string,
  values: PropTypes.object,
  components: PropTypes.array,
};

export default TransWithBible;
