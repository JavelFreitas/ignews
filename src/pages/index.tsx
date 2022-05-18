import styles from '../styles/home.module.scss';

export default function Home() {
  let props = { a: 'a', b: 'b' };
  console.log(`valor de a é ${props.a} e valor de b é ${props.b}`);

  return (
    <>
      <h1 className={styles.title}>
        Hello <span>Next.JS</span>
      </h1>
    </>
  );
}
