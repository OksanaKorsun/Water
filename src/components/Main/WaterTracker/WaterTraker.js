import sprite from '../../../pictures/icons/sprite.svg';
import { Icon } from './WaterTraker.styled';
export const WaterTracker = () => {
  const benefits = [
    {
      text: 'Habit drive',
      id: `${sprite}#icon-calendar-days`,
    },
    {
      text: 'View statistics',
      id: `${sprite}#icon-presentation-chart-bar`,
    },
    {
      text: 'Personal rate setting',
      id: `${sprite}#icon-wrench-screwdriver`,
    },
  ];
  return (
    <div>
      <h1>Water consumption tracker</h1>
      <h2>Record daily water intake and track</h2>
      <h3>Tracker Benefits</h3>
      <ul>
        {benefits.map(({ id, text }, index) => (
          <li key={index}>
            <Icon>
              <use href={id}></use>
            </Icon>
            {text}
          </li>
        ))}
          </ul>
          <button type="button">Try tracker</button>
    </div>
  );
};
