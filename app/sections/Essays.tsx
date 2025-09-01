import EssayCard from "../components/EssayCard";

const Essays = () => {
    return (  
        <div className="h-screen max-w-2xl mx-auto px-4 flex flex-col items-center">
            <h1 className="font-jersey font-bold text-5xl py-12">Essays</h1>
            <p className="font-pixelify text-center leading-relaxed pb-7">Little windows into my thoughts — essays on things I find fascinating or worth pondering 💭🌸</p>
            <EssayCard
                date="22 August 2024"
                title="The State of Student Accommodation in the UK"
                description="How the UK's student accommodation system scams students and treats them unfairly, and how we can help to improve it."
            />

            <EssayCard
                date="14 June 2024"
                title="Database Persistence and CLI Integration | Blockchain in Go: Part 3"
                description="Learn how to persist blockchain data in a database using BoltDB, plus build a command-line interface to interact with it."
            />

            <EssayCard
                date="02 June 2024"
                title="Proof of Work | Blockchain in Go: Part 2"
                description="Explore Proof-of-Work, a fundamental blockchain concept, and implement it in a Go prototype."
            />
        </div>
    );
}
 
export default Essays;