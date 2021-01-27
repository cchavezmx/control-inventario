import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBoxOpen, faAddressCard, faBookOpen } from '@fortawesome/free-solid-svg-icons'

const _nav =  [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Herramientas']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Canales',
    to: '/theme/colors',
    icon: <FontAwesomeIcon icon={faCoffee} size="1x" className="mr-3" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Proveedores',
    to: '/theme/colors',
    icon: <FontAwesomeIcon icon={faAddressCard} size="1x" className="mr-3" />,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Inventarios']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Almacen',
    route: '/base',
    icon: <FontAwesomeIcon icon={faBoxOpen} size="1x" className="mr-3" />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Catálogo',
        icon: <FontAwesomeIcon icon={faBookOpen} size="1x" className="mr-3"/>,
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
