import React from "react";

type Task = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
};

const tasks: Task[] = [
  {
    id: "task1",
    title: "Transaction Classification + Confidence Scoring",
    description:
      "We built a rule-based transaction classifier to categorize user disputes into well-defined classes such as Duplicate Charge, Failed Transaction, Fraud, Refund Pending, and Others. To handle ambiguity in conversational text, we augmented the classifier with embedding-based semantic similarity to generate a confidence score for every prediction.",
    highlights: [
      "Deterministic rule-based classification",
      "Embedding-based cosine similarity for confidence",
      "Low-data, zero-training friendly approach",
      "Designed for high precision in fintech workflows",
    ],
  },
  {
    id: "task2",
    title: "Policy-Based Resolution Engine",
    description:
      "On top of classification, we implemented a rule-based policy engine to determine the appropriate resolution for each dispute. This separates decision logic from prediction logic, making the system interpretable, auditable, and easy to evolve.",
    highlights: [
      "Clear separation of classification and action",
      "Risk-aware decisions (e.g. fraud vs refund)",
      "Easy to modify without retraining models",
      "Aligned with real-world fintech operations",
    ],
  },
  {
    id: "task3",
    title: "User Question Answering using Ollama + Text-to-SQL",
    description:
      "We enabled natural language querying over transaction and dispute data using Ollama-backed LLMs combined with Text-to-SQL. This allows users to ask analytical questions without writing SQL, improving accessibility for non-technical users.",
    highlights: [
      "Natural language to SQL conversion",
      "Works over synthetic transaction datasets",
      "Useful for support, ops, and product teams",
      "LLM used as an interface, not a decision-maker",
    ],
  },
  {
    id: "task4",
    title: "Duplicate Transaction Detection",
    description:
      "We implemented duplicate transaction detection using a hybrid approach. Core signals such as transaction time and amount are used first, and when data is incomplete, embedding-based similarity and LLM-assisted reasoning are applied to make a conservative duplicate decision.",
    highlights: [
      "Hard constraints: time window, amount",
      "Fuzzy matching on merchant and description",
      "LLM-assisted decisioning when features are missing",
      "Precision-first approach to avoid false positives",
    ],
  },
  {
    id: "task5",
    title: "Resolution & Dispute Trend Visualization",
    description:
      "We analyzed and visualized dispute resolutions using plots generated from the synthetic dataset. These visualizations help identify operational bottlenecks, resolution distribution, and category-level trends.",
    highlights: [
      "Resolution distribution analysis",
      "Category-wise and time-based trends",
      "Batch-friendly plot generation",
      "Useful for product and ops reviews",
    ],
  },
  {
    id: "task6",
    title: "User-Level Anomaly Detection",
    description:
      "We built a simple but explainable anomaly detection mechanism based on user-level transaction behavior. Each user's historical spending pattern is modeled using average transaction amount, and transactions significantly exceeding this baseline are flagged as potential anomalies.",
    highlights: [
      "User-centric behavior modeling",
      "No ML training required",
      "Highly explainable rule-based detection",
      "Good baseline for fraud and risk signals",
    ],
  },
];

