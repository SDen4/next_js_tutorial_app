import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>The first Post</h1>

      <div>
        <Link href="/">
          <a>Back to main page</a>
        </Link>
      </div>
    </>
  );
}
