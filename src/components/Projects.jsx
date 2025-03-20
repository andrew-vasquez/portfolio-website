const Projects = () => {
  return (
    <section className="my-20 flex">
      <h2 className="text-2xl font-bold ">Projects</h2>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className=" pt-20 ">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Project 1 </h2>
          <p>
            Description of Project 1. Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="card-actions">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
