import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faIndustry,
  faBoxOpen,
  faBookOpen,
  faBarcode,
  faCoffee,
  faTachometerAlt,
  faUserCircle,
  faUserShield,
  faCommentDollar

} from '@fortawesome/free-solid-svg-icons'

const _nav =  [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Dashboard']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Incicio',
    to: '/store',
    icon: <FontAwesomeIcon icon={faTachometerAlt} size="1x" className="mr-3" />,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Herramientas']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Obras',
    to: '/store',
    icon: <FontAwesomeIcon icon={faIndustry} size="1x" className="mr-3" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Recursos Humanos',
    to: '/store',
    icon: <FontAwesomeIcon icon={faUserCircle} size="1x" className="mr-3" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'SHei',
    to: '/store',
    icon: <FontAwesomeIcon icon={faUserShield} size="1x" className="mr-3" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Finanzas',
    to: '/store',
    icon: <FontAwesomeIcon icon={faCommentDollar} size="1x" className="mr-3" />,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Inventarios']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Almacen',
    icon: <FontAwesomeIcon icon={faBoxOpen} size="1x" className="mr-3" />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Pedidos',
        icon: <FontAwesomeIcon icon={faBookOpen} size="1x" className="mr-3"/>,
        to: '/pedidos',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Captura de Inventario',
        icon: <FontAwesomeIcon icon={faBarcode} size="1x" className="mr-3"/>,
        to: '/catalogo/caputura',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
