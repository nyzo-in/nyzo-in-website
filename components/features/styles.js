import styled from 'styled-components';

const FeaturesStyles = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 300px;

  padding: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

export { FeaturesStyles };
