import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image"; //allows for auto resizing if images are b i g
import Link from "next/link";
import { Alert } from "@/components/bootstrap";

export const metadata = {
    title: 'Dynamic fetching - Next-test'
}

export const revalidate = 0; //revalidate upon refreshing

export default async function Page() {
    //copied from static/page.tsx:
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY, 
    {
        //cache: "no-cache" //option similar to revalidate = 0, but for a specific fetch call. Allows other cached fetch calls on the page.
        //cache: "no-store" //same functionality as no-cache, fetches dynamically every time
        //next: { revalidate: 0 } //another option for individual fetch requests at timed intervals
    }
    );
    const image: UnsplashImage = await response.json(); //Can specify the type of image, imports from Models
    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return(
        <div className="d-flex flex-column align align-items-center">
            <Alert>
                This page <strong>fetches data dynamically. </strong>
                Every time you refresh the page, you get a new image from the Unsplash API. 
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