import TEMPLATE_PAGE_STYLE from '../styles/pages/template'
import NAVBAR from '../components/navbar'

const TEMPLATE_PAGE = () => {
  return (
    <>
      <NAVBAR />
      <TEMPLATE_PAGE_STYLE>
        Página template
      </TEMPLATE_PAGE_STYLE>
    </>
  )
}

export default TEMPLATE_PAGE
