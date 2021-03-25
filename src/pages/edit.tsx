import EDIT_PAGE_STYLE from '../styles/pages/edit'
import NAVBAR_COMPONENT from '../components/navbar'

const EDIT_PAGE = () => {
  return (
    <>
      <NAVBAR_COMPONENT order={2} />
      <EDIT_PAGE_STYLE>
        Página edit
      </EDIT_PAGE_STYLE>
    </>
  )
}

export default EDIT_PAGE
