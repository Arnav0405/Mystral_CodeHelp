import { ChevronRightIcon } from "@heroicons/react/20/solid";
import logoReact from "../../assets/logoReact.svg";

export default function MainPage({ children }) {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 md:pl-20 md:pr-10">
      {/* Below is the code related to changes to background of the page*/}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      {/* Below is the code related to changes to face of the page*/}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-5 sm:pb-32 md:flex md:px-8 md:py-28 ">
        <div className="mx-auto max-w-2xl flex-shrink-0 md:max-w-xl md:pt-8 align-middle">
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Code with Mystral
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Mystral AI, a cutting-edge language model, offers a powerful tool
            for both students and professionals seeking to explore and leverage
            its capabilities. This AI code helper is designed to assist users in
            effectively interacting with Mystral AI, providing guidance and
            support throughout their coding journey. Whether you're a novice
            programmer looking to learn the basics or an experienced developer
            aiming to streamline your workflow, Mystral AI's code helper can be
            a valuable asset. With its user-friendly interface and comprehensive
            features, it empowers individuals to harness the potential of AI to
            solve complex problems and achieve their goals.
          </p>
          <h4 className="mt-8 text-xl font-semibold tracking-tight leading-8 text-gray-300">
            Yes I used AI to generate this text.
          </h4>
        </div>
      </div>
      {children}
    </div>
  );
}
