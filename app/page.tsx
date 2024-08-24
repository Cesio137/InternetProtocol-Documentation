import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { GrDocumentText } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";

export default function HomePage() {
    return (
        <main className="flex h-screen flex-col justify-center text-center">
            <h1 className="text-2xl font-bold">Internet Protocol</h1>
            <span className="text-fd-muted-foreground py-4">
                Use Asio non-boost has never been easier
            </span>
            <div className="flex justify-center gap-8">
                <Link
                    className="bg-white px-3 py-1 rounded-full text-center text-black flex gap-1"
                    href="https://github.com/Cesio137/InternetProtocol"
                    target="_blank"
                >
                    Star on github
                </Link>
                <Link
                    className="bg-neutral-700 px-3 py-1 rounded-full text-center flex gap-1"
                    href="/docs"
                >
                    Read the docs
                </Link>
                <Link
                    className="bg-blue-700 px-3 py-1 rounded-full text-center flex gap-1"
                    href="https://www.linkedin.com/in/nathan-miguel-488b462b1/"
                    target="_blank"
                >
                    Linkedin
                </Link>
            </div>
        </main>
    );
}
