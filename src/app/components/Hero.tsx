'use client'

import Image from "next/image"
import backgroundImage from "../../../public/backgroundImage.jpg"
import logo from "../../../public/logo.png"

export default function Hero() {
  return (
    <main className="pt-16">
      <header
        className="w-full h-[56vh] md:h-[56vh] bg-center bg-cover flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        <Image
            src={logo}
            alt="Logo Beauty Studio"
            className="w-56 md:w-62 mb-4 mt-4"
            priority
        />

        <a
          href="#agendamento"
          className="bg-rose-400 hover:bg-rose-400 text-white text-md px-6 py-3 rounded-full font-semibold transition md:text-lg"
        >
          Agendar Horário
        </a>
      </header>
    </main>
  )
}
