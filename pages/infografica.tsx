import Infografica from "../components/Infografica/Infografica";
import SectionLabel from "../components/SectionLabel/SectionLabel";
import styles from "./../styles/Home.module.scss";

import { infograficsData } from "../data/fakes/infograficsData";

const InfograficaPage = () => {
  const renderedInfo = infograficsData.map((item) => {
    return (
      <div className={styles.infoWrap} key={item.infographic_id}>
        <h2 className={styles.infoTitle}>{item.infographic_title}</h2>
        <Infografica infographic_id={item.infographic_id} />
      </div>
    );
  });
  return (
    <div className={styles.infoPage}>
      <SectionLabel label="infograf" />
      <br />
      {renderedInfo}
    </div>
  );
};

export default InfograficaPage;
