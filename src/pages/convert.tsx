import CONVERT_PAGE_STYLE from '../styles/pages/convert'
import NAVBAR_COMPONENT from '../components/navbar'
import cloudUp from '../resources/img/cloud_upload.svg'
import cloudDw from '../resources/img/cloud_download.svg'

const CONVERT_PAGE = () => {
  return (
    <>
      <NAVBAR_COMPONENT order={3} />
      <CONVERT_PAGE_STYLE>
        <div className="container">
          <div className="container__option">
            <h2 className="container__title">Enviar</h2>
            <img src={cloudUp} alt="upload" className="container__icon" />
          </div>
          <div className="container__option">
            <h2 className="container__title">Baixar</h2>
            <img src={cloudDw} alt="download" className="container__icon" />
          </div>
        </div>
        <div className="progress">
          <progress value="32" max="100" className="progress__bar"> 32% </progress>
        </div>
      </CONVERT_PAGE_STYLE>
    </>
  )
}

export default CONVERT_PAGE
