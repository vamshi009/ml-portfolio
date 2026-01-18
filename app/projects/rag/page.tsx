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

      <section className="space-y-8 mt-10">
        <h2 className="text-2xl font-bold matrix-glow">Key RAG Concepts</h2>
        <h3 className="text-xl font-semibold matrix-glow">Semantic Chunking & Embedding Strategies</h3>
        <h3 className="text-xl font-semibold matrix-glow">Vector Database Indexing & ANN Search</h3>
        <h3 className="text-xl font-semibold matrix-glow">Hybrid Retrieval (Dense + Sparse)</h3>
        <h3 className="text-xl font-semibold matrix-glow">Query Expansion & Multi-Query Techniques</h3>
        <h3 className="text-xl font-semibold matrix-glow">Metadata Filtering & Hierarchical Retrieval</h3>
        <h3 className="text-xl font-semibold matrix-glow">Contextual Compression & Token Budgeting</h3>
        <h3 className="text-xl font-semibold matrix-glow">Cross-Encoder Reranking & Score Normalization</h3>
        <h3 className="text-xl font-semibold matrix-glow">Prompt Engineering for RAG</h3>
        <h3 className="text-xl font-semibold matrix-glow">Grounded Generation & Hallucination Mitigation</h3>
        <h3 className="text-xl font-semibold matrix-glow">Retrieval Evaluation: Precision, Recall, Faithfulness</h3>
        <h3 className="text-xl font-semibold matrix-glow">Production Pipelines & Embedding Drift</h3>
        <h3 className="text-xl font-semibold matrix-glow">Contrastive Learning for Retrieval Optimization</h3>
        <h3 className="text-xl font-semibold matrix-glow">Knowledge-Augmented RAG Architectures</h3>
        <h3 className="text-xl font-semibold matrix-glow">Dynamic Index Refresh & Real-Time Ingestion</h3>
        <h3 className="text-xl font-semibold matrix-glow">Multi-hop Retrieval & Reasoning Chains</h3>
        <h3 className="text-xl font-semibold matrix-glow">Retrieval-Augmented Generation for Multimodal Data</h3>
        <h3 className="text-xl font-semibold matrix-glow">Federated RAG & Distributed Retrieval Systems</h3>
        <h3 className="text-xl font-semibold matrix-glow">Privacy-Preserving Retrieval & Secure RAG</h3>
        <h3 className="text-xl font-semibold matrix-glow">Adaptive Retrieval Policies & Latency Control</h3>
      </section>

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
