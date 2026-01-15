export default function RAGProject() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold">
        Retrieval Augmented Generation (RAG)
      </h1>

      <p>
        Demonstrates document retrieval + LLM answering.
      </p>

      <h2 className="text-2xl font-semibold">Core Concepts</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Document Chunking Strategies</li>
        <li>Sliding Window Chunking</li>
        <li>Semantic Embeddings</li>
        <li>Dense Vector Representations</li>
        <li>Cosine Similarity</li>
        <li>Approximate Nearest Neighbor Search (ANN)</li>
        <li>Vector Databases</li>
      </ul>

      <h2 className="text-2xl font-semibold">Advanced Retrieval</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Hybrid Search (Dense + Sparse)</li>
        <li>BM25 Retrieval</li>
        <li>Multi-Query Retrieval</li>
        <li>Query Expansion</li>
        <li>Metadata Filtering</li>
        <li>Hierarchical Retrieval</li>
        <li>Contextual Compression</li>
      </ul>

      <h2 className="text-2xl font-semibold">Reranking & Optimization</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Cross-Encoder Reranking</li>
        <li>Score Normalization</li>
        <li>Top-K vs Top-N Tradeoffs</li>
        <li>Latency–Accuracy Optimization</li>
      </ul>

      <h2 className="text-2xl font-semibold">LLM Integration</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Prompt Engineering for RAG</li>
        <li>Context Window Management</li>
        <li>Token Budget Optimization</li>
        <li>Grounded Generation</li>
        <li>Hallucination Mitigation</li>
      </ul>

      <h2 className="text-2xl font-semibold">Production & Evaluation</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Retrieval Precision & Recall</li>
        <li>Answer Faithfulness</li>
        <li>End-to-End RAG Evaluation</li>
        <li>Offline vs Online Evaluation</li>
        <li>Embedding Drift</li>
        <li>Data Refresh Pipelines</li>
        <li>Caching Strategies</li>
      </ul>

      <h2 className="text-2xl font-semibold">Live Demo</h2>

      <iframe
        src="https://huggingface.co"
        className="w-full h-[500px] border rounded"
      />
    </div>
  );
}
