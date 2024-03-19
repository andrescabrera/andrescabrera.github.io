import React from "react"
import MenuButton from "./MenuButton"

const MenuButtons = () => {
    return (
        <section className="pt-12">
            <MenuButton url="/andrescabrera-eng.pdf" menu_type="CV - English" />
            <MenuButton url="/andrescabrera-spa.pdf" menu_type="CV - Spanish" />
            <MenuButton url="https://roadmap.sh/backend?s=65f99212adfe421617302b21" menu_type="Tech Stack" />
        </section>

    )
}

export default MenuButtons
