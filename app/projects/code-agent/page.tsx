import React from "react";

const CodeAgentDoc: React.FC = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: 40 }}>
          <h1>CodeAgent</h1>
          <p>Advanced Codebase Analysis &amp; Question Answering System</p>
        </header>

        {/* Product Overview */}
        <section style={styles.section}>
          <h2>Product Overview</h2>
          <p>
            CodeAgent is a sophisticated tool designed to analyze codebases,
            extract relevant knowledge, and generate structured insights using
            Large Language Models (LLMs). It leverages an Agentic workflow
            (Actor–Critic–Consolidator) to ensure high-quality, accurate answers
            to user queries about the code.
          </p>
        </section>

        {/* System Components */}
        <section style={styles.section}>
          <h2>System Components</h2>

          <div style={styles.component}>
            <h3>1. Codebase Reader</h3>
            <p>Responsible for parsing source code files. We support two modes:</p>
            <ul>
              <li>
                <strong>Custom Parsing:</strong> Specialized parsers for Python
                (AST-based) and Java (Regex-based).
              </li>
              <li>
                <strong>Native Parsing:</strong> Uses LlamaIndex native readers
                for broad file support.
              </li>
            </ul>
          </div>

          <div style={styles.component}>
            <h3>2. Knowledge Extractor</h3>
            <ul>
              <li>
                Uses <strong>HuggingFace Embeddings</strong>{" "}
                (BAAI/bge-small-en-v1.5)
              </li>
              <li>
                Builds a <strong>Vector Store Index</strong> using LlamaIndex for
                efficient retrieval (RAG)
              </li>
            </ul>
          </div>

          <div style={styles.component}>
            <h3>3. Agentic QA</h3>
            <ul>
              <li>
                <strong>Actor:</strong> Retrieves context and generates an
                initial answer
              </li>
              <li>
                <strong>Critic:</strong> Reviews the answer for correctness and
                completeness
              </li>
              <li>
                <strong>Consolidator:</strong> Refines the final answer
              </li>
            </ul>
          </div>

          <div style={styles.component}>
            <h3>4. LLM Inference</h3>
            <ul>
              <li>
                Local inference using{" "}
                <strong>Llama-2-7b-chat (GGUF)</strong>
              </li>
              <li>
                Powered via <code>llama-cpp-python</code>, with modular support
                for OpenAI or Ollama
              </li>
            </ul>
          </div>
        </section>

        {/* System Design (Text-only) */}
        <section style={styles.section}>
          <h2>System Design</h2>
          <p>
            The system follows a layered architecture:
          </p>
          <ul>
            <li>
              <strong>Interface Layer:</strong> CLI and REST API for user
              interaction
            </li>
            <li>
              <strong>Core Logic:</strong> AgenticQA workflow (Actor → Critic →
              Consolidator)
            </li>
            <li>
              <strong>Data Layer:</strong> Knowledge extraction, vector indexing,
              and retrieval
            </li>
          </ul>
        </section>

        {/* Roadmap */}
        <section style={styles.section}>
          <h2>Future Roadmap &amp; Next Steps</h2>
          <ul>
            <li>Question decomposition for multi-hop reasoning</li>
            <li>Separate indices for raw code and metadata</li>
            <li>Smarter multi-index answer consolidation</li>
            <li>Faster inference via Ollama or OpenAI APIs</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CodeAgentDoc;

/* ---------------- styles ---------------- */

const styles: Record<string, React.CSSProperties> = {
  body: {
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f4f4f9",
    padding: 20,
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    background: "#ffffff",
    padding: 30,
    borderRadius: 8,
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  section: {
    marginBottom: 30,
  },
  component: {
    background: "#eef2f5",
    padding: 15,
    borderLeft: "5px solid #3498db",
    marginBottom: 15,
  },
};
