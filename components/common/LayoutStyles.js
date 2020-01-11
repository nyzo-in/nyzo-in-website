import styled from 'styled-components';

const Outer = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  /* padding: 2rem; */
`;

const Inner = styled.div`
  /* ${props => (props.relative ? 'position: relative;' : null)};
  ${props => (props.z ? `z-index: ${props.z};` : null)}; */
  max-width: ${props => props.theme.innerMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export { Outer, Inner };
