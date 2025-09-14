// lib/getPosts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export function getPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(postsDir);

  return files.map((file) => {
    const filePath = path.join(postsDir, file);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });
}