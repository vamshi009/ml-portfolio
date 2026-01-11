export default function RAGProject() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-4">
      <h1 className="text-3xl font-bold">
        Retrieval Augmented Generation (RAG)
      </h1>

      <p>
        Demonstrates document retrieval + LLM answering.
      </p>

      <iframe
        src="https://huggingface.co"
        className="w-full h-[500px] border rounded"
      />
    </div>
  );
}
