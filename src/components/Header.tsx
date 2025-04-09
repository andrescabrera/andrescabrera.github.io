import React from "react"

const Header = () => {
    return (
        <header 
            className="m-0 bg-cover bg-center flex justify-center content-center flex-col h-banner-height animate-background-fade"
        >
            <h1 className="m-0 text-heading-xl text-white tracking-small header-text-shadow font-heading">Andrés Cabrera</h1>
            <br/>
            <br/>
            <h2 className="uppercase text-subheading-xl text-lg text-white tracking-wider">Design, Create and Observe Software</h2>
        </header>
    )
}

export default Header