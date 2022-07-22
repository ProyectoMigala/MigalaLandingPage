import TabsSection, { TabItem } from "../../components/about_us/TabsSection";
import AboutUsDescription from "../../components/about_us/AboutUsDescription";
import OrganizationChart from "../../components/about_us/OrganizationChart";
import MinimalGallery from "../../components/about_us/MinimalGallery";
import { useState } from "react";
import getGoogleSheetData from "../../services/google_sheet"
import getGoogleDriveData from "../../services/google_drive"

let tabsDefault: Array<TabItem> = [
  { title: "Quienes somos", keyCode: "TAB1", isActive: true },
  { title: "Organigrama", keyCode: "TAB2", isActive: false },
  { title: "Movimientos locales", keyCode: "TAB3", isActive: false }
]
let minimalGallery: Array<string> = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=4",
  "https://picsum.photos/200/300?random=5",
  "https://picsum.photos/200/300?random=6",
  "https://picsum.photos/200/300?random=7",
  "https://picsum.photos/200/300?random=8",
]

const AboutUsPage = () => {

  let res = getGoogleSheetData()
  console.log(res)

  let r = getGoogleDriveData()
  console.log(r)
  r.then((data) => {
    console.log(data)
  })

  const [tabs, setTabs] = useState(tabsDefault)
  const [tabKeyCodeSelected, setTabKeyCodeSelected] = useState("TAB1")

  const onTabClicked = (tabKeyCode: String) => {
    let newTabs = [...tabs]
    let tabFounded = newTabs.find(item => item.keyCode == tabKeyCode)
    newTabs.forEach(item => item.isActive = false)

    if (tabFounded) {
      tabFounded.isActive = true
      setTabKeyCodeSelected(`${tabKeyCode}`)
    }

    setTabs(newTabs)
  }

  const showFullGallery = () => {
    //TODO: Change this navigation
    alert("Debemos irnos a la galeria")
  }

  return (
    <>

      <section className="about-us-wrapper">

        <span className="migala-section-title">Nosotrxs</span>

        <TabsSection items={tabs} onTabClicked={onTabClicked} />

        <div className="tabs-content">
          {/*TODO: Change by correct text "*/}
          {tabKeyCodeSelected == "TAB1" && <AboutUsDescription
            description={`
              Esta deberia ser la descripción Esta deberia ser la descripción Esta deberia ser la descripción
              Esta deberia ser la descripción Esta deberia ser la descripción Esta deberia ser la descripción
              Esta deberia ser la descripción Esta deberia ser la descripción Esta deberia ser la descripción
              Esta deberia ser la descripción Esta deberia ser la descripción Esta deberia ser la descripción
              Esta deberia ser la descripción Esta deberia ser la descripción Esta deberia ser la descripción
          `} />
          }
          {/*TODO: Change by correct chart "*/}
          {tabKeyCodeSelected == "TAB2" && <OrganizationChart
            chart={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forganigrama.rocks%2Fwp-content%2Fuploads%2F2019%2F05%2Fempresa.jpg&f=1&nofb=1"}
          />}
          {tabKeyCodeSelected == "TAB3" && <MinimalGallery
            images={minimalGallery}
            showFullGallery={showFullGallery}
          />}
        </div>

      </section>

      <style jsx>{`

        .about-us-wrapper {
          display: flex;
          flex-flow: column;
          align-items: center;
          margin-top: 100px;
          padding: 20px;
        }

        .section-title {
          font-size: calc(20px + 3vmin);
          font-weight: bold;
          color: black;
          padding: 10px 0;
        }

        .tabs-content {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 500px;
          overflow: auto;
          padding: 20px;
          width: 95%;
        }

      `}</style>
    </>
  )
}

export default AboutUsPage