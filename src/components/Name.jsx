const Name = () => {
  const name = "Andrew Vasquez";
  const title = "Full-Stack Developer";

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12 sm:mt-20 mb-12 sm:mb-16 name-container">
        <h2 className="text-2xl sm:text-4xl font-bold block text-center name-title">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className={`name-letter ${letter === " " ? "inline-block w-2" : "inline-block"}`}
              style={{ "--letter-index": index }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h2>
        <p className="text-lg sm:text-2xl text-center text-zinc-400 name-subtitle">
          {title}
        </p>
      </div>
    </>
  );
}

export default Name;