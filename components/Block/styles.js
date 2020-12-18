import styled from "styled-components";

export const BlockCSS = styled.div`
  display: flex;
  padding: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  background: ${(props) => props.theme.colors.black_b};
  box-shadow: 0 0 .5rem #00000033;
`;
