import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(postsDir);

  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default function Essay({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content", slug + ".md");
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContents);

  return (
    <article className="prose lg:prose-xl mx-auto p-6">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}