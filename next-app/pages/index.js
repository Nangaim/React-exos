import Head from "next/head"
import style from "../styles/Home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={style.title}>Ninja</h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores amet
          temporibus laudantium commodi repellendus illum deserunt totam sunt
          quibusdam quaerat minima error tempore odit veritatis delectus, omnis
          beatae officiis laborum, animi maxime quisquam excepturi rem veniam!
          Ab provident iusto asperiores corrupti ea? Et impedit aspernatur vero
          deleniti neque nam consectetur? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maiores amet temporibus laudantium commodi
          repellendus illum deserunt totam sunt quibusdam quaerat minima error
          tempore odit veritatis delectus, omnis beatae officiis laborum, animi
          maxime quisquam excepturi rem veniam! Ab provident iusto asperiores
          corrupti ea? Et impedit aspernatur vero deleniti neque nam
          consectetur?
        </p>
        <Link href="/ninjas">
          <a className={style.btn}>see ninja listing</a>
        </Link>
      </div>
    </>
  )
}
