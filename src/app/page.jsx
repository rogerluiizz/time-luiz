import React from "react";

const services = [
  {
    icon: "📄",
    title: "Currículo Essencial",
    price: "R$ 39,90",
    description:
      "Reestruturação profissional do currículo com organização estratégica das informações.",
    extras: [
      "Currículo moderno e atualizado",
      "Melhor apresentação profissional",
      "1 encontro online de 30 minutos",
    ],
  },
  {
    icon: "💼",
    title: "LinkedIn Estratégico",
    price: "R$ 49,90",
    description:
      "Otimização completa do perfil LinkedIn para atrair mais recrutadores.",
    extras: [
      "Headline e resumo otimizados",
      "Perfil mais profissional",
      "1 encontro online de 30 minutos",
    ],
  },
  {
    icon: "🚀",
    title: "Profissional Completo",
    price: "R$ 79,90",
    description:
      "Currículo + LinkedIn alinhados estrategicamente para aumentar suas oportunidades.",
    extras: [
      "Currículo profissional",
      "LinkedIn otimizado",
      "1 encontro estratégico de 1 hora",
    ],
  },
  {
    icon: "🎯",
    title: "Plano Carreira & Vagas",
    price: "R$ 197,90",
    description:
      "Pacote completo com currículo, LinkedIn e orientação prática para conquistar vagas.",
    extras: [
      "Currículo + LinkedIn",
      "2 encontros de 1 hora",
      "Macetes escondidos do LinkedIn",
      "Estratégias para vagas",
    ],
  },
];

const benefits = [
  "Currículos modernos e objetivos",
  "Linguagem profissional e acessível",
  "Otimização para processos seletivos atuais",
  "Atendimento online e personalizado",
  "Currículos modernos, estratégicos e preparados para processos seletivos atuais", 
  "Ideal para profissionais que desejam melhorar sua apresentação e aumentar suas oportunidades."
];

const faqs = [
  {
    question: "O serviço é indicado para quem busca o primeiro emprego?",
    answer:
      "Sim. O Time Luiz ajuda jovens, estudantes e profissionais em início de carreira a organizarem suas experiências, cursos, habilidades e objetivos de forma profissional.",
  },
  {
    question: "Vocês fazem currículo para estágio?",
    answer:
      "Sim. Criamos currículos voltados para estágio, jovem aprendiz, primeiro emprego, área administrativa e oportunidades corporativas de entrada.",
  },
  {
    question: "O currículo é otimizado para Inteligências Artificiais?",
    answer:
      "Sim. A estrutura é pensada para ser clara, bem organizada e compatível com as principais Inteligências Artificiais usadas em processos seletivos.",
  },
  {
    question: "Como funciona o atendimento?",
    answer:
      "O atendimento é online. Você envia suas informações, recebe orientação e o material é preparado com base no seu objetivo profissional.",
  },
];

