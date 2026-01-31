import React from "react";

const CodeDocumentationAssistant: React.FC = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Header Section */}
        <header style={styles.header}>
          <h1 style={styles.h1}>Code Documentation Assistant</h1>
          <p style={styles.subtitle}>
            A developer-focused AI assistant that ingests your codebase and
            answers questions about architecture, functionality, API endpoints,
            and dependencies using Retrieval-Augmented Generation (RAG).
          </p>
          <div style={{ marginTop: "24px" }}>
            <a
              href="https://github.com/vamshi009/CodeAssistantEngine"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.githubButton}
            >
              View on GitHub
            </a>
          </div>
        </header>

        {/* Conversation */}
        <section style={styles.section}>
          <div style={styles.conversation}>
            <div style={styles.chatHeader}>Live Demo Interaction</div>
            <div style={styles.messageRowRight}>
              <div style={styles.bubbleUser}>
                <strong>User:</strong> How does the API endpoint work?
              </div>
            </div>
            <div style={styles.messageRowLeft}>
              <div style={styles.bubbleAssistant}>
                <strong>Assistant:</strong> The API endpoint receives your question, retrieves relevant
                code chunks, expands context with related functions/classes, and uses
                an LLM to generate a precise answer.
              </div>
            </div>

            <div style={styles.messageRowRight}>
              <div style={styles.bubbleUser}>
                <strong>User:</strong> Is this scalable for large teams?
              </div>
            </div>
            <div style={styles.messageRowLeft}>
              <div style={styles.bubbleAssistant}>
                <strong>Assistant:</strong> Yes! The system is containerized, supports cloud vector
                DBs, and can be deployed on AWS, GCP, or Azure. Authentication and
                monitoring can be added for enterprise use.
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <div style={styles.grid}>
          {/* Technical Decisions */}
          <div style={{ ...styles.card, ...styles.cardTech }}>
            <h3 style={styles.cardTitle}>Technical Stack</h3>
            <ul style={styles.list}>
              <li><strong>Python & FastAPI</strong> for backend APIs</li>
              <li><strong>ChromaDB</strong> (local) & <strong>Pinecone</strong> (cloud)</li>
              <li><strong>OpenAI GPT-4, Ollama, Local Quantized LLMs</strong></li>
              <li><strong>Configurable chunking</strong> (AST, line, auto)</li>
              <li><strong>Cross-file reasoning</strong></li>
              <li><strong>Streamlit UI</strong></li>
            </ul>
          </div>

          {/* Scalability */}
          <div style={{ ...styles.card, ...styles.cardScale }}>
            <h3 style={styles.cardTitle}>Scalability</h3>
            <ul style={styles.list}>
              <li>Dockerized for easy deployment</li>
              <li>Managed vector DB support (Pinecone)</li>
              <li>AWS, GCP, Azure ready</li>
              <li>Auth, rate limiting & monitoring extensible</li>
              <li>Modular & maintainable architecture</li>
            </ul>
          </div>

          {/* Next Steps */}
          <div style={{ ...styles.card, ...styles.cardNext }}>
            <h3 style={styles.cardTitle}>Roadmap</h3>
            <ul style={styles.list}>
              <li>LangGraph or multi-step orchestration</li>
              <li>Actor–critic / agent refinement</li>
              <li>FAISS, Milvus, Weaviate evaluation</li>
              <li>Explainability & query visualization</li>
              <li>System evaluation & prompt versioning</li>
            </ul>
          </div>
        </div>

        {/* Demo Screenshots */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Interface Preview</h2>
          <div style={styles.gallery}>
            <img
              src="Screenshot%202026-01-27%20at%2010.15.09%E2%80%AFPM.png"
              alt="Ask Request Demo"
              style={styles.demoImg}
            />
            <img
              src="Screenshot%202026-01-27%20at%2011.01.59%E2%80%AFPM.png"
              alt="Ingest Request Demo"
              style={styles.demoImg}
            />
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          © 2026 Code Documentation Assistant — Built for developers and product managers.
          <br />
          <em>Contact: your.email@domain.com</em>
        </footer>
      </div>
    </div>
  );
};

export default CodeDocumentationAssistant;

/* ---------------- Styles ---------------- */

const styles: Record<string, React.CSSProperties> = {
  body: {
    fontFamily: "Inter, Segoe UI, Arial, sans-serif",
    background: "linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)",
    padding: 0,
    margin: 0,
    minHeight: "100vh",
  },
  container: {
    maxWidth: 1000,
    margin: "40px auto",
    background: "#ffffff",
    borderRadius: 24,
    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
    padding: "48px 40px",
  },
  header: {
    textAlign: "center",
    marginBottom: 48,
  },
  h1: {
    color: "#1a202c",
    fontSize: "3em",
    marginBottom: "0.3em",
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: "1.1em",
    color: "#4a5568",
    lineHeight: 1.6,
    maxWidth: "700px",
    margin: "0 auto",
  },
  githubButton: {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#3182ce",
    color: "#ffffff",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 600,
    boxShadow: "0 4px 12px rgba(49,130,206,0.3)",
    transition: "transform 0.2s ease",
  },
  h2: {
    color: "#2d3748",
    textAlign: "center",
    marginBottom: "1.5em",
    fontSize: "1.8em",
  },
  section: {
    marginBottom: 48,
  },
  conversation: {
    background: "#f7fafc",
    borderRadius: 16,
    padding: 24,
    border: "1px solid #e2e8f0",
  },
  chatHeader: {
    textTransform: "uppercase",
    fontSize: "0.75em",
    letterSpacing: "0.05em",
    color: "#a0aec0",
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  messageRowRight: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  messageRowLeft: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: 16,
  },
  bubbleUser: {
    background: "#3182ce",
    color: "white",
    padding: "12px 18px",
    borderRadius: "18px 18px 0 18px",
    maxWidth: "80%",
    boxShadow: "0 2px 4px rgba(49,130,206,0.2)",
  },
  bubbleAssistant: {
    background: "#ffffff",
    color: "#2d3748",
    padding: "12px 18px",
    borderRadius: "18px 18px 18px 0",
    maxWidth: "80%",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    border: "1px solid #e2e8f0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    marginBottom: 48,
  },
  card: {
    padding: "24px",
    borderRadius: 16,
    boxShadow: "0 4px 6px rgba(0,0,0,0.04)",
    borderTopWidth: "6px",
    borderTopStyle: "solid",
  },
  cardTech: {
    background: "#fffbeb",
    borderTopColor: "#ecc94b",
  },
  cardScale: {
    background: "#f0fff4",
    borderTopColor: "#48bb78",
  },
  cardNext: {
    background: "#ebf8ff",
    borderTopColor: "#4299e1",
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: 16,
    fontSize: "1.25em",
    color: "#2d3748",
  },
  list: {
    paddingLeft: 20,
    margin: 0,
    lineHeight: 1.6,
    color: "#4a5568",
  },
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    justifyContent: "center",
  },
  demoImg: {
    maxWidth: "45%",
    minWidth: "300px",
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    border: "1px solid #edf2f7",
  },
  footer: {
    color: "#a0aec0",
    fontSize: "0.9em",
    marginTop: 64,
    textAlign: "center",
    borderTop: "1px solid #edf2f7",
    paddingTop: 32,
  },
};
