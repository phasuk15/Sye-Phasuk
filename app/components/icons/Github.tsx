import Image from "next/image";

const Github = () => {
    return (  
        <a
            href='https://github.com/phasuk15'
            target="_blank" 
            rel="noopener noreferrer" 
        >
            <Image 
                src="/github.png"
                alt="github"
                width={32}
                height={32}
            />
        </a>
    );
}
 
export default Github;