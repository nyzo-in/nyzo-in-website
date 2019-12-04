import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

export { HeaderStyles };
