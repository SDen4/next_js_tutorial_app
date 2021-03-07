import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>The first post</title>
      </Head>

      <h1>The first Post</h1>

      <div>
        <Link href="/">
          <a>Back to main page</a>
        </Link>
      </div>
    </Layout>
  );
}
