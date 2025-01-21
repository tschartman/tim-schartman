import { FaGithub, FaLinkedin, FaCodepen, FaInstagram } from 'react-icons/fa';

const SocialLinks: React.FC = () => {
  return (
    <div className="my-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/tschartman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/timschartman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://codepen.io/tschartman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <FaCodepen size={32} />
          </a>
          <a
            href="https://www.instagram.com/timschartman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
          >
            <FaInstagram size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;