import EssayCard from "../components/EssayCard";
import Button from "../components/Button";
// import { getPosts } from "@/lib/getPosts";

export default function Essays() {
  // const posts = getPosts();

  return (
    <div className="min-h-screen max-w-2xl mx-auto px-4 flex flex-col items-center">
      <h1 className="font-jersey font-bold text-5xl py-12">Essays</h1>
      <p className="font-pixelify text-center leading-relaxed pb-12">
        Little windows into my thoughts — essays on things I find fascinating or worth pondering 💭🌸
      </p>
      <div className="flex flex-col items-center gap-5">
        <a href="/essays">
          <Button text="See more essays" />
        </a>
      </div>
    </div>
  );
}