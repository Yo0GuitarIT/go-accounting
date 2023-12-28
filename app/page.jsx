import StartedButton from "../components/StartedButton";
function Home() {
  return (
    <div
      className="flex flex-col justify-center items-cente w-screen"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <h1 className="text-5xl font-bold ">
        Streamline Your Finances with Precision and Ease
      </h1>
      <p className="mb-5 text-gray-500">Tool by Next, Clerk, Firebase</p>
      <StartedButton />
    </div>
  );
}

export default Home;
