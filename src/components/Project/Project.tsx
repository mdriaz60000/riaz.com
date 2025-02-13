import Link from "next/link";

const Project = () => {
  return (
    <div className="w-[90%] mx-auto sm:py-5 md:py-10 lg:py-20">
      <p className="text-xl font-semibold text-center mb-4 md:mb-8">My Project</p>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { src: "/jarinweb.mp4", link: "https://jerins-perlour-d3369.web.app/" },
          { src: "/MASUM PORTFOLIO.mp4", link: "https://jerins-perlour-d3369.web.app/" },
          { src: "/SUNGLASS.mp4", link: "https://jerins-perlour-d3369.web.app/" },
        ].map((project, index) => (
          <section key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <video className="w-full h-auto rounded-md" controls>
              <source src={project.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <p className="text-blue-500 underline mt-2 text-center">Visit Project</p>
            </Link>
          </section>
        ))}
      </section>
      <div className=" text-center mt-4">
      <Link href="/blogs">
            <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              See More
            </button>
          </Link>
      </div>
    </div>
  );
};

export default Project;
