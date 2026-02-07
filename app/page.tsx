import MediumCard from "@/components/MediumCard";
import { mediumPosts } from "@/lib/MediumPosts";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div style={styles.body}>
      <div style={styles.mainContainer}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.badge}>AI & Product Engineering</div>
          <h1 style={styles.title}>
            Turning Complex Data into <br />
            <span style={styles.gradientText}>Intelligent Products</span>
          </h1>
          <p style={styles.subtitle}>
            A portfolio of practical AI projects, technical writing, and product-focused engineering.
            Bridging the gap between research and real-world application.
          </p>

          <div style={styles.buttonGroup}>
            <Link href="projects" style={styles.primaryButton}>
              Explore Projects
            </Link>
            <a href="#writing" style={styles.secondaryButton}>
              Read Articles
            </a>
          </div>
        </section>

        {/* Writing Section */}
        <section id="writing" style={{ ...styles.section, marginBottom: "40px" }}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Writing & Insights</h2>
            <p style={styles.sectionDescription}>
              Deep dives into system architecture, LLMs, and engineering strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediumPosts.map((post) => (
              <MediumCard
                key={post.url}
                title={post.title}
                url={post.url}
                description={post.description}
              />
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section style={styles.section}>
          <div style={styles.aboutGrid}>
            <div style={styles.imageWrapper}>
              <Image
                src="/Causal pic.jpg"
                alt="Vamshi Krishna Srirangam"
                width={140}
                height={140}
                style={styles.profileImage}
              />
            </div>
            <div>
              <h2 style={styles.sectionTitle}>About Me</h2>
              <p style={styles.bio}>
                Senior Data Scientist at EY.<br />
                IIIT H B.Tech in CS + Masters in Machine Learning.
              </p>
              <div style={styles.contactRow}>
                <a href="mailto:svkc1234@gmail.com" style={styles.contactLink}>
                  ✉️ svkc1234@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/vamshi-krishna-srirangam-4307b5110/" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                  🔗 LinkedIn
                </a>
                <a href="https://drive.google.com/file/d/1IKFpD2wG9DLfaUtTorH7zhpbrfnJZXSL/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                  📄 Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  body: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    color: "#2d3748",
    padding: "0",
  },
  mainContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
  },
  hero: {
    textAlign: "center",
    padding: "80px 0 100px",
  },
  badge: {
    display: "inline-block",
    padding: "8px 16px",
    background: "#e2e8f0",
    color: "#4a5568",
    borderRadius: "50px",
    fontSize: "0.85rem",
    fontWeight: 600,
    marginBottom: "24px",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: "24px",
    color: "#1a202c",
    letterSpacing: "-0.02em",
  },
  gradientText: {
    background: "linear-gradient(90deg, #3182ce, #805ad5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#4a5568",
    maxWidth: "600px",
    margin: "0 auto 40px",
    lineHeight: 1.6,
  },
  buttonGroup: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButton: {
    display: "inline-block",
    padding: "14px 32px",
    background: "#3182ce",
    color: "white",
    borderRadius: "12px",
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: "0 4px 14px rgba(49, 130, 206, 0.4)",
    transition: "transform 0.2s ease",
  },
  secondaryButton: {
    display: "inline-block",
    padding: "14px 32px",
    background: "white",
    color: "#3182ce",
    borderRadius: "12px",
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
    transition: "transform 0.2s ease",
  },
  section: {
    background: "rgba(255, 255, 255, 0.6)",
    backdropFilter: "blur(10px)",
    borderRadius: "24px",
    padding: "40px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
  },
  sectionHeader: {
    marginBottom: "40px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#2d3748",
    marginBottom: "12px",
  },
  sectionDescription: {
    fontSize: "1.1rem",
    color: "#718096",
  },
  aboutGrid: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
    flexWrap: "wrap",
  },
  imageWrapper: {
    flexShrink: 0,
  },
  profileImage: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    backgroundColor: "#cbd5e0",
  },
  bio: {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    color: "#4a5568",
    marginBottom: "16px",
  },
  contactRow: {
    display: "flex",
    gap: "24px",
  },
  contactLink: {
    color: "#3182ce",
    fontWeight: 600,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
};
