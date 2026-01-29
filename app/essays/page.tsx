import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import EssayCard from "../components/EssayCard";

const EssaysFull = () => {
    const postsDir = path.join(process.cwd(), "content");
    const files = fs
        .readdirSync(postsDir)
        .filter((file) => file.endsWith(".md"));

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
                Welcome to my collection of essays! Here, because I apparently miss my English A Levels, I write about topics of interest to me. These also include some research papers I have written for uni. Give them a read! 🌷✨
            </p>

            <ul className="space-y-6">
                {/* PDF essays */}
                <li className="group relative font-pixelify">
                    <Link href="/file/Urban_Digital_Twins.pdf" target="_blank">
                        <EssayCard
                            date="04/12/25"
                            title="Urban Digital Twins"
                            description="An analysis into urban digital twins and how they can be used in for flood risk management in Thailand."
                            fileLabel="essay.pdf"
                        />
                    </Link>
                </li>

                <li className="group relative font-pixelify">
                    <Link href="/file/Spatial_Analysis_of_Road_Infrastructure.pdf" target="_blank">
                        <EssayCard
                            date="22/01/26"
                            title="Spatial Analysis of Road Infrastructure"
                            description="An analysis on the datasets Thailand Road Accidents and the road types that map the streets of Thailand, exploring the relationship between the two."
                            fileLabel="essay.pdf"
                        />
                    </Link>
                </li>

                {/* Markdown essays */}
                {posts.map((post) => (
                    <li key={post.slug} className="group relative font-pixelify">
                    <Link href={`/essays/${post.slug}`}>
                        <EssayCard
                        date={post.date}
                        title={post.title}
                        description={post.description}
                        fileLabel="essay.txt"
                        />
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default EssaysFull;