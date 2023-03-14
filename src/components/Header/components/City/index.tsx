import { ReactComponent as IconLocation } from '@/assets/location.svg'
import { LinkCity } from './styled'
import { useContext } from 'react'
import { ShopContext } from '@/contexts/Shop/ShopContext'
import { Link } from 'react-router-dom'

export const City = () => {
  const { delivery } = useContext(ShopContext)
  return (
    <LinkCity as={Link} to="/checkout">
      <IconLocation />
      {delivery.city}, {delivery.state}
    </LinkCity>
  )
}
