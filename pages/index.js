import { getPlayerSummaryByVanityUrl } from "../utils/getPlayerSummaryByVanityUrl";
import Image from "next/image";
import { Wrapper } from "../components/Wrapper";
import { Avatar } from "../components/Avatar";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { Block } from "../components/Block";

export default function Home({ data }) {
  // console.table(data);
  return (
    <Wrapper>
      <Block>
        <Avatar>
          <Image src={data.avatarfull} width={256} height={256} alt="avatar" />
        </Avatar>
        <div>
          <Heading>{data.personaname}</Heading>
          <Text>{data.realname}</Text>
        </div>
      </Block>
    </Wrapper>
  );
}

export const getStaticProps = async () => {
  const data = await getPlayerSummaryByVanityUrl("nortybone");

  return {
    props: {
      data,
    },
  };
};
