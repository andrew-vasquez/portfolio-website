import Icons from "./Icons.jsx"
import htmlLogo from "../assets/icons/html.svg"
import cssLogo from "../assets/icons/css.svg"
import jsLogo from "../assets/icons/javascript.svg"
import reactLogo from "../assets/icons/react.svg"
import tailwindLogo from "../assets/icons/tailwind.svg"
import github from "../assets/icons/github.svg"
import git from "../assets/icons/git.svg"  
import vscode from "../assets/icons/vscode.svg"
import node from "../assets/icons/nodejs.svg"
import python from "../assets/icons/python.svg"
import typescript from "../assets/icons/typescript.svg"
const Skills = () => {
  return (
    <>
      <section className="my-20">
    <h2 className="text-2xl font-semibold mb-1">Skills</h2>
    <hr className="mb-4 border-zinc-600" />

       <h3 className="text-xl font-medium pt-3 pb-5">Front-End</h3>
            <div className="flex flex-wrap gap-5">
               <Icons name="HTML" image={htmlLogo} />
               <Icons name="CSS" image={cssLogo} />
                <Icons name="JavaScript" image={jsLogo} />
                <Icons name="React" image={reactLogo} />
                <Icons name="TypeScript" image={typescript} />
                <Icons name="Tailwind" image={tailwindLogo} />
            </div>
         <h3 className="text-xl font-medium pt-3 pb-5">Back-End</h3>
         <div className="flex flex-wrap gap-5">
          <Icons name="Node.js" image={node} />
          <Icons name="Python" image={python} />
         </div>
        <h3 className="text-xl font-medium mt-6 mb-4">Tools</h3>
            <div className="flex flex-wrap gap-5">
            <Icons name="Git" image={git} />
            <Icons name="Github" image={github} />
            <Icons name="VSCode" image={vscode} />
            </div>
      </section>
    </>
  );
};

export default Skills;
