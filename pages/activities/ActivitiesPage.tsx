import {MigalaMainButton} from "../../components/general/MigalaMainButton";

const ActivitiesPage = () => {


  const showAlert = () => {
    alert("Aqui deberiamos navegar")
  }

  return <>
    <section className="activities-wrapper">

      <span className="migala-section-title">Actividades</span>


      <div className="activities-calendar-detail">

        <div className="calendar-section">
          {/*TODO: Replace for correct calendar*/}
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23f1cafb&ctz=America%2FMexico_City&showPrint=0&showTabs=0&showCalendars=0&title=Calendario%20prueba%20Jalisco&src=aW5mb2RldnNwcm95ZWN0b21pZ2FsYUBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZXMtNDE5Lm1leGljYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23f1cafb&color=%23f1cafb&color=%230B8043"
            frameBorder="0" scrolling="no"></iframe>

        </div>

        <div className="activity-detail-section">

          <div className="next-event-header">
            {/*TODO: Replace*/}
            <span className="migala-section-subtitle">Nombre del siguiente evento</span>
            <span className="migala-section-subtitle">Fecha DD/MM/YYYY</span>
          </div>

          <div className="next-event-description">
            {/*TODO: Replace*/}
            <span className="migala-regular-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, est a faucibus pellentesque, ligula mauris
              viverra ex, at mattis justo lectus quis ligula. Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus
              mus. Maecenas semper lectus sed efficitur tempus. Quisque urna orci, interdum in sagittis at,
              dapibus quis metus. Vestibulum neque turpis, consectetur non pellentesque a, efficitur vel sem. Duis faucibus
              rhoncus mi, eu laoreet ligula lobortis eu.
              In ipsum velit, accumsan eget convallis a, ultrices vitae tellus. Donec laoreet a justo at egestas.
              Vivamus auctor id dui a malesuada.
            </span>
          </div>


          <div className="button-container">
            <MigalaMainButton title="Todas las actividades" onClick={showAlert}/>
          </div>

        </div>

      </div>

    </section>


    <style jsx>{`

      .activities-wrapper {
        display: flex;
        flex-flow: column;
        align-items: center;
        margin-top: 100px;
        padding: 20px;
      }

      .activities-calendar-detail {
        display: flex;
        flex-flow: row wrap;
        flex: 1;
        gap: 50px;
        padding: 20px 40px;
        width: 100%;
        height: 500px;
      }

      .calendar-section {
        flex: 1 45%;
      }

      .calendar-section > iframe {
        border: solid 1px #777;
        width: 100%;
        height: 500px;
      }

      .activity-detail-section {
        flex: 1 45%;
      }

      .next-event-header {
        display: flex;
        flex-flow: column;
        padding: 30px 0;
      }

      .button-container {
        display: flex;
        justify-content: center;
        padding: 50px 0;
      }

    `}</style>
  </>
}

export default ActivitiesPage