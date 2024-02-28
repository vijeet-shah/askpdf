import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { TypewriterEffect } from "../ui/typewriter-effect";

export default function StartingSection() {
  return (
    <>
      <MaxWidthWrapper className="mb-[1px] mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            AskPDF is now public!
          </p>
        </div>

        <TypewriterEffect
          words={[
            { text: `Chat  ` },
            { text: "with" },
            { text: "your" },
            { text: "documents", className: "text-rose-600" },
            { text: "in" },
            { text: "seconds." },
          ]}
          className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl"
          cursorClassName="my-cursor"
        />

        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          AskPDF. allows you to have conversations with any PDF document. Simply
          upload your file and start asking questions right away.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboard"
          target="_blank"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
    </>
  );
}