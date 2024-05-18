import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import { EVENTS } from '../../data/EventsProvider';
import './style.scss';

const Timeline = () => {
  const { t } = useTranslation();
  const { biblical: events } = useRecoilValue(EVENTS);

  const eventParser = useCallback(() => {
    return Object.keys(events).map(key => {
      const e = events[key];
      return (
        <div key={key}>
          <b>{t(e.title)} — </b>
          {/* {e.start ? `Start: ${e.start} — ` : ''} */}
          {/* {e.relative?.start ? `${e.relative?.start} from start of "${e.relative.id}" — ` : ''}
          {e.relative?.end ? `${e.relative?.end} from end of "${e.relative.id}" — ` : ''}
          {e.length ? `Length: ${e.length}` : ''} */}
          {JSON.stringify(e)}
        </div>
      );
    });
  }, [events, t]);

  const yearsOutput = useCallback(() => {
    let years = 0;
    Object.keys(events).forEach(key => {
      const e = events[key];
      if (key === 'adam') return;
      return (years += e.relative.start || e.relative.end + e.years);
    });
    return <h1>Years: {years}</h1>;
  }, [events]);

  return (
    <div className="timeline-main">
      {eventParser()}
      {yearsOutput()}
    </div>
  );
};

export default Timeline;
