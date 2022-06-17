
import * as Icon from 'react-bootstrap-icons';


type NavBarProps = {
  labels: Array<string>
}

const NavBar = ({labels}: NavBarProps) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">LOGO MIGALA</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {labels.map((label, index) => (
                <li key={`${index}${label}`} className="nav-item nav-item-custom">
                  <a className="nav-link" aria-current="page" href="#">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </nav>

      <style jsx>{`

        .custom-navbar {
          background-color: transparent !important;
          padding: 15px 20px;
        }

        .nav-item-custom > a{
          color: black !important;
          font-size: 18px;
          font-weight: 500;
          padding: 0 20px;
        }

      `}</style>
    </>
  )
}

export default NavBar