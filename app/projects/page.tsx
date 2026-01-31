import Link from "next/link";
import React from "react";

export default function Projects() {
  const projects = [
   
    {
      title: "Code Assistant Engine",
      description: "An AI-powered documentation assistant that ingests codebases to answer architectural and functional questions.",
      link: "/projects/code-assistant",
      tags: ["ChromaDB", "Quantized Llama", "FastAPI"],
      color: "#805ad5"
    },
    {
      title: "Code Agent Workflow",
      description: "Advanced agentic system using Actor-Critic methodologies to analyze code and refine answers iteratively.",
      link: "/projects/code-agent",
      tags: ["LlamaIndex", "Agents", "Reasoning"],
      color: "#38a169"
    },
    {
      title: "Finance Analyzer",
      description: "Intelligent financial transaction reconciliation, classification and anomaly detection systems",
      link: "/projects/financeAnalyzer",
      tags: ["Anomaly Detection", "Sentence Transformers", "Ollama", "Pattern Recognition", "Text2SQL"],
       color: "#38a169"
    }

  ];

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Featured Projects</h1>
          <p style={styles.subtitle}>
            A collection of AI engineering initiatives focusing on RAG, Agents, and LLM application architecture.
          </p>
        </header>

        <div style={styles.grid}>
          {projects.map((project, index) => (
            <Link href={project.link} key={index} style={styles.cardLink}>
              <div style={styles.card}>
                <div style={{...styles.cardHeader, borderLeftColor: project.color}}>
                  <h3 style={styles.cardTitle}>{project.title}</h3>
                </div>
                <p style={styles.cardDescription}>{project.description}</p>
                <div style={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{...styles.tag, color: project.color, backgroundColor: `${project.color}15`}}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{...styles.arrow, color: project.color}}>
                  View Project &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  body: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    padding: "0",
    margin: "0",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "60px 20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 800,
    color: "#1a202c",
    marginBottom: "16px",
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#4a5568",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: 1.6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "48px",
  },
  cardLink: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },
  card: {
    background: "white",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #e2e8f0",
  },
  cardHeader: {
    marginBottom: "16px",
    paddingLeft: "16px",
    borderLeftWidth: "4px",
    borderLeftStyle: "solid",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#2d3748",
    margin: 0,
  },
  cardDescription: {
    color: "#718096",
    lineHeight: 1.6,
    marginBottom: "24px",
    flexGrow: 1,
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "24px",
  },
  tag: {
    fontSize: "0.85rem",
    fontWeight: 600,
    padding: "4px 12px",
    borderRadius: "20px",
  },
  arrow: {
    fontWeight: 600,
    fontSize: "0.95rem",
    marginTop: "auto",
  },
};
