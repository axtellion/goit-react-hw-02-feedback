import { List, Btn, Item } from './FeesbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <Item key={option}>
            <Btn onClick={() => onLeaveFeedback(option)}>{option}</Btn>
          </Item>
        );
      })}
    </List>
  );
};
