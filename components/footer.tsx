import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HeartIcon } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <div className="flex items-center gap-3">
          <p className="text-center">
            Build with ❤️ by {" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="#"
            >
              C5 Team
            </Link>
            . The source code is available on{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="#"
            >
              GitHub
            </Link>
            .
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="#"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Image 
          src="/imgs/c5-logo.png"
          alt="C5 Website Icon"
          width={20}
          height={20}
          className="mr-2"
        />
        C5 Website
      </Link>
      <Link
        href="#"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link>
    </>
  );
}
