import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Welcome to Speaker Sessions page</h1>
      <h2>
        <Link href={"/conference"}>Back to the Conference Page</Link>
      </h2>
    </>
  );
}
