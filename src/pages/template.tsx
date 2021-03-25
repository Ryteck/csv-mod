import TEMPLATE_PAGE_STYLE from '../styles/pages/template'
import NAVBAR_COMPONENT from '../components/navbar'

const TEMPLATE_PAGE = () => {
  return (
    <>
      <NAVBAR_COMPONENT order={1} />
      <TEMPLATE_PAGE_STYLE>
        Página template
      </TEMPLATE_PAGE_STYLE>
    </>
  )
}

export default TEMPLATE_PAGE
