import styled from "styled-components";

export const AvatarCSS = styled.div`
  display: inline-flex;
  border-radius: 50%;
  overflow: hidden;
  align-self: flex-start;
  justify-self: center;
  max-width: 6rem;
  margin-right: 2rem;
  border: 6px solid ${(props) => props.theme.colors.pink};

  img {
    margin: 0;
    padding: 0;
    object-fit: cover;
  }
`;
