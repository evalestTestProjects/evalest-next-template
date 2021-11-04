import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/client';
import { Container, Row, Col } from 'react-bootstrap';

import styles from 'styles/Home.module.scss'

const Layout = ({ children }) => {
  const [session, loading] = useSession()

  return (
    <div>
      <header className={styles.header}>
        <Container>
          <Row>
            <Col xs={12} sm={6}>
              <nav>
                <Link href="/">
                  <a style={{ marginRight: 15 }}>Home</a>
                </Link>
                <Link href="/posts">
                  <a style={{ marginRight: 15 }}>Posts</a>
                </Link>
              </nav>
            </Col>
            <Col xs={12} sm={6}>
              <p style={{ textAlign: 'right' }}>
                {!session && <>
                  <button onClick={() => signIn()}>Sign in</button>
                </>}
                {session && <>
                  {session.user.email}{` `}
                  <button onClick={() => signOut()}>Sign out</button>
                </>}
              </p>
            </Col>
          </Row>
        </Container>
      </header>
      {children}
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col xs={12} style={{ textAlign: 'center' }}>
              Powered by Evalest Ltd
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Layout;