import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Image 
        src="/imgs/c5-docs-logo.png"
        alt="GitHub Icon"
        width={100}
        height={100}
        className="m-10"
      />
      <Link
        href="#"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
        C5&lsquo;s Docs
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        Official Documentation Site for C5. Guide for Staff Regarding 
        Anything Related to the Club and Centennial College Guidelines.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href="/docs/getting-started/introduction"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          Get Started
        </Link>
      </div>
      <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
        <TerminalIcon className="w-4 h-4 mr-1" /> ~ 
      </span>
    </div>
  );
}
