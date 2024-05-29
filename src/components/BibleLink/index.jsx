import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import chapterAndVerse from 'chapter-and-verse/js/cv';

import BIBLES from '@/data/state-bibles';
import { YOU_VERSION } from '@/data/constants';
import { Anchor } from '@mantine/core';

// Add links to Bible.com in source strings
const BibleLink = ({ bibleRef = '' }) => {
  const bibles = useRecoilValue(BIBLES);
  const { t } = useTranslation();

  if (!bibleRef) return '';

  return bibleRef.split(' ').map((ref, i) => {
    const prepend = i ? ' ' : '';

    // commas break the lookup! this is to support comma-separated verse references as well as references in a list,
    // EXAMPLES: `Gen5:3,8` `Item 1, Gen5:3, Item 3`
    const commaJunk = ref.split(',');

    // reference specific translation with piped value, e.g., `ESV|Gen5:3`
    const split = commaJunk.shift().trim().split('|');
    const ID = split.length > 1 ? bibles[split.shift().toUpperCase()] ?? bibles.default : bibles.default;

    const parsed = chapterAndVerse(split[0]);
    const BOOK = YOU_VERSION[parsed.book.name] || parsed.book.id;
    const CHAPTER = parsed.chapter;
    let VERSES = `${parsed.from}${parsed.from === parsed.to ? '' : '-' + parsed.to}`;

    // if not a parsable reference, just return the original string
    if (!BOOK || !CHAPTER || !VERSES) {
      return (
        <span key={`text-${i}`}>
          {prepend}
          {ref}
        </span>
      );
    }

    // now do something with the comma junk
    let postpend = '';
    commaJunk.forEach(c => {
      if (+c) VERSES += `,${c}`;
      if (c === '') postpend = ',';
    });

    const href = `https://www.bible.com/${bibles.languageCode}/bible/${ID}/${BOOK}.${CHAPTER}.${VERSES}`;
    const key = `${ID}_${BOOK}_${CHAPTER}_${VERSES}`;

    const link = (
      <Anchor key={key} href={href} target="_blank" rel="noreferrer noopener">
        {t(`bible.${parsed.book.name}`)} {CHAPTER}:{VERSES}
      </Anchor>
    );

    return prepend || postpend ? (
      <span key={`span-${key}`}>
        {prepend}
        {link}
        {postpend}
      </span>
    ) : (
      link
    );
  });
};

BibleLink.propTypes = {
  bibleRef: PropTypes.string,
};

export default BibleLink;
