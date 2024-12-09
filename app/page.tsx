import { statSync } from "fs";
import styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "Next.jsの勉強を始めました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/12/04",
      createdAt: "2024/12/04",
    },
    {
      id: "2",
      title: "環境設定がスムーズに終わって一安心",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/12/05",
      createdAt: "2024/12/05",
    },
    {
      id: "3",
      title: "全体像のイメージが掴めてきました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/12/05",
      createdAt: "2024/12/05",
    },
  ],
};
export default function Home() {
  const sliceData = data.contents.slice(0, 2);

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>Next.jsの勉強、がんばるぞー！</h1>
          <p className={styles.description}>
            目標は2月中にひげむぅのベータ版をリリース！
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1000}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
