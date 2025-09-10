
import EssayCard from "../components/EssayCard";
import Button from "../components/Button";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Essays = () => {
    const selectedFiles = ["poor-things.md", "ai-sustainability.md"];

    const posts = selectedFiles.map((file) => {
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
        <div className="min-h-screen max-w-2xl mx-auto px-4 flex flex-col items-center ">
            <h1 className="font-jersey font-bold text-5xl py-12">Essays</h1>
            <p className="font-pixelify text-center leading-relaxed pb-12">Little windows into my thoughts — essays on things I find fascinating or worth pondering 💭🌸</p>
            <div className="flex flex-col items-center gap-5">
                {posts.map((post) => (
                    <EssayCard
                    key={post.slug}
                    date={post.date}
                    title={post.title}
                    description={post.description}
                    />
                ))}
                <a href="/essays">
                    <Button text="See more essays" />
                </a>
            </div>
        </div>
    );
}
 
export default Essays;