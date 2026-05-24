import { useState } from "react";
import axios from "axios";

function App() {
  const [repo, setRepo] = useState("");
  const [docs, setDocs] = useState("");
  const [loading, setLoading] = useState(false);

  const generateDocs = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/generate",
        { repo }
      );

      setDocs(response.data.documentation);

    } catch (error) {
      setDocs("Error generating documentation");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-10">

      <h1 className="text-5xl font-bold mb-6 text-green-400">
        DocuMind AI 🚀
      </h1>

      <p className="text-gray-400 mb-8">
        AI Powered Technical Documentation Generator
      </p>

      <div className="bg-zinc-900 p-6 rounded-2xl shadow-2xl w-full max-w-3xl">

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Enter GitHub Repository Link..."
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            className="flex-1 p-4 rounded-xl bg-zinc-800 text-white outline-none"
          />

          <button
            onClick={generateDocs}
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-bold"
          >
            Generate
          </button>

        </div>

        {loading && (
          <div className="mt-6 text-green-400 animate-pulse">
            Generating AI Documentation...
          </div>
        )}

        <div className="mt-8 bg-zinc-950 p-6 rounded-xl overflow-auto max-h-[500px]">
          <pre className="whitespace-pre-wrap text-sm text-gray-300">
            {docs}
          </pre>
        </div>

      </div>

    </div>
  );
}

export default App;