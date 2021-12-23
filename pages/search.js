import React from "react";
import Head from "next/head";
import Header from "../components/Search/Header";
//import { API_KEY, CONTEXT_kEY } from "../keys";
import Response from "../response";
import { useRouter } from "next/router";
import SearchResults from "../components/Search/SearchResults";

const Search = ({ results }) => {
  const router = useRouter();
  //console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="https://blog.hubspot.com/hubfs/image8-2.jpg" />
      </Head>
      {/* Header */}
      <Header />
      {/* Search results */}
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  // After the Server has rendered... Pass the results to the client..
  return {
    props: {
      results: data,
    },
  };
}
