type MinimalGalleryProps = {
  images: Array<string>,
  showFullGallery: () => void
}

const MinimalGallery = ({images, showFullGallery}: MinimalGalleryProps) => {


  return (
    <>

      <div className="main-container">

        <div
          className="button-show-all-gallery"
          onClick={() => showFullGallery()}
        >
          <span>Galeria completa</span>
        </div>

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

        .button-show-all-gallery {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          background-color: #7e2099;
          width: 250px;
          border-radius: 30px;
          padding: 15px;
        }

        .button-show-all-gallery > span {
          color: white;
          font-weight: bold;
          font-size: calc(12px + 1vmin);
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