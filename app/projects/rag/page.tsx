export default function RAGProject() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-10">

      <h1 className="text-3xl font-bold matrix-glow">
        Retrieval Augmented Generation (RAG)
      </h1>

      <p className="text-[var(--text-secondary)] leading-relaxed matrix-glow">
        This project demonstrates how large language models can
        answer questions grounded in external documents instead
        of relying purely on parametric knowledge.
      </p>

      <ul className="list-disc ml-6 space-y-2 text-sm text-[var(--text-secondary)] matrix-glow">
        <li>Document chunking & embeddings</li>
        <li>Vector similarity search</li>
        <li>Prompt-grounded answer synthesis</li>
      </ul>

      <iframe
        src="https://huggingface.co"
        className="
          w-full h-[520px]
          rounded-xl
          border border-[var(--border)]
        "
      />
    </main>
  );
}
