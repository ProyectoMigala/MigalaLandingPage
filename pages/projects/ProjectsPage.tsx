const ProjectsPage = () => {
  const projects = [{id: 1, name: 'proyecto 1', description: '11 descripcion lorem ipsum dolere apsum', img: 'favicon.ico'},
              {id: 2, name: 'proyecto 2', description: '22 descripcion lorem ipsum dolere apsum', img: 'favicon.ico'},
              {id: 3, name: 'proyecto 3', description: '33 descripcion lorem ipsum dolere apsum', img: 'favicon.ico'},
              {id: 4, name: 'proyecto 4', description: '44 descripcion lorem ipsum dolere apsum', img: 'favicon.ico'}]
  return (
    <>
      <section className="projects">
        <div className="row m-sm-3 m-xl-5">
          <h3 className="d-flex justify-content-center migala-section-title">Proyectos</h3>
          <div className="d-flex flex-wrap">
            {projects.map((project) => (
              <div className="col m-2">
                <div className="card card-size my-2">
                  <div className="card-img-top d-flex justify-content-center">
                    <img className="image-size" src={project.img} alt="No hay imágen"></img>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">PRojecto {project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .image-size {
          width: 5rem;
          height: 5rem;
        }

        .card-size {
          width: 15rem;
          height: 15rem;
        }
      `}</style>
    </>
  )
}

export default ProjectsPage