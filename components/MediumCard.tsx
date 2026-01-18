type MediumCardProps = {
  title: string;
  url: string;
  description: string;
};

export default function MediumCard({
  title,
  url,
  description,
}: MediumCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        bg-[var(--card)]
        border border-[var(--border)]
        rounded-xl
        p-6
        space-y-6
        hover:border-[var(--border)]
        hover:shadow-[0_0_24px_#00ff41]
        hover:-translate-y-1
        transition-all duration-200
      "
    >
      <h3 className="text-xl font-semibold leading-snug mb-4" style={{ color: '#ff9900' }}>
        {title}
      </h3>

      <p className="text-base text-[var(--text-secondary)] leading-relaxed matrix-glow mb-2">
        {description}
      </p>

      <span className="text-sm text-[var(--accent)] matrix-glow">
        Read on Medium →
      </span>
    </a>
  );
}
