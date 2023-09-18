import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import styles from "./TopicPage.module.css";
import { Alert } from "@/components/bootstrap";
import { Metadata } from "next";

//export const revalidate = 0; //To fetch a new set of 10 images
//export const dynamicParams = false; //To prohibit fetches outside of what is fetched in advance (health, fitness, coding). Results in Not Found

//Props to allow dynamic URL
interface PageProps {
    params: { topic: string }, //topic name => URL
    //searchParams: { [key: string], string | string[] | undefined }, //optional search params
}

export function generateMetadata({ params: { topic } }: PageProps): Metadata {
    return {
        title: topic + " - Next-test"
    }
}

//Rendering pages in advance
export function generateStaticParams() {
    return["health", "fitness", "coding"].map(topic => ({ topic }));
}

export default async function Page({ params: { topic } }: PageProps) {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=10&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
    const images: UnsplashImage[] = await response.json();

    return(
        <div>
            <Alert>
                This page uses <strong>generateStaticParams </strong> to render and cache the static pages at build time, even though the URL has a dynamic parameter.
                Pages that are not included in generateStaticParams will be fetched and rendered on first access and then <strong>cached for subsequent requests</strong>.
            </Alert>
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