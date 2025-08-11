const About = () => {

    return(
      <section className="my-12 sm:my-20 about-section">
        <h2 className="text-xl sm:text-2xl font-bold pb-1 about-title">
          About Me
        </h2>
        <hr className="mb-4 border-zinc-600 about-divider" />
        <p className="text-base sm:text-lg leading-7 sm:leading-8 mt-4 text-pretty text-zinc-400 about-content">
       Currently a student at <strong className="font-medium text-zinc-100 about-highlight">
         Western Governors University
       </strong> pursuing a degree in <strong className="font-medium text-zinc-100 about-highlight">
         Software Engineering
       </strong>. I have a passion for learning and building applications that solve real-world problems. I enjoy working with modern web technologies and am always looking to expand my skill set.
        </p>
    
      </section>
    );
}


export default About;