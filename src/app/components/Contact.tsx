import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMapPin } from 'react-icons/hi2'

export default function Contact() {
  return (
    <section id="contato" className="pt-12 pb-6 px-4 bg-white">
      <div className="mx-auto">
        {/* Título e Subtítulo */}
        <h2 className="text-2xl md:text-3xl font-bold text-rose-400 mb-2">Entre em Contato</h2>

        {/* Botões de contato */}
        <div className="flex flex-col my-2 md:flex-row justify-center items-center gap-2 md:w-1/2">
          <a
            href="https://wa.me/555499180188?text=Olá! Estou entrando em contato através do site e gostaria de agendar um serviço no Mia Beauty Studio."
            target="_blank"
            className="bg-rose-400 hover:bg-rose-400 flex text-white items-center justify-center gap-2 text-md text-center py-3 rounded-full w-full font-bold transition md:text-lg"
            >
              <FaWhatsapp className="w-6 h-6" />
              Whatsapp
            </a>
            <a
            href="https://www.instagram.com/mia_beauty_studio_de_beleza/"
            target="_blank"
            className="bg-rose-400 hover:bg-rose-400 flex text-white items-center justify-center gap-2 text-md text-center py-3 rounded-full w-full font-bold transition md:text-lg"
            >
              <FaInstagram className="w-6 h-6" />
              Instagram
            </a>
        </div>
        <div className="flex gap-2 md:text-xl text-center items-center my-2">
          <HiOutlineMapPin className="w-6 h-6 text-black" /> 
          <p className="text-black text-md leading-relaxed">
              Rua Vasco da Gama, 165 - Não me toque RS   
          </p>
        </div>
        {/* Mapa com iframe */}
        <iframe
          className="w-full h-64 rounded-lg" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.708884431302!2d-52.81739302649745!3d-28.466962717835745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fd4933f39afb9f%3A0xbc5ccbabf282580!2sR.%20Vasco%20da%20Gama%2C%20165%20-%20N%C3%A3o-Me-Toque%2C%20RS%2C%2099470-000!5e0!3m2!1spt-BR!2sbr!4v1751842187313!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}
