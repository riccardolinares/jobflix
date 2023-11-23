import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Che cos'è JobFlix?",
    answer:
      "JobFlix è una piattaforma video online gratuita che offre ai giovani, agli studenti e agli insegnanti un'esperienza interattiva di orientamento al lavoro. Presenta video coinvolgenti e informativi su varie professioni, fornendo dettagli sul lavoro stesso, sulle competenze richieste, sulle prospettive di carriera e sul percorso di studi necessario.",
  },
  {
    question: "Come possono gli studenti utilizzare JobFlix?",
    answer:
      "Gli studenti possono utilizzare JobFlix per esplorare autonomamente le diverse professioni attraverso i video, comprendere le competenze richieste e valutare come queste corrispondono ai loro interessi e talenti. Possono anche accedere a materiali didattici aggiuntivi per approfondire la loro conoscenza.",
  },
  {
    question: "In che modo JobFlix è utile per gli insegnanti?",
    answer:
      "JobFlix fornisce agli insegnanti un modo innovativo per svolgere le ore di orientamento obbligatorie. Dopo aver visualizzato i video, possono scaricare materiali didattici per trasformare i contenuti in lezioni interattive, aiutando gli studenti a sviluppare autoconsapevolezza e a esplorare percorsi di studio.",
  },
  {
    question: "Quali tipi di professioni sono coperte da JobFlix?",
    answer:
      "JobFlix copre una vasta gamma di professioni, da quelle tradizionali a quelle emergenti, in sintonia con le esigenze del mercato del lavoro attuale e futuro. Ogni professione è esplorata attraverso la voce di testimonial che condividono le loro esperienze e percorsi di vita.",
  },
  {
    question: "È necessario registrarsi per utilizzare JobFlix?",
    answer:
      "Sì, è richiesta una semplice registrazione gratuita online. Questo permette agli utenti di accedere a tutti i video e materiali disponibili sulla piattaforma, sia per l'uso in classe che per l'esplorazione individuale.",
  },
  {
    question:
      "Come JobFlix supporta l'orientamento professionale degli studenti?",
    answer:
      "JobFlix aiuta gli studenti a identificare le loro competenze e interessi, fornendo informazioni sulle varie professioni e i relativi percorsi di studio. La piattaforma traccia le preferenze degli utenti e suggerisce professioni in base alle loro attitudini, supportando così una scelta consapevole e informata sul percorso professionale.",
  },

  // More questions...
];

export default function Example() {
  return (
    <div className="bg-gray w-full">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-500">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Domande frequenti (FAQ)
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-500/10">
            {faqs.map(
              (faq: { question: string; answer: string }, index: number) => (
                <Disclosure as="div" key={index} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              )
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}
