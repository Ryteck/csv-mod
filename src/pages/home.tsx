import HOME_PAGE_STYLE from '../styles/pages/home'
import NAVBAR from '../components/navbar'

const HOME_PAGE = () => {
  return (
    <>
      <NAVBAR order={0} />
      <HOME_PAGE_STYLE>
        Página home
      </HOME_PAGE_STYLE>
    </>
  )
}

export default HOME_PAGE
