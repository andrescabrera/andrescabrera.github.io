import React from "react"
import MenuButton from "./MenuButton"

const MenuButtons = () => {
    return (
        <section className="pt-12">
            <MenuButton url="/blackgyalbites-nextjs/andrescabrera-eng.pdf" menu_type="CV" />
            <MenuButton url="/blackgyalbites-nextjs/andrescabrera-spa.pdf" menu_type="Personal" />
            <MenuButton url="/blackgyalbites-nextjs/menu-pdf-catering.pdf" menu_type="Travel and Foods" />
        </section>

    )
}

export default MenuButtons