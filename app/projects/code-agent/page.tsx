import React from "react";

const CodeAgentDoc: React.FC = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.title}>CodeAgent</h1>
          <p style={styles.subtitle}>
            Advanced Codebase Analysis &amp; Question Answering System
          </p>
          <div style={styles.badge}>Agentic Workflow</div>
        </header>

        {/* Product Overview */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Product Overview</h2>
          <div style={styles.overviewCard}>
            <p style={styles.text}>
              CodeAgent is a sophisticated tool designed to analyze codebases,
              extract relevant knowledge, and generate structured insights using
              Large Language Models (LLMs). It leverages an <strong>Agentic workflow
              (Actor–Critic–Consolidator)</strong> to ensure high-quality, accurate answers
              to user queries about the code.
            </p>
          </div>
        </section>

        {/* System Components */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>System Components</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.icon}>📂</span>
                <h3 style={styles.cardTitle}>1. Codebase Reader</h3>
              </div>
              <p style={styles.cardText}>Responsible for parsing source code files. We support two modes:</p>
              <ul style={styles.list}>
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

            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.icon}>🧠</span>
                <h3 style={styles.cardTitle}>2. Knowledge Extractor</h3>
              </div>
              <ul style={styles.list}>
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

            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.icon}>🤖</span>
                <h3 style={styles.cardTitle}>3. Agentic QA</h3>
              </div>
              <ul style={styles.list}>
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

            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.icon}>⚡</span>
                <h3 style={styles.cardTitle}>4. LLM Inference</h3>
              </div>
              <ul style={styles.list}>
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
          </div>
        </section>

        {/* System Design (Visual Stack) */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>System Architecture</h2>
          <p style={{...styles.text, textAlign: 'center', marginBottom: 24}}>
            The system follows a layered architecture designed for modularity and scalability.
          </p>
          <div style={styles.architectureStack}>
            <div style={{...styles.layer, background: '#e3f2fd', borderColor: '#2196f3'}}>
              <strong>Interface Layer:</strong> CLI and REST API for user interaction
            </div>
            <div style={styles.arrow}>⬇</div>
            <div style={{...styles.layer, background: '#fff3e0', borderColor: '#ff9800'}}>
              <strong>Core Logic:</strong> AgenticQA workflow (Actor → Critic → Consolidator)
            </div>
            <div style={styles.arrow}>⬇</div>
            <div style={{...styles.layer, background: '#e8f5e9', borderColor: '#4caf50'}}>
              <strong>Data Layer:</strong> Knowledge extraction, vector indexing, and retrieval
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Future Roadmap</h2>
          <div style={styles.roadmapContainer}>
            <ul style={styles.roadmapList}>
              <li>Question decomposition for multi-hop reasoning</li>
              <li>Separate indices for raw code and metadata</li>
              <li>Smarter multi-index answer consolidation</li>
              <li>Faster inference via Ollama or OpenAI APIs</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CodeAgentDoc;

/* ---------------- styles ---------------- */

const styles: Record<string, React.CSSProperties> = {
  body: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    background: "linear-gradient(135deg, #f6f9fc 0%, #eef2f7 100%)",
    padding: 0,
    margin: 0,
    minHeight: "100vh",
    color: "#333",
  },
  container: {
    maxWidth: 1100,
    margin: "40px auto",
    background: "#ffffff",
    padding: "60px",
    borderRadius: 24,
    boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
  },
  header: {
    textAlign: "center",
    marginBottom: 60,
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: 800,
    background: "linear-gradient(90deg, #2563eb, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: "0 0 16px 0",
    letterSpacing: "-0.03em",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#64748b",
    maxWidth: "600px",
    margin: "0 auto 24px auto",
    lineHeight: 1.6,
  },
  badge: {
    display: "inline-block",
    padding: "6px 16px",
    background: "#eff6ff",
    color: "#2563eb",
    borderRadius: "20px",
    fontSize: "0.875rem",
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },
  section: {
    marginBottom: 80,
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#1e293b",
    marginBottom: 32,
    textAlign: "center",
    letterSpacing: "-0.02em",
  },
  overviewCard: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 16,
    padding: 32,
    textAlign: "center",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: 1.7,
    color: "#475569",
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 32,
  },
  card: {
    background: "#ffffff",
    borderRadius: 16,
    padding: 32,
    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
    border: "1px solid #f1f5f9",
    transition: "transform 0.2s ease",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    fontSize: "1.5rem",
    marginRight: 12,
    background: "#f1f5f9",
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#1e293b",
    margin: 0,
  },
  cardText: {
    color: "#64748b",
    marginBottom: 16,
    lineHeight: 1.6,
  },
  list: {
    paddingLeft: 20,
    margin: 0,
    color: "#475569",
    lineHeight: 1.6,
  },
  architectureStack: {
    maxWidth: 600,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  layer: {
    width: "100%",
    padding: "20px",
    borderRadius: 12,
    borderLeftWidth: "6px",
    borderLeftStyle: "solid",
    textAlign: "center",
    color: "#334155",
    fontSize: "1.1rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  arrow: {
    fontSize: "1.5rem",
    color: "#cbd5e1",
    margin: "8px 0",
  },
  roadmapContainer: {
    background: "#f0f9ff",
    borderRadius: 16,
    padding: 32,
    border: "1px dashed #bae6fd",
  },
  roadmapList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 16,
    paddingLeft: 20,
    color: "#0369a1",
    fontWeight: 500,
  },
};
