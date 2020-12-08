import Axios from "axios";
import styled from "styled-components";
import { endpoint } from "../constants";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  Axios.get(`${endpoint}&vanityurl=nortybone`).then(
    (res) => res.data.response.steamid
  );

  return <Title>My page</Title>;
}
