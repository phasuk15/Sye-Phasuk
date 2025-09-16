import Image from "next/image";

const Insta = () => {
    return (  
        <a
            href='https://www.instagram.com/syep_15'
            target="_blank" 
            rel="noopener noreferrer" 
        >
            <Image 
                src="/insta.png"
                alt="instagram"
                width={32}
                height={32}
            />
        </a>
    );
}
 
export default Insta;