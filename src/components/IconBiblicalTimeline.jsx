import React from 'react';
import PropTypes from 'prop-types';

/**
 * This was cobbled together from the "Bible" and "CalendarMonth" Tabler icons
 * Yes. ... This IS a total hack job.
 */
const IconBiblicalTimeline = ({ className = '', size = 14, stroke = 1 }) => {
  const calPlacement = { x: 12, y: 9, width: 15, height: 15 };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 25 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`tabler-icon tabler-icon-biblical-timeline biblicalTimeline ${className}`}
      >
        <defs>
          <pattern id="calendar" viewBox="0 0 24 24" {...calPlacement} patternUnits="userSpaceOnUse">
            <rect className="calendarTitle" x="4" y="5.5" width="16" height="5" fill="red" strokeWidth="0" />
            <rect className="calendarBody" x="4" y="10.75" width="16" height="10" fill="currentColor" strokeWidth="0" />

            <path
              strokeWidth="1.5"
              d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"
            />

            <path className="calendarRings" strokeWidth="1.5" d="M16 3v4" />
            <path className="calendarRings" strokeWidth="1.5" d="M8 3v4" />

            <path d="M4 11h16" />

            <rect className="calendarTitle" x="4" y="5.5" width="16" height="5" fill="#4dabf7" strokeWidth="0" />
            <rect className="calendarBody" x="4" y="10.75" width="16" height="10" fill="white" strokeWidth="0" />
            <path
              strokeWidth="1.5"
              d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"
            />
            <path className="calendarRings" strokeWidth="1.5" d="M16 3v4" stroke="#adb5bd" />
            <path className="calendarRings" strokeWidth="1.5" d="M8 3v4" stroke="#adb5bd" />
            <path d="M4 11h16" />
            <path
              className="calendarDate date1"
              strokeWidth="2"
              strokeLinecap="square"
              stroke="#1971c2"
              d="M7 14h.013"
            />
            <path
              className="calendarDate date2"
              strokeWidth="2"
              strokeLinecap="square"
              stroke="#f08c00"
              d="M10.01 14h.005"
            />
            <path
              className="calendarDate date3"
              strokeWidth="2"
              strokeLinecap="square"
              stroke="#e03131"
              d="M13.01 14h.005"
            />
            <path
              className="calendarDate date5"
              strokeWidth="2"
              strokeLinecap="square"
              stroke="#22b8cf"
              d="M13.015 17h.005"
            />
            <path
              className="calendarDate date6"
              strokeWidth="2"
              strokeLinecap="square"
              stroke="#adb5bd"
              d="M7.01 17h.005"
            />
            <path
              className="calendarDate date7"
              strokeWidth="2"
              strokeLinecap="square"
              stroke="#ae3ec9"
              d="M10.01 17h.005"
            />
            <path
              className="calendarDate date4"
              strokeWidth="2"
              strokeLinecap="square"
              stroke="#66a80f"
              d="M16.015 14h.005"
            />
          </pattern>
        </defs>

        {/* BIBLE */}
        <rect className="bibleCover" fill="brown" x="5.4" y="4" width="14" height="16" strokeWidth="0" />
        <rect className="biblePages" fill="gray" x="7" y="16" width="12" height="4" strokeWidth="0" />
        <circle className="biblePages" fill="gray" cx="7" cy="18" r="2" strokeWidth="0" />

        <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
        <path d="M19 16h-12a2 2 0 0 0 -2 2" />

        <path className="bibleCross" stroke="yellow" d="M12 7v6" />
        <path className="bibleCross" stroke="yellow" d="M10 9h4" />

        {/* CALENDAR */}
        <rect {...calPlacement} fill="url(#calendar)" strokeWidth="0" />
      </svg>
    </>
  );
};

IconBiblicalTimeline.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  stroke: PropTypes.number,
};

export default IconBiblicalTimeline;
