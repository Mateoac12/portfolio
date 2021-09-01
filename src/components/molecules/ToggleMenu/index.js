import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import { linksToToggleMenu } from 'config/globalLinks'

import LinkButton from 'components/atoms/LinkButton'
import MenuButton from 'components/atoms/MenuButton'

import { MenuBox, Button, IndexNamePage, ListItem } from './styles'

const ToggleMenu = () => {
  const [actualUrl] = useLocation()
  const [pageName, setPageName] = useState('')
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const linkDescriptionFound = linksToToggleMenu.find(
      ({ url }) => url === actualUrl
    )
    setPageName(linkDescriptionFound?.title || '')
  }, [actualUrl])

  const handleChangeStatus = () => setIsShow((lastValue) => !lastValue)

  const handleChangeStatusFromMenuOpened = ({ target }) => {
    target.tagName === 'A' && setIsShow(false)
  }

  return (
    <nav>
      <Button onClick={handleChangeStatus}>
        <IndexNamePage>{pageName}</IndexNamePage>
        <MenuButton isClicked={isShow} />
      </Button>
      <MenuBox isShow={isShow} onClick={handleChangeStatusFromMenuOpened}>
        {linksToToggleMenu.map(({ title, url, icon }) => (
          <ListItem isOpenPage={pageName === title} key={title}>
            <LinkButton title={title} url={url} icon={icon} />
          </ListItem>
        ))}
      </MenuBox>
    </nav>
  )
}

export default ToggleMenu