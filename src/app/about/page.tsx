import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-24 p-11 pb-0 lg:px-36 lg:py-0">
      <div className="flex flex-col text-center lg:text-start gap-10 font-inter">
        <h1 className="text-text-headings font-black text-3xl">
          Prazer, sou <span className="text-brand-color">Sandro Luz</span>
        </h1>
        <div className="flex flex-col gap-4 text-text-typography font-light text-base">
          <p>
            Olá! Sou Sandro Luz, apaixonado pela arte que transcende o tempo e
            se imprime na pele. Com mais de 10 anos de experiência no mundo da
            tatuagem, dedico-me a transformar visões e emoções em arte corporal
            que expressa quem você é e o que você ama.
          </p>
          <p>
            Cada tatuagem em meu estúdio é um trabalho de colaboração; ouço
            atentamente os desejos e as histórias de meus clientes para que cada
            peça seja única e pessoal. Especializo-me em vários estilos, desde o
            delicado traço fino até composições mais robustas e coloridas,
            garantindo que cada design não só atenda, mas supere as
            expectativas.
          </p>
          <p>
            Além da dedicação à arte, a segurança e o conforto são prioridades
            no meu estúdio. Utilizo apenas equipamentos esterilizados e de alta
            qualidade, e sou rigoroso quanto aos protocolos de higiene e
            segurança, garantindo uma experiência segura e confortável para
            todos.
          </p>
          <p>
            Visite meu estúdio e veja como a arte pode se manifestar em sua
            pele. Estou aqui para ajudá-lo a contar sua história de uma maneira
            única e eterna. Agende sua consulta e vamos juntos criar algo
            extraordinário!
          </p>
        </div>
        <p className="font-island text-4xl">Sandro Luz</p>
      </div>

      <Image
        src="/Image 2.svg"
        width={430}
        height={541}
        alt="Foto do tatuador Sandro Luz"
        className="lg:hidden"
      />

      <Image
        src="/Portrait-1.svg"
        width={365}
        height={796}
        alt="Foto do tatuador Sandro Luz"
        className="hidden lg:block -mb-14 z-10"
      />
    </section>
  );
}
