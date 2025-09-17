import Link from "next/link";

export default function notFound(){
    return(
        <>
        <div className="flex h-screen flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-bold text-blue-950">
                404
            </h1>
            <p className="m-4 text-xl text-blue-950">!Page not found</p>
            <Link href='/' className="bg-blue-950 text-white text-lg p-4 rounded-full">
            Go Back Home
            </Link>

        </div>
        
        </>
    )
}

