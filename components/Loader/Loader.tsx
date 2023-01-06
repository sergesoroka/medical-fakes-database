import { useRouter } from "next/router";
import React from "react";

const Loader = () => {
  const router = useRouter();
  const { locale } = router;

  const loading =
    locale == "en"
      ? "Loading..."
      : locale == "ru"
      ? "Загрузка..."
      : "Завантаження...";

  return (
    <p
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "50%",
        color: "#3F4871",
        fontSize: "2rem",
      }}
    >
      {loading}
    </p>
  );
};

export default Loader;
