import styled from 'styled-components';

const ExchangesStyles = styled.div`

  background: #efefef;
  padding: 30px;

  /* border-bottom: 2px solid ${({ theme }) => theme.colors.primary}; */
  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
`;
const ExchangeStyles = styled.a`
  display: block;

  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;

  max-width: 100px;
  @media (min-width: 640px) {
    max-width: 140px;
  }

  img {
    max-width: 100%;

    width: auto;
    object-fit: contain;
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
    filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */

    max-height: 70px;
    @media (min-width: 640px) {
      max-height: 100px;
    }

    &:hover {
      -webkit-filter: grayscale(0);
      filter: none;
    }
  }
`;

export { ExchangesStyles, ExchangeStyles };
