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
        <Image
          key={infographic_id}
          src={item.infographic_link}
          height="280"
          width="500"
          alt="Infografic"
        />
      );
    }
  });

  return <div className={styles.infoWrap}>{infoRender}</div>;
};

export default Infografica;
