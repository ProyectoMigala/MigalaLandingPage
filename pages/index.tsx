import type {NextPage} from 'next'
import Start from './Start'
import NavBar from "../components/NavBar";
import Script from 'next/script'
import AboutUsPage from "./about_us/AboutUsPage";
import ActivitiesPage from "./activities/ActivitiesPage";

//El componente start es el que tiene el primer layout de la landing


let titleLabel: string[] = [
  "Inicio",
  "Nosotrxs",
  "Actividades",
  "Proyectos",
  "Archivo",
];


const Home: NextPage = () => {
  return (
    <>
      <NavBar labels={titleLabel}/>

      <Start/>
      <AboutUsPage/>
      <ActivitiesPage />

      <Script src="https://code.jquery.com/jquery-2.1.3.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
              integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
              crossOrigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
              integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
              crossOrigin="anonymous"></Script>
    </>

  )
}

export default Home
