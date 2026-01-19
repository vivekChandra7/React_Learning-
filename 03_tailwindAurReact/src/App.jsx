import React from "react";
import Card from "./components/card";

const App = () => {
  const myobj = { name: "Vivek", channel: "CodeWithVivek" };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="bg-green-400 px-6 py-3 rounded-xl text-black text-xl font-semibold">
        Tailwind test
      </h1>

      <div className="flex flex-col gap-6">
        <Card channel={myobj} />
        <Card />
      </div>
    </div>
  );
};

export default App;
