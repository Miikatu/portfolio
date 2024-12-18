import Link from "next/link";
import LinkContainer from "../contacts/linkContainer";
import type { Footer, Theme } from "@/types";

export default function Footer(props: { footer: Footer; theme: Theme }) {
  const footer = props.footer;
  const theme = props.theme;

  return (
    <footer className="mb-0">
      <div
        id="social"
        className="flex flex-wrap mb-0 justify-center md:gap-2  "
      >
        <LinkContainer {...footer} />
      </div>
      <div className="rotate-180">
        <svg
          className="fill-blue-800"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </footer>
  );
}
