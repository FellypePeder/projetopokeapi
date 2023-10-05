import React from 'react'
import '../Modal/PokeModal.css'
import { GoX } from "react-icons/go";


export default function PokeModal({ isOpen, setModalOpen, children }) {
    if (isOpen){
        return (
            <div className='poke-fundo-modal'>
                <div className='poke-modal'>
                    <div>{children}</div>
                    <div className="btn-fechar" onClick={setModalOpen}><GoX /></div>
                </div>
            </div>
        )
    }
}