//TODO: Replace by props property
const dummyListOfFiles = [
  {
    "name": "Doc1.pdf",
    "url": "https://www.google.com.mx",
  },
  {
    "name": "Doc2.pdf",
    "url": "https://www.google.com.mx",
  },
  {
    "name": "Doc3.pdf",
    "url": "https://www.google.com.mx",
  },
  {
    "name": "Doc4.pdf",
    "url": "https://www.google.com.mx",
  }
]

const FilesPage = () => {

  //Todo> Replace for correct implementation
  const openDocument = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <>
      <section className="files-wrapper">

        <span className="migala-section-title">Archivos</span>

        <div className="files-grid-wrapper">
          {dummyListOfFiles.map((item, index) => (
            <div key={`${item.name}-${index}`} className="file-item-container" onClick={() => openDocument(item.url)}>
              {/*Todo> Replace for correct icon*/}
              <span>.....</span>
              <span>
                {item.name}
              </span>
            </div>
          ))
          }
        </div>

      </section>


      <style jsx>{`

        .files-wrapper {
          display: flex;
          flex-flow: column;
          align-items: center;
          margin-top: 100px;
          padding: 20px;
        }

        .files-grid-wrapper {
          display: grid;
          grid-gap: 20px;
          grid-template-columns: 1fr 1fr 1fr;
          width: 100%;
        }

        .file-item-container {
          display: flex;
          cursor: pointer;
          flex-flow: column wrap;
          gap: 25px;
          justify-content: center;
          align-items: center;
          height: 250px;
          border: lightgray solid 1px;
          border-radius: 15px;
        }

      `}
      </style>
    </>
  )
}

export default FilesPage