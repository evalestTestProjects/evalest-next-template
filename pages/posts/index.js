import Head from 'next/head';
import useSWR from 'swr';
import Skeleton from 'react-loading-skeleton';
import { fetcher } from 'utils';

import styles from 'styles/Home.module.scss';

export default function Posts() {
  const { data, error } = useSWR('/api/posts', fetcher);

  const getContent = () => {
    if (error) return <div>failed to load</div>
    if (!data) return <Skeleton count={3}/>

    return data.map(post => <div>{post.title}</div>);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Posts</title>
      </Head>

      <main className={styles.main}>
        <h1>Posts list</h1>
        <div className={styles.postsList}>
          {getContent()}
        </div>
      </main>
    </div>
  )
}
