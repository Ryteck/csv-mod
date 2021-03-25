import { useState } from 'react'
import REDIRECT_COMPONENT from '../components/redirect'
import NOT_FOUND_PAGE_STYLE from '../styles/pages/notFound'

const NOT_FOUND_PAGE = () => {
  const [getRedirectActive, setRedirectActive] = useState<boolean>(false)
  const [getRedirectPath, setRedirectPath] = useState<string>('')

  function redirect (path: string) {
    setRedirectActive(true)
    setRedirectPath(path)
  }

  return (
    <NOT_FOUND_PAGE_STYLE>
      <REDIRECT_COMPONENT active={getRedirectActive} path={getRedirectPath} />
      <div className="container">
        <h1 className="container__title">
          404
        </h1>
        <p className="container__desc">
          Opps... Página não encontrada
        </p>
        <input type="button" value="Voltar" className="container__back" onClick={() => redirect('/')} />
      </div>
    </NOT_FOUND_PAGE_STYLE>
  )
}

export default NOT_FOUND_PAGE
