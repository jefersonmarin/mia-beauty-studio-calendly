'use client'

import Image from 'next/image'

type ServicesItem = {
  id: number
  nome: string
  slug: string
  imagem: string
}

const servicos: ServicesItem[] = [
  {
    id: 1,
    nome: 'Serviços de Cabelereira',
    slug: 'servicos-cabeleleira',
    imagem: '/services/cabelo2.jpeg',
  },
  {
    id: 2,
    nome: 'Maquiagem',
    slug: 'maquiagem',
    imagem: '/services/maquiagem.jpeg',
  },
  {
    id: 3,
    nome: 'Design de Sobrancelhas',
    slug: 'design-sobrancelhas',
    imagem: '/services/sobrancelhas.jpeg',
  },
  {
    id: 4,
    nome: 'Limpeza de pele',
    slug: 'hidratacao',
    imagem: '/services/limpezaDePele.jpeg',
  },
  {
    id: 5,
    nome: 'Jet Bronze',
    slug: 'jet-bronze',
    imagem: '/services/jetBronze3.jpeg',
  },
  {
    id: 6,
    nome: 'Unhas',
    slug: 'unhas',
    imagem: '/services/unhas.jpeg',
  },
  /*{
    id: 7,
    nome: 'Cílios',
    slug: 'escova-modelada',
    imagem: '/services/cilios.jpeg',
  },*/
]

export default function Services() {
  return (
    <section id="servicos" className="pb-12 md: pt-8 py-6 px-4 mb-4 bg-white">
      <div className="mb-6">
        <h2 className="text-2xl md:text-2xl font-bold text-left text-rose-400">Serviços disponíveis</h2>
        <p className="text-black text-lg leading-relaxed mb-4">
          Escolha o serviço ideal para realçar ainda mais sua beleza.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
        {servicos.map((servico) => (
          <div
            key={servico.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={servico.imagem}
              alt={servico.nome}
              width={300}
              height={300}
              className="w-full h-[56vh] object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{servico.nome}</h3>
              <a
                href={`https://wa.me/555499180188?text=${encodeURIComponent(
                  `Olá! Estou entrando em contato através do site e gostaria de agendar o serviço ${servico.nome} no Mia Beauty Studio.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-rose-400 hover:bg-rose-500 text-white font-bold px-5 py-2 rounded-full transition"
              >
                Agendar
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
