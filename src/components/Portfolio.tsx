const projects = [
  {
    id: 1,
    name: "Song Request",
    description: "A simple web app that allows users to request songs which can be used by a DJ to download directly to their computer",
    url: "https://github.com/tschartman/song-request",
    language: "React + Electron",
  },
  {
    id: 2,
    name: "Aux Queue",
    description: "An app that allows users to share a singular music queue across multiple music streaming platforms",
    url: "https://github.com/tschartman/aux-queue-front/tree/master",
    language: "Vue (Quesar)",
  },
  {
    id: 2,
    name: "Youtube Translator",
    description: "A simple api server that returns the entire script from a youtube video. Used in conjunction with ChatGPT actions to summerize a youtube video from a URL alone",
    url: "https://github.com/tschartman/youtube-translator/tree/main",
    language: "TypeScript",
  },
];

const StaticPortfolio: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {project.description}
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Language: {project.language}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticPortfolio;