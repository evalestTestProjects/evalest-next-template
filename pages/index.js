import { useState } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { updateAmount, updateAmountAsync } from 'store/actions';
import styles from 'styles/Home.module.scss';

export default function Home() {
  const amount = useSelector(state => state.common.amount);
  const [incrementAmount, setIncrementAmount] = useState(2);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Evalest PWA template</h1>
        <div>
          <h4>Store value:{amount}</h4>
          <input value={incrementAmount} type="number" onChange={e => setIncrementAmount(Number(e.target.value))} />
          <button onClick={() => dispatch(updateAmount(amount + incrementAmount))}>Add</button>
          <button onClick={() => dispatch(updateAmountAsync(amount + incrementAmount))}>Add async</button>
        </div>
      </main>
    </div>
  )
}
