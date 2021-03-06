import Head from "next/head";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
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
      <Category/>
    </>
  );
};
export default Home;
