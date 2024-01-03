import StartedButton from "../components/StartedButton";
function Home() {
  return (
    <div
      className="flex flex-col justify-center items-cente w-screen"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <h1 className="sm:text-5xl text-3xl font-bold ">
        Streamline Your Finances with Precision and Ease
      </h1>
      <p className="mb-5 text-gray-400">Tools by Next, Clerk, Firebase</p>
      <StartedButton />
    </div>
  );
}

export default Home;
