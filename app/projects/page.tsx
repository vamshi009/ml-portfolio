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
        <li>
          <a href="projects/code-assistant" className="underline matrix-glow">
            Code Assistant Engine (Chroma & Quantized Llama)
          </a>
        </li>
        <li>
          <a href="projects/code-agent" className="underline matrix-glow">
            Code Agent (Actor-Critic & LlamaIndex)
          </a>
        </li>
      </ul>
    </div>
  );
}
