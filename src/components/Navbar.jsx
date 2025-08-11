import GithubLogo from "../assets/icons/github.svg"
import LinkedinLogo from "../assets/icons/linkedin.svg"
import Signature from "../assets/signature-white.png"

const Header = () =>{

  return (
    <nav className="w-full flex justify-between items-center navbar-container">
      <img 
        className="w-32 sm:w-52 pr-2 sm:pr-5 navbar-logo" 
        src={Signature} 
        alt="Cursive writing with initials A & V"
      />

    
      <div className="flex gap-1 sm:gap-2 items-center">
        <a target="_blank" href="mailto:andrewvasquez314@gmail.com"></a>
        <a
          className="w-10 sm:w-12 hover:bg-zinc-900 hover:border-zinc-500 p-1.5 sm:p-2 rounded-md border border-transparent transition-all duration-200 navbar-icon"
          target="_blank"
          href="https://github.com/andrew-vasquez"
        >
        <img src={GithubLogo} alt="Github Logo" />
        </a>
        <a
        className="w-10 sm:w-12 hover:bg-zinc-900 hover:border-zinc-500 p-1.5 sm:p-2 rounded-md border border-transparent transition-all duration-200 navbar-icon"
          target="_blank"
          href="https://www.linkedin.com/in/andrew-vasquez-000434237/"
        >
          <img src={LinkedinLogo} alt="White Linkedin Logo" />
        </a>
      </div>
    </nav>
  );
}

export default Header;
