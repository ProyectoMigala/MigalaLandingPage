import * as Icon from 'react-bootstrap-icons';
//estoy importando los iconos de bootstrap, al mismo tiempo, sabiendo que  las barras son reutilizables, manejo el componente NavBar con propiedades, le estoy pasando un array con las etiquetas... simple.

const Start = () => {
  return (
    <>
      <section className="m-sm-3 m-xl-5 row">
        <div className="col-sm-12 col-lg-5 mx-auto">
          <h1 className="display-5 fw-bolder">
            Bienvenidx a Proyecto Migala Jalisco
          </h1>
          <p className="h6 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="row align-items-end">
            <button className="col-lg-6 rounded-pill mt-5 mb-3 btn btn-secondary ">
              <p className="h4">Comenzar a participar</p>
            </button>
            <p>
              <a>¿Buscas otro estado o grupo?. Haz click aqui</a>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 ">
          <div className="video-responsive m-3">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ipO3TNL8Pso"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="mt-5 pt-5">
        <div className="w-75 mx-auto">
          <div className="d-flex justify-content-between align-items-center">
            <h6>Nuestras Redes Sociales</h6>
            <div className=" w-50 d-flex justify-content-between">
              <Icon.Facebook  size={56}/>
              <Icon.Instagram size={56}/>
              <Icon.Twitter size={56}/>
              <Icon.Youtube size={56}/>
              <Icon.Tiktok size={56}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Start;
