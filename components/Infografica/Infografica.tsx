import Image from "next/image";
import styles from "./Infografica.module.css";
import SectionLabel from "../SectionLabel/SectionLabel";
import infografica from "./../../public/icons/infografica.png";
import Link from "next/link";

import { infograficsData } from './../../data/fakes/infograficsData'

const Infografica = ({infographic_id}: {infographic_id: string}) => {
  const infoRender = infograficsData.map(item =>{
    if(infographic_id == item.infographic_id) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        // <img src={item.infographic_link} height="373" width="660" alt='infigrafica/>
        <Image src={item.infographic_link} height="373" width="660" alt="Section icon" />
      )
    }
  })
 
  return (
    <>
      <Link href="/infografica">
        <a>
          <SectionLabel label="infograf" />
        </a>
      </Link>

      <div className={styles.infoWrap}></div>
      {infoRender}
    </>
  );
};

export default Infografica;
