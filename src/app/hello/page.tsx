export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 750));
    // throw Error("Oops");
    return <div>Hello, Next-Test</div>
}