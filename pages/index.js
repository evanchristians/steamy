import { getPlayerSummaryByVanityUrl } from "../utils/getPlayerSummaryByVanityUrl";

export default function Home({ data }) {
  return (
    <>
      {Object.keys(data).map((item) => (
        <p key={item}>
          {item} {data[item]}
        </p>
      ))}
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
