import React from "react"
import MenuButton from "./MenuButton"

const MenuButtons = () => {
    return (
        <section className="pt-12">
            <MenuButton url="/andrescabrera-eng.pdf" menu_type="CV - English" />
            <MenuButton url="/andrescabrera-spa.pdf" menu_type="CV - Spanish" />
            <MenuButton url="/personal.pdf" menu_type="Family, Travel and Foods" />
        </section>

    )
}

export default MenuButtons