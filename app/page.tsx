export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        AI / ML Portfolio
      </h1>

      <p className="text-gray-600 mb-6">
        Practical AI projects with clean explanations.
      </p>

      <a
        href="/projects"
        className="px-6 py-3 bg-black text-white rounded"
      >
        View Projects
      </a>
    </main>
  );
}
