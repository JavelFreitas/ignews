import Head from 'next/head'
import styles from '../styles/home.module.scss';

export default function Home() {
  let props = { a: 'a', b: 'b' };
  console.log(`valor de a é ${props.a} e valor de b é ${props.b}`);

  return (
  <>
    <Head>
      <title>Início | ig.news</title>
    </Head>
    <h1>
      Hello Next
    </h1>
  </>
  )
}
