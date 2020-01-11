import styled from 'styled-components';

const HeroStyles = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 300px;

  padding: 8px;
  /* border: 2px solid ${({ theme }) => theme.colors.primary}; */
  background: #efefef;

  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export { HeroStyles };
