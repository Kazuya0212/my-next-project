import styles from "./index.module.css";
import Image from "next/image";
import { News } from "@/app/_libs/microcms";
import Date from "@/app/_components/Date";
import Category from "@/app/_components/Category";

type Props = {
  news: News[];
};

export default function newsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  } else {
    return (
      <ul>
        {news.map((article) => (
          <li key={article.id} className={styles.list}>
            <div className={styles.link}>
              <Image
                className={styles.image}
                src="/no-image.png"
                alt="No Image"
                width={1200}
                height={600}
              />
              <dl className={styles.content}>
                <dt className={styles.title}>{article.title}</dt>
                <dd className={styles.meta}>
                  <Category category={article.category}></Category>
                  <Date date={article.publishedAt}></Date>
                </dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
