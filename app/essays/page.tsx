import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const EssaysFull = () => {
    const postsDir = path.join(process.cwd(), "content");
    const files = fs.readdirSync(postsDir);

    const posts = files.map((file) => {
        const filePath = path.join(postsDir, file);
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContents);

        return {
        slug: file.replace(".md", ""),
        title: data.title,
        date: data.date,
        description: data.description,
        };
    });

    return (  
        <div className="max-w-2xl mx-auto px-4 flex flex-col items-center pb-24">
            <h1 className="font-jersey font-bold text-5xl pt-24 pb-6">Essays</h1>
            <p className="font-pixelify text-center mb-12">
                Welcome to my collection of essays! Here, because I apparently miss my English A Levels, I write about topics of interest to me. Give them a read! 🌷✨
            </p>

            <ul className="space-y-4">
                {posts.map((post) => (
                <li key={post.slug} className="p-4 border rounded-lg shadow">
                    <Link href={`/essays/${post.slug}`}>
                    <h2 className="text-xl font-semibold hover:underline">{post.title}</h2>
                    </Link>
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <p>{post.description}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}
 
export default EssaysFull;