import React from "react";

const CodeDocumentationAssistant: React.FC = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Code Documentation Assistant</h1>

        {/* Conversation */}
        <div style={styles.conversation}>
          <div style={styles.user}>
            User: How does the API endpoint work?
          </div>
          <div style={styles.assistant}>
            Assistant: The API endpoint receives your question, retrieves relevant
            code chunks, expands context with related functions/classes, and uses
            an LLM to generate a precise answer.
          </div>

          <div style={styles.user}>
            User: Is this scalable for large teams?
          </div>
          <div style={styles.assistant}>
            Assistant: Yes! The system is containerized, supports cloud vector
            DBs, and can be deployed on AWS, GCP, or Azure. Authentication and
            monitoring can be added for enterprise use.
          </div>
        </div>

        {/* What is it */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What is it?</h2>
          <p>
            A developer-focused AI assistant that ingests your codebase and
            answers questions about architecture, functionality, API endpoints,
            and dependencies. It uses Retrieval-Augmented Generation (RAG) and
            advanced chunking to provide context-aware, accurate answers for
            engineering teams.
          </p>
        </section>

        {/* Technical Decisions */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Current Technical Decisions</h2>
          <div style={styles.techDecisions}>
            <ul>
              <li><strong>Python & FastAPI</strong> for backend APIs</li>
              <li><strong>ChromaDB</strong> (local) & <strong>Pinecone</strong> (cloud)</li>
              <li><strong>OpenAI GPT-4, Ollama, Local Quantized LLMs</strong></li>
              <li><strong>Configurable chunking</strong> (AST, line, auto)</li>
              <li><strong>Cross-file reasoning</strong></li>
              <li><strong>Streamlit UI</strong></li>
              <li><strong>Structured logging & error handling</strong></li>
            </ul>
          </div>
        </section>

        {/* Scalability */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Scalability & Productionization</h2>
          <div style={styles.scalable}>
            <ul>
              <li>Dockerized for easy deployment</li>
              <li>Managed vector DB support (Pinecone)</li>
              <li>AWS, GCP, Azure ready</li>
              <li>Auth, rate limiting & monitoring extensible</li>
              <li>Modular & maintainable architecture</li>
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Next Steps</h2>
          <div style={styles.nextSteps}>
            <ul>
              <li>LangGraph or multi-step orchestration</li>
              <li>Actor–critic / agent refinement</li>
              <li>FAISS, Milvus, Weaviate evaluation</li>
              <li>Explainability & query visualization</li>
              <li>System evaluation & prompt versioning</li>
            </ul>
          </div>
        </section>

        {/* Demo Screenshots */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Demo Screenshots</h2>
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
    background: "linear-gradient(135deg, #e3f0ff 0%, #f7e8ff 100%)",
    padding: 0,
    margin: 0,
  },
  container: {
    maxWidth: 900,
    margin: "40px auto",
    background: "#ffffff",
    borderRadius: 16,
    boxShadow: "0 4px 24px rgba(60,60,120,0.12)",
    padding: "40px 32px",
  },
  h1: {
    color: "#5b2cff",
    fontSize: "2.5em",
    textAlign: "center",
    marginBottom: "0.2em",
  },
  h2: {
    color: "#2196f3",
    marginTop: "2em",
  },
  section: {
    marginBottom: 36,
  },
  conversation: {
    background: "#f7e8ff",
    borderRadius: 8,
    padding: 18,
    marginBottom: 24,
    boxShadow: "0 2px 8px rgba(91,44,255,0.07)",
  },
  user: {
    color: "#2196f3",
    fontWeight: "bold",
    marginBottom: 8,
  },
  assistant: {
    color: "#5b2cff",
    fontWeight: "bold",
    marginBottom: 12,
  },
  techDecisions: {
    background: "linear-gradient(90deg, #fffde7 60%, #eaf6ff 100%)",
    borderLeft: "6px solid #fbc02d",
    padding: 18,
    borderRadius: 8,
  },
  scalable: {
    background: "linear-gradient(90deg, #e8f5e9 60%, #e3f0ff 100%)",
    borderLeft: "6px solid #43a047",
    padding: 18,
    borderRadius: 8,
  },
  nextSteps: {
    background: "linear-gradient(90deg, #eaf6ff 60%, #f7e8ff 100%)",
    borderLeft: "6px solid #5b2cff",
    padding: 18,
    borderRadius: 8,
  },
  demoImg: {
    maxWidth: "100%",
    borderRadius: 8,
    margin: "16px 0",
    boxShadow: "0 2px 8px rgba(91,44,255,0.07)",
  },
  footer: {
    color: "#888",
    fontSize: "0.95em",
    marginTop: 32,
    textAlign: "center",
  },
};
