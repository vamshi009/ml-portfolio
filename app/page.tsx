import MediumCard from "@/components/MediumCard";
import { mediumPosts } from "@/lib/MediumPosts";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 matrix-glow">
        AI / ML Portfolio
      </h1>

      <p className="mb-6 matrix-glow">
        Practical AI projects with clean explanations.
      </p>

      <a
        href="projects"
        className="px-6 py-3 bg-[rgba(0,16,0,0.6)] text-[#00ff41] border border-[#00ff41] rounded matrix-glow hover:text-[#88ff99] hover:shadow-[0_0_14px_#00ff41] transition"
      >
        View Projects
      </a>

      {/* WRITING */}
      <section className="space-y-10">
        <h2 className="text-2xl font-semibold">
          Writing & Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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

    </main>
  );
}
