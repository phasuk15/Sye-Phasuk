import fs from "fs";
import path from "path";
import GalleryFullClient from "./GalleryFullClient";

export const runtime = "nodejs";

export default function GalleryPage() {
  const artworkDir = path.join(process.cwd(), "public/artwork");

  const files = fs
    .readdirSync(artworkDir)
    .filter((file) =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    );

  const artworks = files.map((file) => ({
    src: `/artwork/${file}`,
    caption: file.replace(/\.[^/.]+$/, ""), 
  }));

  return <GalleryFullClient artworks={artworks} />;
}