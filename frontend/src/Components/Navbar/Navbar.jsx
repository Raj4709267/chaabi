import { Button } from '@chakra-ui/react'
import React from 'react'
import { DrawerExample } from '../Drawer/Drawer'
import style from "./Navbar.module.css"

function Navbar() {
  return (
    <div className={style.navbar}>
        <div>
            Typing Sikho
        </div>
        <div>
            <DrawerExample/>
        </div>
    </div>
  )
}

export default Navbar