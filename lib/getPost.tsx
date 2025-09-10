import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPosts() {
  const postsDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(postsDir);

  return files.map((file) => {
    const filePath = path.join(postsDir, file);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    return {
      slug: file.replace(".md", ""),
      ...data,
    };
  });
}