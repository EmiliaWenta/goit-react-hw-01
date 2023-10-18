import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.css';

function getRandomBgColor() {
  let letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Statistics = ({ statisticsData, statisticsTitle }) => {
  return (
    <section className={css.statistics}>
      {statisticsTitle && <h2>{statisticsTitle}</h2>}

      <ul className={css.statList}>
        {statisticsData.map(statistics => (
          <li
            className={css.statListItem}
            key={statistics.id}
            style={{ backgroundColor: getRandomBgColor() }}
          >
            <span>{statistics.label}</span>
            <span>{statistics.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  statisticsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  statisticsTitle: PropTypes.string.isRequired,
};

export default Statistics;
