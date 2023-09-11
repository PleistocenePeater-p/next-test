import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image"; //allows for auto resizing if images are b i g
import Link from "next/link";

export const metadata = {
    title: 'Static fetching - Next-test'
  }

export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY); //safe; server component only runs on server
    const image: UnsplashImage = await response.json(); //Can specify the type of image, imports from Models

    //dynamically resizing image
    const width = Math.min(500, image.width);
    //if width is 400, return 400; if 1750, return 500
    const height = (width / image.width) * image.height;
    //new height to match aspect ratio

    return(
        <div className="d-flex flex-column align align-items-center">
            <Image
                src={image.urls.raw}
                width={width}
                height={height}
                alt={image.description}
                className="rounded shadow mw-100 h-100"
            />
            by <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
        </div>
    )
}