import Link from "next/link";
import { FooterTitle } from "../SVGs/FooterTitle";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

export default function Footer() {
  const links = [
    {
      id: 1,
      href: "/about",
      label: "About",
    },
    // {
    //   id: 2,
    //   href: "https://forms.gle/PftXkai3sNZquWu68",
    //   label: "Add a tweet",
    // },
    // {
    //   id: 3,
    //   href: "https://forms.gle/s84TNQcUX1P22bTE7",
    //   label: "Submit feedback",
    // },
    // {
    //   id: 4,
    //   href: "https://ko-fi.com/supporthuyng",
    //   label: "Support this project",
    // },
    // {
    //   id: 5,
    //   href: "https://github.com/huyngxyz/Pillarstack",
    //   label: "Contribute on Github",
    // },
    {
      id: 6,
      href: "/legal",
      label: "Legal",
    },
  ];

  return (
    <footer className="mt-32 mb-16 sm:mb-0">
      <div className="border-b border-b-dim-gray pb-6">
        <span className="sr-only">PILLARSTACK</span>
        <FooterTitle />
      </div>
      <div className="flex flex-col gap-y-12 gap-x-2 md:flex-row items-start justify-between pt-6 pb-10 text-text">
        <div className="gap-y-4 b-8 flex flex-col text-base xl:text-h6 2xl:text-h5">
          <div className="flex w-64 gap-x-1 xl:w-[500px] ">
            <span className="w-fit flex-nowrap whitespace-nowrap">
              Made & Curated by{" "}
            </span>
            <Link
              className="font-bold relative overflow-y-hidden w-full group h-fit"
              target="_blank"
              href="https://github.com/auspy"
            >
              <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                Auspy
              </span>
              <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline flex-nowrap whitespace-nowrap">
                Kshetez Vinayak :)
              </span>
            </Link>
          </div>
          <div className="flex w-56 gap-x-1 xl:w-96 ">
            <span className="w-fit flex-nowrap whitespace-nowrap">
              Base repo used{" "}
            </span>
            <Link
              className="font-bold relative overflow-y-hidden w-full group h-fit"
              target="_blank"
              href="https://github.com/by-huy/Pillarstack"
            >
              <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                Pillarstack
              </span>
              <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline flex-nowrap whitespace-nowrap">
                by HuyNG :)
              </span>
            </Link>
          </div>
        </div>
        <ul className=" grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid xl:grid-cols-2 gap-x-8 gap-y-3">
          {links.map((link) => (
            <li
              key={link.id}
              className="flex w-fit group text-base xl:text-h7 2xl:text-h6"
            >
              {link.id === 2 || link.id === 4 ? (
                <Link
                  className="group"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </Link>
              ) : (
                <Link className="group" href={link.href}>
                  {link.label}
                </Link>
              )}
              <span className="relative overflow-hidden h-fit w-fit">
                <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
