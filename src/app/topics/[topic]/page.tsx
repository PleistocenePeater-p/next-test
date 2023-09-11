import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import styles from "./TopicPage.module.css";

//Props to allow dynamic URL
interface PageProps {
    params: { topic: string }, //topic name => URL
    //searchParams: { [key: string], string | string[] | undefined }, //optional search params
}

export default async function Page({ params: { topic } }: PageProps) {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=10&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
    const images: UnsplashImage[] = await response.json();

    return(
        <div>
            <h1>{topic}</h1>
            {
                images.map(image => (
                    <Image
                    src={image.urls.raw}
                    height={250}
                    width={250}
                    alt={image.description}
                    key={image.urls.raw}
                    className={styles.image}
                    />
                ))
            }
        </div>
    );
}