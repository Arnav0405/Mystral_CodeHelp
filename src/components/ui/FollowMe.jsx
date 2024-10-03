import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

export default function FollowMeButtons() {
  return (
    <>
      <div className="py-5 sm:py-10">
        <div className="rounded-md shadow-sm mx-auto max-w-32 flex-shrink-0 md:max-w-xl text-center">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400  hover:bg-gray-300 focus:z-10"
          >
            <a href="https://github.com/Arnav0405/">
              <span className="sr-only">Github</span>
              <img src={github} alt="Github" className="h-7 w-7" />
            </a>
          </button>
          <button
            type="button"
            className="relative inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400  hover:bg-gray-300 focus:z-10"
          >
            <a href="https://www.linkedin.com/in/arnav-waghdhare-a6888b2aa/">
              <span className="sr-only">LinkedIn</span>
              <img src={linkedin} alt="LinkedIn" className="h-7 w-7" />
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
