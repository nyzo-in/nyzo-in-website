import styled from 'styled-components';

const WalletsStyles = styled.div`

  padding: 8px;
  /* border-bottom: 2px solid ${({ theme }) => theme.colors.primary}; */
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;
const WalletStyles = styled.div`
  width: 100%;
  @media (min-width: 640px) {
    width: 50%;
  }
  text-align: center;
  img {
    max-width: 100%;
    height: 225px;
    width: auto;
    object-fit: contain;
  }
`;

export { WalletsStyles, WalletStyles };
