import Image from "next/image";
import studioDeBeleza from "../../../public/studioDeBeleza.jpeg";

export default function About() {
  return (
    <section id="sobre" className="px-4 bg-white">
      <div className="mx-auto flex flex-col md:flex-row gap-8 items-center">
        
        {/* Texto - mobile: primeiro | desktop: depois */}
        <div className="w-full md:w-1/2 order-1 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold text-rose-400 mb-4">Sobre Mia Beauty Studio de Beleza</h2>
          <p className="text-black text-lg leading-relaxed mb-4">
            Um espaço pensado para valorizar sua beleza e autoestima. Nosso salão oferece serviços completos em um ambiente acolhedor, com atendimento personalizado e profissionais dedicadas a transformar o seu dia.
          </p>
          <p className="text-black text-lg italic">
            Fundado por [Nome da dona], especialista apaixonada por cuidados femininos, o Beauty Studio nasceu do sonho de oferecer experiências únicas e inesquecíveis.
          </p>
        </div>

        {/* Imagem - mobile: depois | desktop: primeiro */}
        <div className="w-full md:w-1/2 order-2 md:order-2">
          <Image
            src={studioDeBeleza}
            alt="Frente do salão"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
