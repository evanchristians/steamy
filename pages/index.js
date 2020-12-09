import { getPlayerSummaryByVanityUrl } from "../utils/getPlayerSummaryByVanityUrl";
import Image from "next/image"

export default function Home({ data }) {
  return (
    <>
      {Object.keys(data).map((item) =>
        item.includes("avatar") && item !== "avatarhash" ? (
          <Image
            key={item}
            src={data[item]}
            width={256}
            height={256}
            alt="avatar"
          />
        ) : (
          <p key={item}>
            {item} {data[item]}
          </p>
        )
      )}
    </>
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
