import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface RecommendType {
    id: number;
    name: string;
    comment: string;
}

const Recommend = () => {
    const [recommendList, setRecommendList] = useState<RecommendType[]>([]);
    const [newTitle, setNewTitle] = useState("");
    const [newComment, setNewComment] = useState("");
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const fetchRecommendations = async () => {
        const { data, error } = await supabase
            .schema("SyePhasuk")
            .from("Recommend")
            .select("*");

        if (error) {
            console.error("Error fetching recommendations:", error);
        } else {
            setRecommendList(data || []);
        }
        setLoading(false);
        };

        fetchRecommendations();
    }, []);

    const addRecommendation = async () => {
        if (!newTitle.trim()) return;
        setSubmitting(true);

        const { data, error } = await supabase
        .schema("SyePhasuk")
        .from("Recommend")
        .insert([{ name: newTitle, comment: newComment }])
        .select();

        if (error) {
        console.error("Error inserting recommendation:", error);
        } else {
        setRecommendList((prev) => [...prev, ...(data || [])]);
        setNewTitle("");
        setNewComment("");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        }
        setSubmitting(false);
    };

    return (
        <div className="w-full font-pixelify bg-light-pink border-4 border-rosewood shadow-[6px_6px_0px_#412722] transition-all hover:shadow-[8px_8px_0px_#412722]">

        {/* Titlebar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-rosewood">
            <span className="text-light-pink text-[9px] tracking-widest opacity-70">
            tbr-tbw.exe
            </span>
            <div className="flex gap-1.5">
            <span className="w-3 h-3 bg-light-pink border border-white/20"></span>
            <span className="w-3 h-3 bg-raspberry border border-white/20"></span>
            <span className="w-3 h-3 bg-mauve-brown border border-white/20"></span>
            </div>
        </div>

        <div className="p-5 flex flex-col gap-5">

            {/* Two column layout: list + form */}
            <div className="flex flex-col md:flex-row gap-5">

            {/* ── Left: recommendations list ── */}
            <div className="flex-1 flex flex-col gap-3 min-w-0">
                <p className="text-raspberry 6tracking-widest flex items-center gap-2">
                ✦ to be read / watched
                <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
                </p>

                {loading ? (
                <p className="text-[9px] text-mauve-brown tracking-widest animate-pulse text-center py-4">
                    ✦ loading... ✦
                </p>
                ) : recommendList.length === 0 ? (
                <div className="bg-[#fdf0f4] border-2 border-mauve-brown p-4 relative overflow-hidden">
                    <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
                    style={{
                        background:
                        "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)",
                    }}
                    />
                    <p className="text-[9px] text-mauve-brown text-center tracking-widest">
                    ✦ nothing yet — add something! ✦
                    </p>
                </div>
                ) : (
                <div className="flex flex-col gap-2">
                    {recommendList.map((rec) => (
                    <div
                        key={rec.id}
                        className="bg-[#fdf0f4] border-2 border-mauve-brown p-3 relative overflow-hidden"
                    >
                        <div
                        className="absolute top-0 left-0 right-0 h-0.5 opacity-30"
                        style={{
                            background:
                            "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)",
                        }}
                        />
                        <p className="text-[12px] text-[#5a3a45] font-bold flex gap-1.5 items-start">
                        <span className="text-raspberry mt-px">✦</span>
                        {rec.name}
                        </p>
                        {rec.comment && (
                        <p className="text-[11px] text-mauve-brown mt-1.5 leading-relaxed pl-4">
                            {rec.comment}
                        </p>
                        )}
                    </div>
                    ))}
                </div>
                )}
            </div>

            {/* Divider */}
            <div
                className="hidden md:block w-px self-stretch flex-shrink-0"
                style={{
                background:
                    "repeating-linear-gradient(180deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)",
                opacity: 0.3,
                }}
            />
            <div
                className="md:hidden h-px"
                style={{
                background:
                    "repeating-linear-gradient(90deg, #8b5c6e 0px, #8b5c6e 4px, transparent 4px, transparent 8px)",
                opacity: 0.3,
                }}
            />

            {/* ── Right: submission form ── */}
            <div className="md:w-64 flex-shrink-0 flex flex-col gap-3">

                <p className="text-raspberry tracking-widest flex items-center gap-2">
                ✦ suggest something
                <span className="flex-1 h-px bg-mauve-brown opacity-30"></span>
                </p>

                <div
                className="bg-[#fce8f0] border-2 border-raspberry shadow-[3px_3px_0px_#c0396b] p-4 relative flex flex-col gap-3"
                >
                {/* Corner accents */}
                <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-raspberry"></span>
                <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-raspberry"></span>
                <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-raspberry"></span>
                <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-raspberry"></span>

                <p className="text-[11px] text-[#5a3a45] leading-relaxed">
                    got a book or show i should check out? drop it here ✦
                </p>

                {/* Title input */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-mauve-brown tracking-widest">
                    title
                    </label>
                    <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addRecommendation()}
                    placeholder="name of book / show..."
                    className="w-full border-2 border-mauve-brown bg-[#fdf0f4] px-3 py-2
                                text-[9px] text-[#5a3a45] tracking-wide
                                placeholder:text-mauve-brown/50
                                focus:outline-none focus:border-raspberry
                                transition-colors"
                    />
                </div>

                {/* Comment input */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-mauve-brown tracking-widest">
                    why should i? (optional)
                    </label>
                    <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="sell it to me..."
                    rows={3}
                    className="w-full border-2 border-mauve-brown bg-[#fdf0f4] px-3 py-2
                                text-[9px] text-[#5a3a45] tracking-wide leading-relaxed
                                placeholder:text-mauve-brown/50
                                focus:outline-none focus:border-raspberry
                                transition-colors resize-none"
                    />
                </div>

                {/* Submit button */}
                <button
                    onClick={addRecommendation}
                    disabled={submitting || !newTitle.trim()}
                    className="w-full py-2.5 bg-rosewood text-light-pink text-[11px] tracking-widest
                            border-2 border-rosewood shadow-[2px_2px_0px_#412722]
                            hover:bg-raspberry hover:border-raspberry
                            active:translate-y-px active:shadow-none
                            disabled:opacity-40 disabled:cursor-not-allowed
                            transition-all focus:outline-none"
                >
                    {submitting ? "adding..." : "✦ add"}
                </button>

                {/* Success flash */}
                {submitted && (
                    <p className="text-[8px] text-raspberry text-center tracking-widest animate-pulse">
                    ✦ thanks for the rec! ✦
                    </p>
                )}
                </div>
            </div>

            </div>
        </div>
        </div>
    );
};

export default Recommend;