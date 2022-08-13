import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import {socialMediaLinks} from './../../data/socialMediaLinks'
import telegram from "./../../public/icons/telegram.svg";
import instagram from "./../../public/icons/instagram.svg";
import facebook from "./../../public/icons/facebook.svg";
import youtube from "./../../public/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>VoxUkraine © 2022</div>
      <div className={styles.icons}>
        <Link href={socialMediaLinks.Telegram}>
          <a target='_blank'>
            <Image src={telegram} height="26" width="26" alt="Telegram icon" />
          </a>
        </Link>
        <Link href={socialMediaLinks.Instagram}>
          <a target='_blank'>
            <Image src={instagram} height="26" width="26" alt="Instagram icon" />
          </a>
        </Link>
        <Link href={socialMediaLinks.Facebook}>
          <a target='_blank'>
            <Image src={facebook} height="26" width="26" alt="Facebookm icon" />
          </a>
        </Link>
        <Link href={socialMediaLinks.YouTube}>
          <a target='_blank'>
            <Image src={youtube} height="26" width="26" alt="Youtube icon" />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
