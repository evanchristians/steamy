import styled from "styled-components";

export const MainCSS = styled.main`
  background: ${(props) => props.theme.colors.black_a};
  color: ${(props) => props.theme.colors.white};
  min-height: 100vh;
`;
