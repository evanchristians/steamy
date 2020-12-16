import { getPlayerSummaryByVanityUrl } from "../utils/getPlayerSummaryByVanityUrl";
import Image from "next/image";
import { Wrapper } from "../components/Wrapper";
import { Avatar } from "../components/Avatar";
import { Heading } from "../components/Heading";

export default function Home({ data }) {
  console.table(data);
  return (
    <Wrapper>
      <Heading>{data.personaname}</Heading>
      <p>{data.realname}</p>
      <Avatar>
        <Image
          src={data.avatarfull}
          width={256}
          height={256}
          alt="avatar"
        />
      </Avatar>
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
