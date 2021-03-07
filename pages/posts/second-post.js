import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function SecondPost() {
  return (
    <>
      <Head>
        <title>The second post</title>
      </Head>

      <h1>The second Post</h1>

      <h2>Image by Image component</h2>

      <Image
        src="/images/profile.jpg"
        width={1440}
        height={790}
        alt="Profile ava"
      />

      <div>
        <Link href="/">
          <a>Back to main page</a>
        </Link>
      </div>
    </>
  );
}
