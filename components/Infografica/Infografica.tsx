import Image from "next/image";
import styles from "./Infografica.module.css";
import SectionLabel from "../SectionLabel/SectionLabel";
import infografica from "./../../public/icons/infografica.png";
import Link from "next/link";

const Infografica = () => {
  return (
    <>
      <Link href="/infografica">
        <a>
          <SectionLabel label="infograf" />
        </a>
      </Link>

      <div className={styles.infoWrap}></div>
      <Image src={infografica} height="373" width="660" alt="Section icon" />
    </>
  );
};

export default Infografica;
