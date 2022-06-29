import { Box } from 'components/Box';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
}) => {
  return (
    <Box>
      <h2>{title}</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </Box>
  );
};
