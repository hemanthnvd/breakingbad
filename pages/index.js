import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Breaking Bad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
    </>
  );
};
export default Home;
