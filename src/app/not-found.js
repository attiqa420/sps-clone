import Link from "next/link";

export const metadata = {
  title: 'Page Not Found - SPS Clone',
  description: '404 - The page you are looking for does not exist.',
};


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

