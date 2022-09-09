
import Image from "next/image";
import SectionLabel from "../components/SectionLabel/SectionLabel";
import styles from "./../styles/Home.module.scss";

import { infograficsData } from "../data/fakes/infograficsData";

const InfograficaPage = () => {
  const renderedInfo = infograficsData.map((item) => {
    return (
      <div className={styles.infoWrap} key={item.infographic_id}>
        
        <Image src={item.infographic_link} height="373" width="660" alt="Section icon" />
        {/* <Infografica infographic_id={item.infographic_id} /> */}
      </div>
    );
  });
  return <div className={styles.infoPage}><SectionLabel label="infograf" /><br/>{renderedInfo}</div>;
};

export default InfograficaPage;
