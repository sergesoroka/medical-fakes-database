import styles from "./../styles/Home.module.scss";
import CardsLayout from "../components/Card/CardsLayout";
import Head from "next/head";

const Fakes = () => {
  return (
    <>
    <Head>
        <title>Детокс від пропаганди | Усі фейки</title>
      </Head>
    <div className={styles.singlePageMainContent}>
      <CardsLayout />
    </div></>
  );
};

export default Fakes;
