//copied from dynamic/page.tsx

import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image"; //allows for auto resizing if images are b i g
import Link from "next/link";
import { Alert } from "@/components/bootstrap";

export const metadata = {
    title: 'Incremental Static Regeneration - Next-test'
}

export const revalidate = 15; //interval (in seconds) applied to the whole page

export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY, 
    {
        //next: { revalidate: 15 } //option for 15s timed intervals applied to this specific fetch call
    }
    );
    const image: UnsplashImage = await response.json(); //Can specify the type of image, imports from Models
    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return(
        <div className="d-flex flex-column align align-items-center">
            <Alert>
                This page uses <strong>incremental static regeneration</strong>.
                A new image is fetched every 15 seconds (after refreshing the page) and then served from the cache for that duration. 
            </Alert>

            <Image
                src={image.urls.raw}
                width={width}
                height={height}
                alt={image.description}
                className="rounded shadow mw-100 h-100"
            />
            by <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
        </div>
    );
}