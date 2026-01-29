import Button from "../components/Button";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import EssayCard from "../components/EssayCard";

// import { getPosts } from "@/lib/getPosts";

export default function Essays() {
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
    <div className="min-h-screen max-w-2xl mx-auto px-4 flex flex-col items-center">
      <h1 className="font-jersey font-bold text-5xl py-12">Essays</h1>
      <p className="font-pixelify text-center leading-relaxed pb-12">
        Little windows into my thoughts — essays on things I find fascinating or worth pondering 💭🌸
      </p>
      <div className="flex flex-col items-center gap-5">
        <ul className="space-y-6">
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
        </ul>
        <Link href="/essays" className="mt-10">
          <Button text="See more essays" />
        </Link>
      </div>
    </div>
  );
}