function CTAButton({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-[#16795f] text-white hover:bg-[#105f4b]"
      : "border border-[#16795f] text-[#16795f] hover:bg-[#e6f5f0]";

  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

export default function TimeLuizLandingPage() {
  const whatsappLink =
    "https://wa.me/5573991113454?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Time%20Luiz%20e%20quero%20melhorar%20meu%20curr%C3%ADculo.";

  return (
    <main className="min-h-screen bg-[#f7fbf9] text-[#222222]">
      <header className="sticky top-0 z-50 border-b border-[#dceee8] bg-[#f7fbf9]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <img src="/logo.png" alt="Time Luiz" className="h-20 w-auto" />
            <div className="leading-tight">
              <p className="text-base font-bold text-[#16795f]">Time Luiz</p>
              <p className="text-xs text-[#5f6f69]">Seu currículo no próximo nível</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#47524e] md:flex">
            <a href="#servicos" className="hover:text-[#16795f]">Serviços</a>
            <a href="#como-funciona" className="hover:text-[#16795f]">Como funciona</a>
            <a href="#faq" className="hover:text-[#16795f]">Dúvidas</a>
          </nav>

          <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full bg-[#16795f] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#105f4b]">
            Falar Comigo
          </a>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#9ad9c8]/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#9ad9c8] bg-white px-4 py-2 text-sm font-medium text-[#16795f] shadow-sm">
              ✦ Currículos, LinkedIn e carreira
            </div>

            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-[#222222] md:text-6xl">
              Seu currículo no próximo nível.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#47524e]">
              Currículos modernos, estratégicos e preparados para processos seletivos atuais. Ideal para estágio, primeiro emprego, área administrativa e profissionais em busca de recolocação.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={whatsappLink}>Solicitar orçamento →</CTAButton>
              <CTAButton href="#servicos" variant="outline">Ver serviços</CTAButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#47524e]">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">ATS-friendly</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Online</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Acessível</span>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-[#dceee8] bg-white p-6 shadow-xl md:p-8">
              <div className="rounded-[1.5rem] bg-[#16795f] p-6 text-white">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#cfeee5]">Diagnóstico rápido</p>
                    <h2 className="text-2xl font-bold">Seu currículo está pronto?</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl text-[#9ad9c8]">✓</div>
                </div>

                <div className="space-y-4">
                  {benefits.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/10 p-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#9ad9c8] text-xs font-bold text-[#16795f]">✓</span>
                      <p className="text-sm leading-6 text-white/95">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#222222] p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#9ad9c8]">O problema</p>
              <h2 className="mt-3 text-3xl font-black">Seu currículo pode estar te eliminando antes da entrevista.</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-8 text-white/80">
                Muitos candidatos têm experiência, cursos e vontade de crescer, mas perdem oportunidades por causa de um currículo genérico, desorganizado ou pouco claro. O Time Luiz organiza sua trajetória para que recrutadores entendam melhor o seu potencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#16795f]">Serviços</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Soluções simples para melhorar sua apresentação profissional.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className={service.title === "Profissional Completo" ? "rounded-[1.7rem] border-2 border-[#16795f] bg-white p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-lg" : "rounded-[1.7rem] border border-[#dceee8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e6f5f0] text-xl font-black text-[#16795f]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#222222]">{service.title}</h3>
                <p className="mt-3 text-2xl font-black text-[#16795f]">
  {service.price}
</p>

<p className="mt-4 text-sm leading-6 text-[#5f6f69]">
  {service.description}
</p>

<div className="mt-5 space-y-2">
  {service.extras.map((item) => (
    <div
      key={item}
      className="flex items-center gap-2 text-sm text-[#47524e]"
    >
      <span className="text-[#16795f]">✓</span>
      <span>{item}</span>
    </div>
  ))}
</div>
<a
  href={whatsappLink}
  target="_blank"
  rel="noreferrer"
  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#16795f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#105f4b]"
>
  Quero esse plano
</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#16795f]">Como funciona</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Atendimento online, direto e sem enrolação.</h2>
              <p className="mt-5 text-lg leading-8 text-[#47524e]">
                Você envia suas informações, fala sobre seu objetivo profissional e recebe um material mais claro, moderno e alinhado ao mercado.
              </p>
            </div>

            <div className="space-y-4">
              {["Você chama no WhatsApp", "Marcamos um encontro online para um bate-papo", "O material é revisado e estruturado", "Você recebe o currículo ou perfil otimizado"].map((step, index) => (
                <div key={step} className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#16795f] font-bold text-white">{index + 1}</div>
                  <div>
                    <h3 className="font-bold">{step}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#5f6f69]">Processo pensado para ser simples, rápido e acessível.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-8 shadow-sm md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#16795f]">Para quem é</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">Feito para quem quer entrar ou crescer no mercado.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Primeiro emprego", "Estágio", "Jovem aprendiz", "Área administrativa", "Recolocação", "LinkedIn profissional"].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f0faf6] px-4 py-3 font-medium text-[#16795f]">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#16795f]">FAQ</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Dúvidas frequentes</h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-[#dceee8] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-2 leading-7 text-[#5f6f69]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#16795f] p-8 text-center text-white shadow-xl md:p-14">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl text-[#9ad9c8]">☏</div>
          <h2 className="text-3xl font-black md:text-5xl">Pronto para melhorar seu currículo?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Fale com o Time Luiz e dê o próximo passo na sua apresentação profissional.
          </p>
          <div className="mt-8">
            <CTAButton href={whatsappLink} variant="secondary">Chamar no WhatsApp →</CTAButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#dceee8] px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#5f6f69] md:flex-row">
          <p>© {new Date().getFullYear()} Time Luiz. Seu currículo no próximo nível.</p>
          <p>Currículos • LinkedIn • Carreira</p>
        </div>
      </footer>
    </main>
  );
}

