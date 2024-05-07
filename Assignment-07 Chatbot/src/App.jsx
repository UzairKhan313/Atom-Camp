import DailogeBox from "./components/DailogeBox";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center   w-full md:w-[35%] bg-gray-50 mx-auto">
        <div className="mt-12 w-full">
          <h1 className="py-3 text-center text-4xl font-bold text-gray-900">
            ChatBot Assignment
          </h1>
          <DailogeBox />
        </div>
      </section>
    </>
  );
}

export default App;
