import styled from 'styled-components';

export const ButtonFeedback = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #8e8e8e;

  &:hover {
    background-color: ${props =>
      props.name === 'good'
        ? '#21C500'
        : props.name === 'neutral'
        ? '#F3FF00'
        : props.name === 'bad'
        ? '#FF0C0C'
        : '#8E8E8E'};
    color: ${props => (props.name === 'neutral' ? 'black' : 'white')};
  }
`;
