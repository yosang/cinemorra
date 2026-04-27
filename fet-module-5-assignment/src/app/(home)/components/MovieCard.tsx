import Image from "next/image";

type Props = {
    image: string,
    overlayText: string
};

// http://images.restapi.co.za/posters/inception.png

export default function MovieCard({ image, overlayText }:Props) {
    return(
        <>
        <div style={{ position: "relative", width: "200px", height: "300px" }}>
            <Image 
                src={image}
                fill
                alt="Movie card image"
                style={{ objectFit: "cover"}}
            />
            <div>
                <p>{overlayText}</p>
            </div>
        </div>
        </>
    )
}