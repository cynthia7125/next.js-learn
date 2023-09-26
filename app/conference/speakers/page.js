import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Welcome to the Speakers Page</h1>
      <h2>
        <Link href={"/conference"}>Back to the Conference Page</Link>
      </h2>
    </>
  );
}
