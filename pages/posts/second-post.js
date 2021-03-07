import Image from 'next/image';
import Link from 'next/link';

export default function SecondPost() {
  return (
    <>
      <h1>The second Post</h1>

      <h2>Image by Image component</h2>

      <Image
        src="/images/profile.jpg"
        width={144}
        height={144}
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
