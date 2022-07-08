import {MigalaMainButton} from "../general/MigalaMainButton";

type MinimalGalleryProps = {
  images: Array<string>,
  showFullGallery: () => void
}

const MinimalGallery = ({images, showFullGallery}: MinimalGalleryProps) => {


  return (
    <>

      <div className="main-container">


        <MigalaMainButton title="Galeria completa" onClick={showFullGallery}/>

        <div className="gallery-wrapper">
          {images.map((item, index) => (
            <div key={`${item}-${index}`} className="gallery-item">
              <img src={item} alt="gallery image"/>
            </div>
          ))
          }

        </div>
      </div>


      <style jsx>{`

        .main-container {
          width: 100%;
          display: flex;
          flex-flow: column;
          align-items: center;
          gap: 20px;
        }

        .gallery-wrapper {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          grid-template-rows: repeat(auto-fill, minmax(220px, 1fr));
          width: 100%;
        }

        .gallery-item {
          align-items: center;
          aspect-ratio: 1 / 1;
          cursor: pointer;
          display: inherit;
          justify-items: center;
          overflow: hidden;
        }

        .gallery-item > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .gallery-item > img:hover {
          transform: scale(1.2) rotate(0deg);
          transition: 2.5s;
        }

      `}</style>
    </>
  )
}

export default MinimalGallery