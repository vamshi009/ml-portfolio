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
        space-y-4
        hover:border-[var(--border)]
        hover:shadow-[0_0_24px_#00ff41]
        hover:-translate-y-1
        transition-all duration-200
      "
    >
      <h3 className="text-lg font-semibold leading-snug matrix-glow">
        {title}
      </h3>

      <p className="text-sm text-[var(--text-secondary)] leading-relaxed matrix-glow">
        {description}
      </p>

      <span className="text-sm text-[var(--accent)] matrix-glow">
        Read on Medium →
      </span>
    </a>
  );
}
