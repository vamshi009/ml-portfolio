import Link from "next/link";

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 matrix-glow">Projects</h2>

      <ul className="space-y-4">
        <li>
          <Link href="projects/rag" className="underline matrix-glow">
            Retrieval Augmented Generation (RAG)
          </Link>
        </li>
      </ul>
    </div>
  );
}