const DisputeIntelligenceOverview: React.FC = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.badge}>Fintech AI & Risk Engine</div>
          <h1 style={styles.title}>Dispute Intelligence System</h1>
          <p style={styles.subtitle}>
            A hybrid architecture combining <strong>Deterministic Rules</strong>, <strong>ML Classifiers</strong>, and <strong>LLM Reasoning</strong> to automate transaction dispute resolution and fraud detection.
          </p>
          <div style={{ marginTop: "24px" }}>
            <a
              href="https://github.com/vamshi009/FinanceAnalyzer"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.githubButton}
            >
              View on GitHub
            </a>
          </div>
        </header>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>System Context</h2>
          <div style={styles.overviewCard}>
            <p style={styles.text}>
              <strong>The Challenge:</strong> Financial disputes require high precision. Pure ML models are often "black boxes," while pure rule engines are brittle.
              <br/><br/>
              <strong>The Solution:</strong> We utilized a synthetic dataset (simulating real-world payments) to build a system where <strong>Rules ensure compliance</strong>, <strong>ML handles scale</strong>, and <strong>LLMs provide accessibility</strong>.
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Functional Modules</h2>
          <div style={styles.grid}>
            {tasks.map((task) => (
              <div key={task.id} style={styles.card}>
                <h3 style={styles.cardTitle}>{task.title}</h3>
                <p style={styles.cardDescription}>{task.description}</p>
                
                <div style={styles.techSection}>
                  <span style={styles.techLabel}>Key Technical Features</span>
                  <ul style={styles.list}>
                    {task.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Why this Architecture Wins</h2>
          <div style={styles.benefitsGrid}>
            <div style={styles.benefitCard}>
              <h3 style={styles.benefitTitle}>🛡️ Audit & Compliance</h3>
              <p style={styles.benefitText}>Decoupling policy from prediction ensures every financial decision is traceable and explainable.</p>
            </div>
            <div style={styles.benefitCard}>
              <h3 style={styles.benefitTitle}>⚡ Operational Efficiency</h3>
              <p style={styles.benefitText}>Automates 80% of routine disputes, allowing human agents to focus on complex fraud cases.</p>
            </div>
            <div style={styles.benefitCard}>
              <h3 style={styles.benefitTitle}>📈 Scalable Intelligence</h3>
              <p style={styles.benefitText}>Zero-shot classification allows immediate deployment; system learns and improves over time.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

/* =========================
   Styles (inline for clarity)
   ========================= */

const styles: Record<string, React.CSSProperties> = {
  body: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    background: "linear-gradient(135deg, #f0fdf4 0%, #e6fffa 100%)", // Mint/Greenish tint for Finance
    padding: 0,
    margin: 0,
    minHeight: "100vh",
    color: "#1f2937",
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
  badge: {
    display: "inline-block",
    padding: "6px 16px",
    background: "#d1fae5",
    color: "#065f46",
    borderRadius: "20px",
    fontSize: "0.875rem",
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    marginBottom: 16,
  },
  githubButton: {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#064e3b",
    color: "#ffffff",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 600,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 800,
    color: "#064e3b", // Dark Green
    margin: "0 0 16px 0",
    letterSpacing: "-0.03em",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#4b5563", // Gray 600
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: 1.6,
  },
  section: {
    marginBottom: 80,
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#111827",
    marginBottom: 32,
    textAlign: "center",
    letterSpacing: "-0.02em",
  },
  overviewCard: {
    background: "#f0fdfa",
    border: "1px solid #ccfbf1",
    borderRadius: 16,
    padding: 32,
    textAlign: "center",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: 1.7,
    color: "#374151",
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 32,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 32,
    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
    border: "1px solid #f3f4f6",
    display: "flex",
    flexDirection: "column",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#065f46",
    marginTop: 0,
    marginBottom: 12,
  },
  cardDescription: {
    color: "#4b5563",
    marginBottom: 24,
    lineHeight: 1.6,
    flexGrow: 1,
  },
  techSection: {
    background: "#f9fafb",
    padding: "16px 20px",
    borderRadius: 12,
    border: "1px solid #e5e7eb",
  },
  techLabel: {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#9ca3af",
    marginBottom: 8,
    letterSpacing: "0.05em",
  },
  list: {
    margin: 0,
    paddingLeft: "20px",
    color: "#374151",
    fontSize: "0.95rem",
    lineHeight: 1.5,
  },
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 24,
  },
  benefitCard: {
    background: "#fff",
    padding: 24,
    borderRadius: 16,
    border: "1px solid #e5e7eb",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
  },
  benefitTitle: {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#111827",
    marginBottom: 12,
  },
  benefitText: {
    color: "#6b7280",
    fontSize: "0.95rem",
    lineHeight: 1.5,
    margin: 0,
  },
};

export default DisputeIntelligenceOverview;
