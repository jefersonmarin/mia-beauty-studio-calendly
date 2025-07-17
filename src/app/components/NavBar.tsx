'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoName from "../../../public/logoName.png"
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center md:justify-between">
        {/* Logo */}
        <Link href="/">
            <Image
            src={logoName}
            alt="Logo Beauty Studio"
            className="w-38 md:w-62 mb-4 mt-4"
            priority
            />
        </Link>

        {/* Menu hamburguer */}
        <button
          className="md:hidden text-gray-700 absolute right-4"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex gap-6">
          <Link href="#servicos" className="text-gray-800 hover:text-rose-400 font-semibold md:text-lg">
            Serviços
          </Link>
          <Link href="#sobre" className="text-gray-800 hover:text-rose-400 font-semibold md:text-lg text-center">
            Sobre
          </Link>
          <Link href="#contato" className="text-gray-800 hover:text-rose-400 font-semibold md:text-lg">
            Contato
          </Link>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col items-center text-center gap-4">
          <Link href="#servicos" className="text-gray-800 hover:text-rose-400 text-md" onClick={toggleMenu}>
            Serviços
          </Link>
          <Link href="#sobre" className="text-gray-800 hover:text-rose-400 text-md" onClick={toggleMenu}>
            Sobre
          </Link>
          <Link href="#contato" className="text-gray-800 hover:text-rose-400 text-md" onClick={toggleMenu}>
            Contato
          </Link>
        </div>
      )}
    </nav>
  )
}
