import React from 'react';
import { ButtonFeedback, ButtonStyled } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ButtonFeedback>
      <ButtonStyled name="good" type="button" onClick={onLeaveFeedback}>
        Good
      </ButtonStyled>
      <ButtonStyled name="neutral" type="button" onClick={onLeaveFeedback}>
        Neutral
      </ButtonStyled>
      <ButtonStyled name="bad" type="button" onClick={onLeaveFeedback}>
        Bad
      </ButtonStyled>
    </ButtonFeedback>
  );
};

export default FeedbackOptions;
