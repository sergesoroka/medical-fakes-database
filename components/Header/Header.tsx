import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import search from "./../../public/icons/search.svg";
import close from "./../../public/icons/close.svg";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <div className={styles.logo}>
            <p className={styles.voxLogo}>
              Вокс <br />
              Україна
            </p>
            <p className={styles.projectLogo}>
              База даних <br />
              медичних фейків
            </p>
          </div>
        </Link>
        <div className={styles.searchWrap}>
          {router.pathname !== "/search" ? (
            <Link href="/search">
              <Image
                src={search}
                height="48"
                width="48"
                alt="Search icon"
                style={{ cursor: "pointer" }}
              />
            </Link>
          ) : (
            <Link href="/">
              <Image
                src={close}
                height="48"
                width="48"
                alt="Close icon"
                style={{ cursor: "pointer" }}
              />
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
