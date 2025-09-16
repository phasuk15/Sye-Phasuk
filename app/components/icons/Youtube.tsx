import Image from "next/image";

const Youtube = () => {
    return ( 
        <a
            href='https://www.youtube.com/@dianas15'
            target="_blank" 
            rel="noopener noreferrer" 
        >
            <Image 
                src="/youtube.png"
                alt="youtube"
                width={32}
                height={32}
            />
        </a>
    );
}
 
export default Youtube;