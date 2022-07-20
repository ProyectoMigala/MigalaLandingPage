const ProjectsPage = () => {
  const projects = [];
  projects = [{id: 1, name: 'proyecto 1', description: '11 descripcion lorem ipsum dolere apsum', img: 'Imagen'},
              {id: 2, name: 'proyecto 2', description: '22 descripcion lorem ipsum dolere apsum', img: 'Imagen'},
              {id: 3, name: 'proyecto 3', description: '33 descripcion lorem ipsum dolere apsum', img: 'Imagen'},
              {id: 4, name: 'proyecto 4', description: '44 descripcion lorem ipsum dolere apsum', img: 'Imagen'}]
  return (
    <div className="row m-sm-3 m-xl-5">
      <h3 className="d-flex justify-content-center">Proyectos</h3>
      <div className="d-flex flex-wrap">
        {projects.map((project) => (
          <div className="col m-2">
            <div className="card card-size my-2">
              <img className="card-img-top image-size" src={project.img} alt="No hay imágen"></img>
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">PRojecto {project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
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
    </div>
  )
}

export default ProjectsPage