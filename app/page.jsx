import Link from "next/link"

function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold ">Welcome</h1>
      <p className="mb-5">Demo by next.js & clerk</p>
      <Link href="/main" className="hover:text-rose-600 mr-5">
        Get Started
      </Link>
      <Link href="/test" className="hover:text-rose-600">
        Test
      </Link>
    </div>
  );
}

export default Home;
