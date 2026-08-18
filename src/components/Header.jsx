import { useState } from "react";

export default function Header(){
    const [ menuAtivo, setMenuAtivo] = useState(false);

    const toggleMenu = () =>{
        setMenuAtivo(!menuAtivo);
    };

    return(
        <>
            <header className="header">
                <h1 className="logo">Pizza FIEP</h1>
                
                {/* Quando clica, chama a função toggleMenu */}
                <div className="meu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>


                <nav className={`menu ${menuAtivo ? 'active' : ''}`}>
                    <a href="#hero" onClick={toggleMenu}>Home</a>
                    <a href="#cardapio" onClick={toggleMenu}>Cardápio</a>
                    <a href="sobre" onClick={toggleMenu}>Sobre</a>
                    <a href="#contato" onClick={toggleMenu}>Contato</a>
                </nav>

                <div className={`overlay-menu ${menuAtivo ? 'active' : ''}`} onClick={toggleMenu}>

                </div>
            </header>
        </>
    )
}

