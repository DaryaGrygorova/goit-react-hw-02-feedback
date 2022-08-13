import styled from 'styled-components';

export const Title = styled.span`
display: inline-block;
  margin-bottom: ${p => p.theme.space[4]}px;
  min-width: 90px;
`;
export const Item = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`; 
export const Value= styled.span` 
    display: inline-block;
    position: relative;
    z-index: 1;
    margin-left:  ${p => p.theme.space[3]}px;
  

  ::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: ${p => p.value * 2}px;
    max-width: 85vw;
    height: 25px;
    background-color: ${p =>
      p.name === 'good'
        ? p.theme.colors.green
        : p.name === 'neutral'
        ? p.theme.colors.lightGreen
        : p.name === 'bad'
        ? p.theme.colors.red
        : 'none'};
  }
`;
