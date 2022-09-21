import Image from "next/image";
import styles from "./Infografica.module.css";

import { infograficsData } from "./../../data/fakes/infograficsData";

const Infografica = ({ infographic_id }: { infographic_id: string }) => {
  const infoRender = infograficsData.map((item) => {
    // @ts-ignore
    if (infographic_id == item.infographic_id) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        // <img src={item.infographic_link} height="373" width="660" alt='infigrafica/>
        // @ts-ignore
        <div className={styles.imageWrap}>
        <Image
          key={infographic_id}
          src={item.infographic_link}
          width="640"
          height="360"
          
          alt="Infografic"
        /></div>
      );
    }
  });

  return <div className={styles.infoWrap}>{infoRender}</div>;
};

export default Infografica;
