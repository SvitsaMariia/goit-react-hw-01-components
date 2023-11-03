import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
 const getRandomColor = () => {
  const colors = ['#bdb76b', '#bd6ba6', '#6bbdba', '#6bbd6c','#ff0000'];
  const randomColor = colors[Math.floor(Math.random()* colors.length)];
  return randomColor;
};
const  getStatItemStyles = () => {
  const randomColor = getRandomColor();
  return {
    backgroundColor: randomColor,
  };
};

return (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statList}>
      {stats.map((stat) => (
        <li key={stat.id} className={css.item} style={getStatItemStyles()}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li> ))}
    </ul>
  </section>
);
      };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};