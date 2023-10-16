import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ statisticsData, statisticsTitle }) => {
  return (
    <section class="statistics">
      {statisticsTitle && <h2 class="title">{statisticsTitle}</h2>}

      <ul class="stat-list">
        {statisticsData.map(statistics => (
          <li key={statistics.id}>
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
