import styled from "styled-components";

export const MainCSS = styled.main`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.black_a};
  color: ${(props) => props.theme.colors.white};
`;
