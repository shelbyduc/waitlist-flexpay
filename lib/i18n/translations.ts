// Full UI dictionary. Add a language by adding an entry to `dictionaries`
// (must match the shape of `en`) and a row in `languages`.
//
// Positioning: Flexpay is payment infrastructure for underserved markets —
// it helps startups and businesses accept and collect payments in countries
// that global platforms don't serve yet.
//
// Copy is intentionally honest for a pre-launch product (no invented metrics)
// and uses no dash punctuation. The headline is split into three parts; spacing
// is baked into the strings so space-less scripts (zh, ja) render correctly.

const en = {
  nav: { features: "Features", how: "How it works", faq: "FAQ", join: "Join waitlist" },
  hero: {
    badge: "Now in private development",
    titlePre: "Payment infrastructure for ",
    titleHighlight: "underserved markets",
    titlePost: "",
    subtitle:
      "Flexpay helps startups and businesses accept and collect payments in countries that global platforms still don't serve. Join the waitlist for early access.",
    emailPlaceholder: "Enter your email",
    cta: "Join the waitlist",
    ctaLoading: "Joining",
    success: "You're on the list",
    successDesc: "We'll email you the moment early access opens.",
    errInvalid: "Please enter a valid email address.",
    errDuplicate: "This email is already on the waitlist.",
    errGeneric: "Something went wrong. Please try again.",
    noSpam: "No spam. Unsubscribe anytime.",
    trustedBy: "In private development. Early members get access first.",
  },
  features: {
    eyebrow: "Why Flexpay",
    title: "Everything you need to get paid",
    subtitle:
      "One platform that handles the hard parts of getting paid in underserved markets, so you can focus on your product.",
    items: [
      { title: "Local by design", desc: "Local payment methods, currencies, and bank payouts in markets others skip." },
      { title: "Built for developers", desc: "Clean APIs, instant webhooks, and SDKs that take minutes to integrate." },
      { title: "Security at the core", desc: "Strong encryption, secure infrastructure, and fraud detection built in." },
      { title: "Transparent pricing", desc: "No setup fees, no hidden costs. Pay only for what you use." },
    ],
  },
  principles: {
    items: [
      { title: "Built in the open", desc: "We shape the roadmap with our earliest members, and your feedback steers it." },
      { title: "Developer first", desc: "Clear docs and an API designed to be a genuine pleasure to integrate." },
      { title: "No hidden fees", desc: "Honest, transparent pricing with no setup costs and no surprises." },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Live in three steps",
    subtitle: "From signup to first payment in an afternoon.",
    steps: [
      { title: "Create your account", desc: "Sign up and get instant access to your dashboard and test keys." },
      { title: "Integrate the API", desc: "Drop in our SDK and start accepting payments in minutes." },
      { title: "Get paid", desc: "Watch payments roll in and settle straight to your bank." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      { q: "When does Flexpay launch?", a: "We're building now and rolling out access in waves. Join the waitlist to be among the first." },
      { q: "Is there a cost to join the waitlist?", a: "No. Joining is completely free and puts you first in line for early access." },
      { q: "Where will Flexpay be available?", a: "We're starting with underserved markets where businesses lack good payment options, then expanding. Join the list to hear which regions go live first." },
      { q: "How is my data handled?", a: "Your data is encrypted and never sold. Read our Privacy Policy for details." },
    ],
  },
  cta: {
    title: "Bring modern payments to your market",
    subtitle: "Add your email and be among the first to get access when we open the doors.",
    button: "Join the waitlist",
  },
  footer: {
    tagline: "Modern payments for underserved markets.",
    product: "Product",
    company: "Company",
    legal: "Legal",
    features: "Features",
    security: "Security",
    faq: "FAQ",
    terms: "Terms",
    privacy: "Privacy",
    cookies: "Cookies",
    contact: "Contact",
    rights: "All rights reserved.",
  },
  langLabel: "Language",
};

export type Dictionary = typeof en;

const es: Dictionary = {
  nav: { features: "Funciones", how: "Cómo funciona", faq: "Preguntas", join: "Unirme" },
  hero: {
    badge: "En desarrollo privado",
    titlePre: "Infraestructura de pagos para ",
    titleHighlight: "mercados desatendidos",
    titlePost: "",
    subtitle:
      "Flexpay ayuda a startups y empresas a aceptar y cobrar pagos en países que las plataformas globales aún no atienden. Únete a la lista de espera para acceso anticipado.",
    emailPlaceholder: "Introduce tu correo",
    cta: "Unirme a la lista",
    ctaLoading: "Uniéndote",
    success: "¡Ya estás en la lista!",
    successDesc: "Te avisaremos por correo en cuanto abra el acceso anticipado.",
    errInvalid: "Introduce una dirección de correo válida.",
    errDuplicate: "Este correo ya está en la lista de espera.",
    errGeneric: "Algo salió mal. Inténtalo de nuevo.",
    noSpam: "Sin spam. Cancela cuando quieras.",
    trustedBy: "En desarrollo privado. Los primeros miembros acceden antes.",
  },
  features: {
    eyebrow: "Por qué Flexpay",
    title: "Todo lo que necesitas para cobrar",
    subtitle: "Una plataforma que resuelve lo difícil de cobrar en mercados desatendidos para que te centres en tu producto.",
    items: [
      { title: "Local por diseño", desc: "Métodos de pago locales, monedas y pagos a bancos en mercados que otros ignoran." },
      { title: "Hecho para desarrolladores", desc: "APIs limpias, webhooks instantáneos y SDKs que se integran en minutos." },
      { title: "Seguridad en el centro", desc: "Cifrado robusto, infraestructura segura y detección de fraude integrada." },
      { title: "Precios transparentes", desc: "Sin cuotas de alta ni costes ocultos. Paga solo por lo que uses." },
    ],
  },
  principles: {
    items: [
      { title: "Construido en abierto", desc: "Definimos la hoja de ruta con nuestros primeros miembros y tu feedback la guía." },
      { title: "El desarrollador primero", desc: "Documentación clara y una API diseñada para que integrarla sea un placer." },
      { title: "Sin tarifas ocultas", desc: "Precios honestos y transparentes, sin costes de alta ni sorpresas." },
    ],
  },
  how: {
    eyebrow: "Cómo funciona",
    title: "Listo en tres pasos",
    subtitle: "Del registro al primer pago en una tarde.",
    steps: [
      { title: "Crea tu cuenta", desc: "Regístrate y accede al instante a tu panel y a las claves de prueba." },
      { title: "Integra la API", desc: "Añade nuestro SDK y empieza a aceptar pagos en minutos." },
      { title: "Cobra", desc: "Mira llegar los pagos y liquidarse directo en tu banco." },
    ],
  },
  faq: {
    eyebrow: "Preguntas",
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Cuándo se lanza Flexpay?", a: "Lo estamos creando y abriremos el acceso por fases. Únete a la lista para estar entre los primeros." },
      { q: "¿Cuesta algo unirse a la lista?", a: "No. Unirse es totalmente gratis y te coloca primero para el acceso anticipado." },
      { q: "¿Dónde estará disponible Flexpay?", a: "Empezamos por mercados desatendidos donde las empresas no tienen buenas opciones de pago, y luego ampliamos. Únete para enterarte de qué regiones llegan primero." },
      { q: "¿Cómo tratan mis datos?", a: "Tus datos se cifran y nunca se venden. Consulta nuestra Política de Privacidad." },
    ],
  },
  cta: {
    title: "Lleva pagos modernos a tu mercado",
    subtitle: "Deja tu correo y serás de los primeros en tener acceso cuando abramos.",
    button: "Unirme a la lista",
  },
  footer: {
    tagline: "Pagos modernos para mercados desatendidos.",
    product: "Producto",
    company: "Empresa",
    legal: "Legal",
    features: "Funciones",
    security: "Seguridad",
    faq: "Preguntas",
    terms: "Términos",
    privacy: "Privacidad",
    cookies: "Cookies",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
  },
  langLabel: "Idioma",
};

const fr: Dictionary = {
  nav: { features: "Fonctions", how: "Fonctionnement", faq: "FAQ", join: "Rejoindre" },
  hero: {
    badge: "En développement privé",
    titlePre: "L'infrastructure de paiement pour ",
    titleHighlight: "les marchés mal desservis",
    titlePost: "",
    subtitle:
      "Flexpay aide les startups et les entreprises à accepter et encaisser des paiements dans des pays que les plateformes mondiales ne desservent pas encore. Rejoignez la liste d'attente pour un accès anticipé.",
    emailPlaceholder: "Saisissez votre e-mail",
    cta: "Rejoindre la liste",
    ctaLoading: "Inscription",
    success: "Vous êtes inscrit !",
    successDesc: "Nous vous écrirons dès l'ouverture de l'accès anticipé.",
    errInvalid: "Veuillez saisir une adresse e-mail valide.",
    errDuplicate: "Cet e-mail est déjà sur la liste d'attente.",
    errGeneric: "Une erreur est survenue. Réessayez.",
    noSpam: "Pas de spam. Désinscription à tout moment.",
    trustedBy: "En développement privé. Les premiers membres y accèdent en premier.",
  },
  features: {
    eyebrow: "Pourquoi Flexpay",
    title: "Tout pour vous faire payer",
    subtitle: "Une plateforme qui gère le plus dur des encaissements sur les marchés mal desservis pour que vous restiez concentré sur votre produit.",
    items: [
      { title: "Local par conception", desc: "Moyens de paiement locaux, devises et virements bancaires sur les marchés que les autres ignorent." },
      { title: "Pensé pour les développeurs", desc: "Des API claires, des webhooks instantanés et des SDK intégrés en quelques minutes." },
      { title: "La sécurité au cœur", desc: "Chiffrement robuste, infrastructure sécurisée et détection des fraudes intégrée." },
      { title: "Tarifs transparents", desc: "Aucuns frais d'installation ni coûts cachés. Payez seulement à l'usage." },
    ],
  },
  principles: {
    items: [
      { title: "Construit ouvertement", desc: "Nous façonnons la feuille de route avec nos premiers membres et vos retours la guident." },
      { title: "Le développeur d'abord", desc: "Une documentation claire et une API pensée pour être un vrai plaisir à intégrer." },
      { title: "Aucuns frais cachés", desc: "Une tarification honnête et transparente, sans frais d'installation ni surprises." },
    ],
  },
  how: {
    eyebrow: "Fonctionnement",
    title: "Opérationnel en trois étapes",
    subtitle: "De l'inscription au premier paiement en un après-midi.",
    steps: [
      { title: "Créez votre compte", desc: "Inscrivez-vous et accédez aussitôt à votre tableau de bord et à vos clés de test." },
      { title: "Intégrez l'API", desc: "Ajoutez notre SDK et acceptez des paiements en quelques minutes." },
      { title: "Soyez payé", desc: "Voyez les paiements arriver et se régler directement sur votre compte." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions fréquentes",
    items: [
      { q: "Quand Flexpay sera-t-il lancé ?", a: "Nous le construisons et ouvrirons l'accès par vagues. Rejoignez la liste pour être parmi les premiers." },
      { q: "Rejoindre la liste est-il payant ?", a: "Non. C'est entièrement gratuit et vous place en tête pour l'accès anticipé." },
      { q: "Où Flexpay sera-t-il disponible ?", a: "Nous commençons par les marchés mal desservis où les entreprises manquent de bonnes options de paiement, puis nous nous étendons. Inscrivez-vous pour savoir quelles régions arrivent en premier." },
      { q: "Comment mes données sont-elles traitées ?", a: "Vos données sont chiffrées et jamais vendues. Voir notre Politique de confidentialité." },
    ],
  },
  cta: {
    title: "Apportez des paiements modernes à votre marché",
    subtitle: "Laissez votre e-mail et soyez parmi les premiers à y accéder à l'ouverture.",
    button: "Rejoindre la liste",
  },
  footer: {
    tagline: "Des paiements modernes pour les marchés mal desservis.",
    product: "Produit",
    company: "Entreprise",
    legal: "Légal",
    features: "Fonctions",
    security: "Sécurité",
    faq: "FAQ",
    terms: "Conditions",
    privacy: "Confidentialité",
    cookies: "Cookies",
    contact: "Contact",
    rights: "Tous droits réservés.",
  },
  langLabel: "Langue",
};

const de: Dictionary = {
  nav: { features: "Funktionen", how: "So funktioniert's", faq: "FAQ", join: "Beitreten" },
  hero: {
    badge: "In privater Entwicklung",
    titlePre: "Zahlungsinfrastruktur für ",
    titleHighlight: "unterversorgte Märkte",
    titlePost: "",
    subtitle:
      "Flexpay hilft Startups und Unternehmen, Zahlungen in Ländern anzunehmen und einzuziehen, die globale Plattformen noch nicht bedienen. Sichere dir mit der Warteliste frühen Zugang.",
    emailPlaceholder: "E-Mail eingeben",
    cta: "Auf die Warteliste",
    ctaLoading: "Wird eingetragen",
    success: "Du bist auf der Liste",
    successDesc: "Wir melden uns per E-Mail, sobald der frühe Zugang öffnet.",
    errInvalid: "Bitte gib eine gültige E-Mail-Adresse ein.",
    errDuplicate: "Diese E-Mail steht bereits auf der Warteliste.",
    errGeneric: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
    noSpam: "Kein Spam. Jederzeit abbestellbar.",
    trustedBy: "In privater Entwicklung. Frühe Mitglieder erhalten zuerst Zugang.",
  },
  features: {
    eyebrow: "Warum Flexpay",
    title: "Alles, um bezahlt zu werden",
    subtitle: "Eine Plattform, die die schwierigen Teile des Bezahltwerdens in unterversorgten Märkten übernimmt, damit du dich auf dein Produkt konzentrierst.",
    items: [
      { title: "Lokal von Grund auf", desc: "Lokale Zahlungsmethoden, Währungen und Bankauszahlungen in Märkten, die andere auslassen." },
      { title: "Für Entwickler gebaut", desc: "Klare APIs, sofortige Webhooks und SDKs, die in Minuten integriert sind." },
      { title: "Sicherheit im Kern", desc: "Starke Verschlüsselung, sichere Infrastruktur und integrierte Betrugserkennung." },
      { title: "Transparente Preise", desc: "Keine Einrichtungsgebühren, keine versteckten Kosten. Zahle nur, was du nutzt." },
    ],
  },
  principles: {
    items: [
      { title: "Offen entwickelt", desc: "Wir gestalten die Roadmap mit unseren ersten Mitgliedern und euer Feedback lenkt sie." },
      { title: "Entwickler zuerst", desc: "Klare Doku und eine API, die wirklich Freude beim Integrieren macht." },
      { title: "Keine versteckten Gebühren", desc: "Ehrliche, transparente Preise, ohne Einrichtungskosten und ohne Überraschungen." },
    ],
  },
  how: {
    eyebrow: "So funktioniert's",
    title: "In drei Schritten live",
    subtitle: "Von der Anmeldung zur ersten Zahlung an einem Nachmittag.",
    steps: [
      { title: "Konto erstellen", desc: "Melde dich an und erhalte sofort Zugriff auf Dashboard und Testschlüssel." },
      { title: "API integrieren", desc: "Füge unser SDK hinzu und nimm in Minuten Zahlungen an." },
      { title: "Bezahlt werden", desc: "Sieh zu, wie Zahlungen eingehen und direkt auf deine Bank fließen." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen",
    items: [
      { q: "Wann startet Flexpay?", a: "Wir bauen es gerade und öffnen den Zugang in Wellen. Trag dich ein, um unter den Ersten zu sein." },
      { q: "Kostet die Warteliste etwas?", a: "Nein. Der Beitritt ist kostenlos und sichert dir den frühen Zugang zuerst." },
      { q: "Wo wird Flexpay verfügbar sein?", a: "Wir starten in unterversorgten Märkten, in denen Unternehmen keine guten Zahlungsoptionen haben, und weiten dann aus. Trag dich ein, um zu erfahren, welche Regionen zuerst starten." },
      { q: "Wie werden meine Daten behandelt?", a: "Deine Daten sind verschlüsselt und werden nie verkauft. Siehe unsere Datenschutzerklärung." },
    ],
  },
  cta: {
    title: "Bring moderne Zahlungen in deinen Markt",
    subtitle: "Hinterlasse deine E-Mail und sei einer der Ersten mit Zugang zum Start.",
    button: "Auf die Warteliste",
  },
  footer: {
    tagline: "Moderne Zahlungen für unterversorgte Märkte.",
    product: "Produkt",
    company: "Unternehmen",
    legal: "Rechtliches",
    features: "Funktionen",
    security: "Sicherheit",
    faq: "FAQ",
    terms: "AGB",
    privacy: "Datenschutz",
    cookies: "Cookies",
    contact: "Kontakt",
    rights: "Alle Rechte vorbehalten.",
  },
  langLabel: "Sprache",
};

const pt: Dictionary = {
  nav: { features: "Recursos", how: "Como funciona", faq: "Dúvidas", join: "Entrar" },
  hero: {
    badge: "Em desenvolvimento privado",
    titlePre: "Infraestrutura de pagamentos para ",
    titleHighlight: "mercados mal atendidos",
    titlePost: "",
    subtitle:
      "A Flexpay ajuda startups e empresas a aceitar e receber pagamentos em países que as plataformas globais ainda não atendem. Entre na lista de espera para acesso antecipado.",
    emailPlaceholder: "Digite seu e-mail",
    cta: "Entrar na lista",
    ctaLoading: "Entrando",
    success: "Você está na lista",
    successDesc: "Vamos avisar por e-mail assim que o acesso antecipado abrir.",
    errInvalid: "Digite um endereço de e-mail válido.",
    errDuplicate: "Este e-mail já está na lista de espera.",
    errGeneric: "Algo deu errado. Tente novamente.",
    noSpam: "Sem spam. Cancele quando quiser.",
    trustedBy: "Em desenvolvimento privado. Os primeiros membros acessam antes.",
  },
  features: {
    eyebrow: "Por que Flexpay",
    title: "Tudo para você receber",
    subtitle: "Uma plataforma que resolve o que há de difícil em receber em mercados mal atendidos para você focar no seu produto.",
    items: [
      { title: "Local por design", desc: "Métodos de pagamento locais, moedas e repasses bancários em mercados que outros ignoram." },
      { title: "Feita para devs", desc: "APIs limpas, webhooks instantâneos e SDKs integrados em minutos." },
      { title: "Segurança no centro", desc: "Criptografia forte, infraestrutura segura e detecção de fraude integrada." },
      { title: "Preços transparentes", desc: "Sem taxas de adesão nem custos ocultos. Pague só pelo que usar." },
    ],
  },
  principles: {
    items: [
      { title: "Construído de forma aberta", desc: "Definimos o roadmap com nossos primeiros membros e seu feedback guia tudo." },
      { title: "O dev em primeiro lugar", desc: "Documentação clara e uma API feita para ser um prazer de integrar." },
      { title: "Sem taxas ocultas", desc: "Preços honestos e transparentes, sem custos de adesão nem surpresas." },
    ],
  },
  how: {
    eyebrow: "Como funciona",
    title: "No ar em três passos",
    subtitle: "Do cadastro ao primeiro pagamento em uma tarde.",
    steps: [
      { title: "Crie sua conta", desc: "Cadastre-se e tenha acesso imediato ao painel e às chaves de teste." },
      { title: "Integre a API", desc: "Adicione nosso SDK e comece a aceitar pagamentos em minutos." },
      { title: "Receba", desc: "Veja os pagamentos chegarem e caírem direto no seu banco." },
    ],
  },
  faq: {
    eyebrow: "Dúvidas",
    title: "Perguntas frequentes",
    items: [
      { q: "Quando a Flexpay será lançada?", a: "Estamos construindo agora e liberaremos o acesso em ondas. Entre na lista para estar entre os primeiros." },
      { q: "Entrar na lista tem custo?", a: "Não. É totalmente grátis e garante seu lugar na frente para o acesso antecipado." },
      { q: "Onde a Flexpay estará disponível?", a: "Começamos por mercados mal atendidos onde as empresas não têm boas opções de pagamento e depois expandimos. Entre para saber quais regiões chegam primeiro." },
      { q: "Como meus dados são tratados?", a: "Seus dados são criptografados e nunca vendidos. Veja nossa Política de Privacidade." },
    ],
  },
  cta: {
    title: "Leve pagamentos modernos ao seu mercado",
    subtitle: "Deixe seu e-mail e seja um dos primeiros a ter acesso quando abrirmos.",
    button: "Entrar na lista",
  },
  footer: {
    tagline: "Pagamentos modernos para mercados mal atendidos.",
    product: "Produto",
    company: "Empresa",
    legal: "Jurídico",
    features: "Recursos",
    security: "Segurança",
    faq: "Dúvidas",
    terms: "Termos",
    privacy: "Privacidade",
    cookies: "Cookies",
    contact: "Contato",
    rights: "Todos os direitos reservados.",
  },
  langLabel: "Idioma",
};

const it: Dictionary = {
  nav: { features: "Funzioni", how: "Come funziona", faq: "FAQ", join: "Iscriviti" },
  hero: {
    badge: "In sviluppo privato",
    titlePre: "L'infrastruttura di pagamento per ",
    titleHighlight: "i mercati trascurati",
    titlePost: "",
    subtitle:
      "Flexpay aiuta startup e aziende ad accettare e incassare pagamenti in paesi che le piattaforme globali ancora non servono. Iscriviti alla lista d'attesa per l'accesso anticipato.",
    emailPlaceholder: "Inserisci la tua email",
    cta: "Iscriviti alla lista",
    ctaLoading: "Iscrizione",
    success: "Sei in lista",
    successDesc: "Ti scriveremo appena si apre l'accesso anticipato.",
    errInvalid: "Inserisci un indirizzo email valido.",
    errDuplicate: "Questa email è già in lista d'attesa.",
    errGeneric: "Qualcosa è andato storto. Riprova.",
    noSpam: "Niente spam. Disiscriviti quando vuoi.",
    trustedBy: "In sviluppo privato. I primi membri accedono prima.",
  },
  features: {
    eyebrow: "Perché Flexpay",
    title: "Tutto per farti pagare",
    subtitle: "Una piattaforma che gestisce le parti difficili dell'incasso nei mercati trascurati, così pensi solo al tuo prodotto.",
    items: [
      { title: "Locale per scelta", desc: "Metodi di pagamento locali, valute e accrediti bancari nei mercati che gli altri ignorano." },
      { title: "Pensata per gli sviluppatori", desc: "API pulite, webhook istantanei e SDK integrabili in pochi minuti." },
      { title: "Sicurezza al centro", desc: "Crittografia robusta, infrastruttura sicura e rilevamento frodi integrato." },
      { title: "Prezzi trasparenti", desc: "Nessun costo di avvio né spese nascoste. Paghi solo ciò che usi." },
    ],
  },
  principles: {
    items: [
      { title: "Costruito allo scoperto", desc: "Definiamo la roadmap con i primi membri e il tuo feedback la guida." },
      { title: "Prima gli sviluppatori", desc: "Documentazione chiara e un'API pensata per essere un piacere da integrare." },
      { title: "Nessun costo nascosto", desc: "Prezzi onesti e trasparenti, niente costi di avvio e nessuna sorpresa." },
    ],
  },
  how: {
    eyebrow: "Come funziona",
    title: "Operativo in tre passi",
    subtitle: "Dalla registrazione al primo pagamento in un pomeriggio.",
    steps: [
      { title: "Crea il tuo account", desc: "Registrati e accedi subito alla dashboard e alle chiavi di test." },
      { title: "Integra l'API", desc: "Aggiungi il nostro SDK e inizia ad accettare pagamenti in pochi minuti." },
      { title: "Vieni pagato", desc: "Guarda i pagamenti arrivare e accreditarsi direttamente in banca." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Domande frequenti",
    items: [
      { q: "Quando viene lanciata Flexpay?", a: "La stiamo costruendo e apriremo l'accesso a ondate. Iscriviti per essere tra i primi." },
      { q: "Iscriversi alla lista costa?", a: "No. È del tutto gratis e ti mette in cima per l'accesso anticipato." },
      { q: "Dove sarà disponibile Flexpay?", a: "Partiamo dai mercati trascurati dove le aziende non hanno buone opzioni di pagamento, poi ci espandiamo. Iscriviti per sapere quali regioni arrivano prima." },
      { q: "Come gestite i miei dati?", a: "I tuoi dati sono crittografati e mai venduti. Leggi la nostra Privacy Policy." },
    ],
  },
  cta: {
    title: "Porta pagamenti moderni nel tuo mercato",
    subtitle: "Lascia la tua email e sii tra i primi ad accedere all'apertura.",
    button: "Iscriviti alla lista",
  },
  footer: {
    tagline: "Pagamenti moderni per i mercati trascurati.",
    product: "Prodotto",
    company: "Azienda",
    legal: "Legale",
    features: "Funzioni",
    security: "Sicurezza",
    faq: "FAQ",
    terms: "Termini",
    privacy: "Privacy",
    cookies: "Cookie",
    contact: "Contatti",
    rights: "Tutti i diritti riservati.",
  },
  langLabel: "Lingua",
};

const nl: Dictionary = {
  nav: { features: "Functies", how: "Hoe het werkt", faq: "FAQ", join: "Aanmelden" },
  hero: {
    badge: "In private ontwikkeling",
    titlePre: "Betaalinfrastructuur voor ",
    titleHighlight: "onderbediende markten",
    titlePost: "",
    subtitle:
      "Flexpay helpt startups en bedrijven om betalingen te accepteren en te innen in landen die wereldwijde platforms nog niet bedienen. Meld je aan voor vroege toegang.",
    emailPlaceholder: "Vul je e-mail in",
    cta: "Aanmelden",
    ctaLoading: "Bezig",
    success: "Je staat op de lijst",
    successDesc: "We mailen je zodra vroege toegang opent.",
    errInvalid: "Voer een geldig e-mailadres in.",
    errDuplicate: "Dit e-mailadres staat al op de wachtlijst.",
    errGeneric: "Er ging iets mis. Probeer het opnieuw.",
    noSpam: "Geen spam. Altijd uitschrijfbaar.",
    trustedBy: "In private ontwikkeling. Vroege leden krijgen eerst toegang.",
  },
  features: {
    eyebrow: "Waarom Flexpay",
    title: "Alles om betaald te worden",
    subtitle: "Eén platform dat de lastige kanten van betaald worden in onderbediende markten regelt, zodat jij je op je product richt.",
    items: [
      { title: "Lokaal van opzet", desc: "Lokale betaalmethoden, valuta's en bankuitbetalingen in markten die anderen overslaan." },
      { title: "Gemaakt voor developers", desc: "Heldere API's, directe webhooks en SDK's die je in minuten integreert." },
      { title: "Beveiliging in de kern", desc: "Sterke versleuteling, veilige infrastructuur en ingebouwde fraudedetectie." },
      { title: "Transparante prijzen", desc: "Geen instelkosten, geen verborgen kosten. Betaal alleen voor gebruik." },
    ],
  },
  principles: {
    items: [
      { title: "Open gebouwd", desc: "We vormen de roadmap met onze eerste leden en jouw feedback stuurt die." },
      { title: "Developer eerst", desc: "Heldere docs en een API die een plezier is om te integreren." },
      { title: "Geen verborgen kosten", desc: "Eerlijke, transparante prijzen, zonder instelkosten en zonder verrassingen." },
    ],
  },
  how: {
    eyebrow: "Hoe het werkt",
    title: "Live in drie stappen",
    subtitle: "Van aanmelding tot eerste betaling in één middag.",
    steps: [
      { title: "Maak je account", desc: "Meld je aan en krijg meteen toegang tot je dashboard en testsleutels." },
      { title: "Integreer de API", desc: "Voeg onze SDK toe en accepteer binnen minuten betalingen." },
      { title: "Word betaald", desc: "Zie betalingen binnenkomen en direct naar je bank stromen." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Veelgestelde vragen",
    items: [
      { q: "Wanneer lanceert Flexpay?", a: "We bouwen nu en openen toegang in golven. Meld je aan om bij de eersten te horen." },
      { q: "Kost aanmelden iets?", a: "Nee. Aanmelden is gratis en zet je vooraan voor vroege toegang." },
      { q: "Waar wordt Flexpay beschikbaar?", a: "We beginnen in onderbediende markten waar bedrijven geen goede betaalopties hebben, en breiden daarna uit. Meld je aan om te horen welke regio's eerst live gaan." },
      { q: "Hoe gaan jullie met mijn data om?", a: "Je data is versleuteld en wordt nooit verkocht. Zie ons Privacybeleid." },
    ],
  },
  cta: {
    title: "Breng moderne betalingen naar jouw markt",
    subtitle: "Laat je e-mail achter en hoor bij de eersten met toegang bij de start.",
    button: "Aanmelden",
  },
  footer: {
    tagline: "Moderne betalingen voor onderbediende markten.",
    product: "Product",
    company: "Bedrijf",
    legal: "Juridisch",
    features: "Functies",
    security: "Beveiliging",
    faq: "FAQ",
    terms: "Voorwaarden",
    privacy: "Privacy",
    cookies: "Cookies",
    contact: "Contact",
    rights: "Alle rechten voorbehouden.",
  },
  langLabel: "Taal",
};

const ru: Dictionary = {
  nav: { features: "Возможности", how: "Как это работает", faq: "Вопросы", join: "В список" },
  hero: {
    badge: "В закрытой разработке",
    titlePre: "Платёжная инфраструктура для ",
    titleHighlight: "недостаточно охваченных рынков",
    titlePost: "",
    subtitle:
      "Flexpay помогает стартапам и бизнесу принимать и собирать платежи в странах, которые глобальные платформы ещё не обслуживают. Запишитесь в лист ожидания ради раннего доступа.",
    emailPlaceholder: "Введите ваш e-mail",
    cta: "В список ожидания",
    ctaLoading: "Записываем",
    success: "Вы в списке",
    successDesc: "Напишем на почту, как только откроется ранний доступ.",
    errInvalid: "Введите корректный адрес e-mail.",
    errDuplicate: "Этот e-mail уже в списке ожидания.",
    errGeneric: "Что-то пошло не так. Попробуйте снова.",
    noSpam: "Без спама. Отписка в любой момент.",
    trustedBy: "В закрытой разработке. Ранние участники получают доступ первыми.",
  },
  features: {
    eyebrow: "Почему Flexpay",
    title: "Всё, чтобы получать оплату",
    subtitle: "Одна платформа берёт на себя сложное в приёме платежей на недостаточно охваченных рынках, а вы сосредоточены на продукте.",
    items: [
      { title: "Локально по сути", desc: "Местные способы оплаты, валюты и выплаты на банк в рынках, которые другие обходят." },
      { title: "Для разработчиков", desc: "Понятные API, мгновенные вебхуки и SDK, которые внедряются за минуты." },
      { title: "Безопасность в основе", desc: "Сильное шифрование, защищённая инфраструктура и встроенная защита от мошенничества." },
      { title: "Прозрачные цены", desc: "Без платы за подключение и скрытых затрат. Платите только за использование." },
    ],
  },
  principles: {
    items: [
      { title: "Создаём открыто", desc: "Формируем дорожную карту вместе с первыми участниками, и ваш отклик задаёт её." },
      { title: "Разработчик в приоритете", desc: "Понятная документация и API, который приятно интегрировать." },
      { title: "Без скрытых комиссий", desc: "Честные, прозрачные цены, без платы за подключение и без сюрпризов." },
    ],
  },
  how: {
    eyebrow: "Как это работает",
    title: "Запуск в три шага",
    subtitle: "От регистрации до первого платежа за один вечер.",
    steps: [
      { title: "Создайте аккаунт", desc: "Зарегистрируйтесь и сразу получите доступ к панели и тестовым ключам." },
      { title: "Подключите API", desc: "Добавьте наш SDK и начните принимать платежи за минуты." },
      { title: "Получайте оплату", desc: "Смотрите, как платежи приходят и зачисляются прямо в банк." },
    ],
  },
  faq: {
    eyebrow: "Вопросы",
    title: "Частые вопросы",
    items: [
      { q: "Когда запустится Flexpay?", a: "Мы сейчас в разработке и открываем доступ волнами. Запишитесь, чтобы попасть в число первых." },
      { q: "Запись в список платная?", a: "Нет. Это бесплатно и ставит вас первыми в очередь на ранний доступ." },
      { q: "Где будет доступен Flexpay?", a: "Начинаем с недостаточно охваченных рынков, где у бизнеса нет хороших платёжных решений, затем расширяемся. Запишитесь, чтобы узнать, какие регионы запустятся первыми." },
      { q: "Как вы обращаетесь с данными?", a: "Данные шифруются и никогда не продаются. См. нашу Политику конфиденциальности." },
    ],
  },
  cta: {
    title: "Принесите современные платежи на свой рынок",
    subtitle: "Оставьте e-mail и будьте среди первых, кто получит доступ на старте.",
    button: "В список ожидания",
  },
  footer: {
    tagline: "Современные платежи для недостаточно охваченных рынков.",
    product: "Продукт",
    company: "Компания",
    legal: "Право",
    features: "Возможности",
    security: "Безопасность",
    faq: "Вопросы",
    terms: "Условия",
    privacy: "Конфиденциальность",
    cookies: "Cookie",
    contact: "Контакты",
    rights: "Все права защищены.",
  },
  langLabel: "Язык",
};

const tr: Dictionary = {
  nav: { features: "Özellikler", how: "Nasıl çalışır", faq: "SSS", join: "Katıl" },
  hero: {
    badge: "Özel geliştirme aşamasında",
    titlePre: "Yeterince hizmet almayan pazarlar için ",
    titleHighlight: "ödeme altyapısı",
    titlePost: "",
    subtitle:
      "Flexpay, küresel platformların henüz hizmet vermediği ülkelerde girişimlerin ve işletmelerin ödeme kabul etmesine ve tahsil etmesine yardımcı olur. Erken erişim için bekleme listesine katılın.",
    emailPlaceholder: "E-postanızı girin",
    cta: "Listeye katıl",
    ctaLoading: "Katılıyor",
    success: "Listedesiniz",
    successDesc: "Erken erişim açılır açılmaz size e-posta göndereceğiz.",
    errInvalid: "Lütfen geçerli bir e-posta adresi girin.",
    errDuplicate: "Bu e-posta zaten bekleme listesinde.",
    errGeneric: "Bir şeyler ters gitti. Tekrar deneyin.",
    noSpam: "Spam yok. İstediğiniz an çıkın.",
    trustedBy: "Özel geliştirme aşamasında. Erken üyeler önce erişir.",
  },
  features: {
    eyebrow: "Neden Flexpay",
    title: "Ödeme almak için her şey",
    subtitle: "Yeterince hizmet almayan pazarlarda ödeme almanın zor kısımlarını üstlenen tek platform; siz ürününüze odaklanın.",
    items: [
      { title: "Tasarımdan yerel", desc: "Başkalarının atladığı pazarlarda yerel ödeme yöntemleri, para birimleri ve banka ödemeleri." },
      { title: "Geliştiriciler için", desc: "Temiz API'ler, anlık webhook'lar ve dakikalar içinde entegre SDK'ler." },
      { title: "Merkezde güvenlik", desc: "Güçlü şifreleme, güvenli altyapı ve yerleşik dolandırıcılık tespiti." },
      { title: "Şeffaf fiyatlandırma", desc: "Kurulum ücreti ve gizli maliyet yok. Yalnızca kullandığınız kadar ödeyin." },
    ],
  },
  principles: {
    items: [
      { title: "Açıkça geliştiriliyor", desc: "Yol haritasını ilk üyelerimizle şekillendiriyoruz ve geri bildiriminiz yönlendiriyor." },
      { title: "Önce geliştirici", desc: "Net dokümanlar ve entegrasyonu gerçekten keyifli bir API." },
      { title: "Gizli ücret yok", desc: "Dürüst, şeffaf fiyatlandırma; kurulum maliyeti yok, sürpriz yok." },
    ],
  },
  how: {
    eyebrow: "Nasıl çalışır",
    title: "Üç adımda yayında",
    subtitle: "Kayıttan ilk ödemeye bir öğleden sonrada.",
    steps: [
      { title: "Hesabınızı oluşturun", desc: "Kaydolun, panonuza ve test anahtarlarınıza anında erişin." },
      { title: "API'yi entegre edin", desc: "SDK'mizi ekleyin ve dakikalar içinde ödeme almaya başlayın." },
      { title: "Ödemenizi alın", desc: "Ödemelerin gelip doğrudan bankanıza aktarıldığını görün." },
    ],
  },
  faq: {
    eyebrow: "SSS",
    title: "Sıkça sorulan sorular",
    items: [
      { q: "Flexpay ne zaman çıkıyor?", a: "Şu anda geliştiriyoruz ve erişimi dalgalar halinde açacağız. İlklerden olmak için listeye katılın." },
      { q: "Listeye katılmak ücretli mi?", a: "Hayır. Tamamen ücretsiz ve sizi erken erişimde en öne alır." },
      { q: "Flexpay nerelerde olacak?", a: "İşletmelerin iyi ödeme seçenekleri olmayan, yeterince hizmet almayan pazarlardan başlıyor, sonra genişliyoruz. Hangi bölgelerin önce açılacağını öğrenmek için katılın." },
      { q: "Verilerim nasıl işleniyor?", a: "Verileriniz şifrelenir ve asla satılmaz. Ayrıntılar için Gizlilik Politikamıza bakın." },
    ],
  },
  cta: {
    title: "Modern ödemeleri pazarınıza getirin",
    subtitle: "E-postanızı bırakın, açılışta erişen ilk kişilerden olun.",
    button: "Listeye katıl",
  },
  footer: {
    tagline: "Yeterince hizmet almayan pazarlar için modern ödemeler.",
    product: "Ürün",
    company: "Şirket",
    legal: "Yasal",
    features: "Özellikler",
    security: "Güvenlik",
    faq: "SSS",
    terms: "Koşullar",
    privacy: "Gizlilik",
    cookies: "Çerezler",
    contact: "İletişim",
    rights: "Tüm hakları saklıdır.",
  },
  langLabel: "Dil",
};

const ar: Dictionary = {
  nav: { features: "المزايا", how: "كيف يعمل", faq: "الأسئلة", join: "انضم" },
  hero: {
    badge: "قيد التطوير الخاص",
    titlePre: "البنية التحتية للمدفوعات في ",
    titleHighlight: "الأسواق المُهمَلة",
    titlePost: "",
    subtitle:
      "يساعد Flexpay الشركات الناشئة والشركات على قبول وتحصيل المدفوعات في دول لا تخدمها المنصات العالمية بعد. انضم إلى قائمة الانتظار للوصول المبكر.",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    cta: "انضم إلى القائمة",
    ctaLoading: "جارٍ الانضمام",
    success: "أنت على القائمة",
    successDesc: "سنراسلك فور فتح الوصول المبكر.",
    errInvalid: "يرجى إدخال بريد إلكتروني صالح.",
    errDuplicate: "هذا البريد موجود بالفعل في قائمة الانتظار.",
    errGeneric: "حدث خطأ ما. حاول مرة أخرى.",
    noSpam: "بلا رسائل مزعجة. يمكنك إلغاء الاشتراك في أي وقت.",
    trustedBy: "قيد التطوير الخاص. الأعضاء الأوائل يصلون أولًا.",
  },
  features: {
    eyebrow: "لماذا Flexpay",
    title: "كل ما تحتاجه لتتقاضى أموالك",
    subtitle: "منصة واحدة تتولى الأجزاء الصعبة من تحصيل المدفوعات في الأسواق المُهمَلة لتركّز أنت على منتجك.",
    items: [
      { title: "محلي بالتصميم", desc: "طرق دفع محلية وعملات وتحويلات بنكية في الأسواق التي يتجاهلها الآخرون." },
      { title: "مصمم للمطورين", desc: "واجهات برمجة نظيفة، وويبهوكس فورية، وحزم SDK تُدمج في دقائق." },
      { title: "الأمان في الصميم", desc: "تشفير قوي، وبنية تحتية آمنة، وكشف احتيال مدمج." },
      { title: "تسعير شفاف", desc: "بلا رسوم إعداد ولا تكاليف خفية. تدفع فقط مقابل ما تستخدمه." },
    ],
  },
  principles: {
    items: [
      { title: "نبنيه بشفافية", desc: "نرسم خارطة الطريق مع أعضائنا الأوائل وملاحظاتك توجّهها." },
      { title: "المطوّر أولًا", desc: "توثيق واضح وواجهة برمجة مصممة لتكون متعة في الدمج." },
      { title: "بلا رسوم خفية", desc: "تسعير صادق وشفاف، بلا تكاليف إعداد وبلا مفاجآت." },
    ],
  },
  how: {
    eyebrow: "كيف يعمل",
    title: "جاهز في ثلاث خطوات",
    subtitle: "من التسجيل إلى أول دفعة في فترة بعد الظهر.",
    steps: [
      { title: "أنشئ حسابك", desc: "سجّل واحصل فورًا على لوحة التحكم ومفاتيح الاختبار." },
      { title: "ادمج الواجهة", desc: "أضف حزمة SDK وابدأ بقبول المدفوعات في دقائق." },
      { title: "احصل على أموالك", desc: "شاهد المدفوعات تَرِد وتُسوّى مباشرة في بنكك." },
    ],
  },
  faq: {
    eyebrow: "الأسئلة",
    title: "الأسئلة الشائعة",
    items: [
      { q: "متى يُطلق Flexpay؟", a: "نطوّره الآن وسنفتح الوصول على دفعات. انضم إلى القائمة لتكون من الأوائل." },
      { q: "هل الانضمام للقائمة مدفوع؟", a: "لا. الانضمام مجاني تمامًا ويضعك في المقدمة للوصول المبكر." },
      { q: "أين سيتوفر Flexpay؟", a: "نبدأ بالأسواق المُهمَلة حيث تفتقر الشركات إلى خيارات دفع جيدة، ثم نتوسّع. انضم لتعرف أي المناطق ستنطلق أولًا." },
      { q: "كيف تُعالَج بياناتي؟", a: "بياناتك مشفّرة ولا تُباع أبدًا. اطّلع على سياسة الخصوصية." },
    ],
  },
  cta: {
    title: "اجلب مدفوعات حديثة إلى سوقك",
    subtitle: "اترك بريدك وكن من أوائل من يحصل على الوصول عند الإطلاق.",
    button: "انضم إلى القائمة",
  },
  footer: {
    tagline: "مدفوعات حديثة للأسواق المُهمَلة.",
    product: "المنتج",
    company: "الشركة",
    legal: "قانوني",
    features: "المزايا",
    security: "الأمان",
    faq: "الأسئلة",
    terms: "الشروط",
    privacy: "الخصوصية",
    cookies: "ملفات الارتباط",
    contact: "تواصل",
    rights: "جميع الحقوق محفوظة.",
  },
  langLabel: "اللغة",
};

const hi: Dictionary = {
  nav: { features: "विशेषताएँ", how: "यह कैसे काम करता है", faq: "सवाल", join: "जुड़ें" },
  hero: {
    badge: "निजी विकास में",
    titlePre: "वंचित बाज़ारों के लिए ",
    titleHighlight: "भुगतान इंफ्रास्ट्रक्चर",
    titlePost: "",
    subtitle:
      "Flexpay स्टार्टअप और व्यवसायों को उन देशों में भुगतान स्वीकार करने और इकट्ठा करने में मदद करता है जहाँ वैश्विक प्लेटफ़ॉर्म अभी सेवा नहीं देते। जल्दी पहुँच के लिए वेटलिस्ट में शामिल हों।",
    emailPlaceholder: "अपना ईमेल दर्ज करें",
    cta: "वेटलिस्ट में जुड़ें",
    ctaLoading: "जोड़ रहे हैं",
    success: "आप सूची में हैं",
    successDesc: "जैसे ही जल्दी पहुँच खुलेगी, हम आपको ईमेल करेंगे।",
    errInvalid: "कृपया एक मान्य ईमेल पता दर्ज करें।",
    errDuplicate: "यह ईमेल पहले से वेटलिस्ट में है।",
    errGeneric: "कुछ गलत हुआ। कृपया फिर कोशिश करें।",
    noSpam: "कोई स्पैम नहीं। कभी भी अनसब्सक्राइब करें।",
    trustedBy: "निजी विकास में। शुरुआती सदस्यों को पहले पहुँच मिलती है।",
  },
  features: {
    eyebrow: "Flexpay क्यों",
    title: "भुगतान पाने के लिए सब कुछ",
    subtitle: "एक ही प्लेटफ़ॉर्म जो वंचित बाज़ारों में भुगतान पाने के कठिन हिस्से संभालता है ताकि आप अपने उत्पाद पर ध्यान दें।",
    items: [
      { title: "स्थानीय रूप से बना", desc: "स्थानीय भुगतान तरीके, मुद्राएँ और बैंक भुगतान, उन बाज़ारों में जिन्हें दूसरे छोड़ देते हैं।" },
      { title: "डेवलपर्स के लिए बना", desc: "साफ़ API, तुरंत वेबहुक और मिनटों में जुड़ने वाले SDK।" },
      { title: "सुरक्षा केंद्र में", desc: "मजबूत एन्क्रिप्शन, सुरक्षित इन्फ्रास्ट्रक्चर और अंतर्निहित धोखाधड़ी पहचान।" },
      { title: "पारदर्शी मूल्य", desc: "कोई सेटअप शुल्क नहीं, कोई छिपी लागत नहीं। केवल उपयोग के लिए भुगतान करें।" },
    ],
  },
  principles: {
    items: [
      { title: "खुलकर बनाया गया", desc: "हम अपने शुरुआती सदस्यों के साथ रोडमैप बनाते हैं और आपकी राय इसे दिशा देती है।" },
      { title: "पहले डेवलपर", desc: "स्पष्ट दस्तावेज़ और ऐसी API जिसे जोड़ना सचमुच आनंददायक है।" },
      { title: "कोई छिपा शुल्क नहीं", desc: "ईमानदार, पारदर्शी मूल्य, कोई सेटअप लागत नहीं और कोई आश्चर्य नहीं।" },
    ],
  },
  how: {
    eyebrow: "यह कैसे काम करता है",
    title: "तीन चरणों में लाइव",
    subtitle: "साइनअप से पहले भुगतान तक एक दोपहर में।",
    steps: [
      { title: "अपना खाता बनाएँ", desc: "साइन अप करें और डैशबोर्ड व टेस्ट कीज़ तक तुरंत पहुँच पाएँ।" },
      { title: "API जोड़ें", desc: "हमारा SDK जोड़ें और मिनटों में भुगतान लेना शुरू करें।" },
      { title: "भुगतान पाएँ", desc: "भुगतान आते देखें और सीधे अपने बैंक में निपटते देखें।" },
    ],
  },
  faq: {
    eyebrow: "सवाल",
    title: "अक्सर पूछे जाने वाले सवाल",
    items: [
      { q: "Flexpay कब लॉन्च होगा?", a: "हम अभी इसे बना रहे हैं और पहुँच चरणों में देंगे। पहले लोगों में रहने के लिए जुड़ें।" },
      { q: "क्या वेटलिस्ट में जुड़ना मुफ़्त है?", a: "हाँ, बिल्कुल मुफ़्त, और यह आपको जल्दी पहुँच में सबसे आगे रखता है।" },
      { q: "Flexpay कहाँ उपलब्ध होगा?", a: "हम उन वंचित बाज़ारों से शुरू कर रहे हैं जहाँ व्यवसायों के पास अच्छे भुगतान विकल्प नहीं हैं, फिर विस्तार करेंगे। यह जानने के लिए जुड़ें कि कौन से क्षेत्र पहले शुरू होंगे।" },
      { q: "मेरा डेटा कैसे संभाला जाता है?", a: "आपका डेटा एन्क्रिप्टेड है और कभी बेचा नहीं जाता। हमारी गोपनीयता नीति देखें।" },
    ],
  },
  cta: {
    title: "अपने बाज़ार में आधुनिक भुगतान लाएँ",
    subtitle: "अपना ईमेल छोड़ें और लॉन्च पर पहुँच पाने वालों में सबसे पहले बनें।",
    button: "वेटलिस्ट में जुड़ें",
  },
  footer: {
    tagline: "वंचित बाज़ारों के लिए आधुनिक भुगतान।",
    product: "उत्पाद",
    company: "कंपनी",
    legal: "कानूनी",
    features: "विशेषताएँ",
    security: "सुरक्षा",
    faq: "सवाल",
    terms: "शर्तें",
    privacy: "गोपनीयता",
    cookies: "कुकीज़",
    contact: "संपर्क",
    rights: "सर्वाधिकार सुरक्षित।",
  },
  langLabel: "भाषा",
};

const zh: Dictionary = {
  nav: { features: "功能", how: "工作原理", faq: "常见问题", join: "加入" },
  hero: {
    badge: "正在内部开发中",
    titlePre: "为服务不足市场打造的",
    titleHighlight: "支付基础设施",
    titlePost: "",
    subtitle:
      "Flexpay 帮助初创公司和企业在全球平台尚未覆盖的国家收款与回款。加入候补名单，抢先体验。",
    emailPlaceholder: "输入你的邮箱",
    cta: "加入候补名单",
    ctaLoading: "正在加入",
    success: "你已加入名单",
    successDesc: "抢先体验一开放，我们就会发邮件通知你。",
    errInvalid: "请输入有效的邮箱地址。",
    errDuplicate: "该邮箱已在候补名单中。",
    errGeneric: "出了点问题，请重试。",
    noSpam: "绝无垃圾邮件，可随时退订。",
    trustedBy: "正在内部开发中。早期成员优先获得使用权。",
  },
  features: {
    eyebrow: "为什么选 Flexpay",
    title: "收款所需的一切",
    subtitle: "一个平台搞定在服务不足市场中收款的最难部分，让你专注于产品。",
    items: [
      { title: "本地化设计", desc: "在别人忽略的市场，支持本地支付方式、货币与银行结算。" },
      { title: "为开发者而生", desc: "简洁的 API、即时 Webhook，以及几分钟即可接入的 SDK。" },
      { title: "安全为本", desc: "强加密、安全的基础设施与内置的欺诈检测。" },
      { title: "透明定价", desc: "无开通费，无隐藏成本，用多少付多少。" },
    ],
  },
  principles: {
    items: [
      { title: "公开打造", desc: "我们与早期成员共同制定路线图，你的反馈引导方向。" },
      { title: "开发者优先", desc: "清晰的文档，以及让人乐于接入的 API。" },
      { title: "没有隐藏费用", desc: "诚实、透明的定价，没有开通费，也没有意外。" },
    ],
  },
  how: {
    eyebrow: "工作原理",
    title: "三步即可上线",
    subtitle: "一个下午，从注册到首笔收款。",
    steps: [
      { title: "创建账户", desc: "注册后即时获得控制台和测试密钥。" },
      { title: "接入 API", desc: "引入我们的 SDK，几分钟即可开始收款。" },
      { title: "收到款项", desc: "看着款项进来并直接结算到你的银行。" },
    ],
  },
  faq: {
    eyebrow: "常见问题",
    title: "常见问题解答",
    items: [
      { q: "Flexpay 何时上线？", a: "我们正在开发，并将分批开放权限。加入名单即可抢先体验。" },
      { q: "加入名单要收费吗？", a: "不收费。完全免费，并让你在抢先体验中排在前面。" },
      { q: "Flexpay 将在哪些地区提供？", a: "我们先从企业缺乏良好支付选择的服务不足市场起步，随后扩展。加入即可获知哪些地区率先上线。" },
      { q: "我的数据如何处理？", a: "你的数据经过加密且绝不出售。详见我们的隐私政策。" },
    ],
  },
  cta: {
    title: "把现代支付带到你的市场",
    subtitle: "留下邮箱，在我们开放时成为最早获得使用权的一批人。",
    button: "加入候补名单",
  },
  footer: {
    tagline: "为服务不足的市场提供现代支付。",
    product: "产品",
    company: "公司",
    legal: "法律",
    features: "功能",
    security: "安全",
    faq: "常见问题",
    terms: "条款",
    privacy: "隐私",
    cookies: "Cookie",
    contact: "联系",
    rights: "保留所有权利。",
  },
  langLabel: "语言",
};

const ja: Dictionary = {
  nav: { features: "機能", how: "仕組み", faq: "FAQ", join: "参加" },
  hero: {
    badge: "現在プライベート開発中",
    titlePre: "サービスが行き届かない市場のための",
    titleHighlight: "決済インフラ",
    titlePost: "",
    subtitle:
      "Flexpay は、世界的なプラットフォームがまだ対応していない国々で、スタートアップや企業が決済を受け取り、回収できるよう支援します。先行アクセスはウェイトリストから。",
    emailPlaceholder: "メールアドレスを入力",
    cta: "ウェイトリストに参加",
    ctaLoading: "参加中",
    success: "登録が完了しました",
    successDesc: "先行アクセスが開いたらすぐにメールでお知らせします。",
    errInvalid: "有効なメールアドレスを入力してください。",
    errDuplicate: "このメールは既にウェイトリストにあります。",
    errGeneric: "問題が発生しました。もう一度お試しください。",
    noSpam: "スパムなし。いつでも解除できます。",
    trustedBy: "現在プライベート開発中。早期メンバーが最初にアクセスできます。",
  },
  features: {
    eyebrow: "Flexpay を選ぶ理由",
    title: "支払いを受け取るためのすべて",
    subtitle: "サービスが行き届いていない市場で支払いを受け取る難しい部分を一つのプラットフォームが引き受け、あなたはプロダクトに集中できます。",
    items: [
      { title: "ローカル前提の設計", desc: "他社が見落とす市場で、現地の決済手段・通貨・銀行入金に対応。" },
      { title: "開発者のために設計", desc: "クリーンな API、即時の Webhook、数分で組み込める SDK。" },
      { title: "セキュリティを中核に", desc: "強力な暗号化、安全なインフラ、組み込みの不正検知。" },
      { title: "透明な料金", desc: "初期費用も隠れたコストもなし。使った分だけお支払い。" },
    ],
  },
  principles: {
    items: [
      { title: "オープンに開発", desc: "最初のメンバーと一緒にロードマップを形づくり、あなたの声が指針になります。" },
      { title: "開発者ファースト", desc: "明快なドキュメントと、組み込みが純粋に楽しい API。" },
      { title: "隠れた手数料なし", desc: "正直で透明な料金。初期費用も、驚きもありません。" },
    ],
  },
  how: {
    eyebrow: "仕組み",
    title: "3 ステップで稼働",
    subtitle: "登録から初回決済まで、ひと午後で。",
    steps: [
      { title: "アカウント作成", desc: "登録後すぐにダッシュボードとテストキーにアクセス。" },
      { title: "API を組み込む", desc: "SDK を追加して数分で決済を受け付け開始。" },
      { title: "入金を受け取る", desc: "決済が入り、銀行へ直接入金される様子を確認。" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "よくある質問",
    items: [
      { q: "Flexpay はいつ公開されますか？", a: "現在開発中で、段階的にアクセスを開放します。先行体験はウェイトリストから。" },
      { q: "ウェイトリスト参加は有料ですか？", a: "いいえ。完全無料で、先行アクセスの優先権が得られます。" },
      { q: "Flexpay はどこで使えますか？", a: "企業に十分な決済手段がない、サービスの行き届いていない市場から始め、その後拡大します。どの地域が先に開始するか、参加するとお知らせします。" },
      { q: "データはどう扱われますか？", a: "データは暗号化され、決して販売しません。プライバシーポリシーをご覧ください。" },
    ],
  },
  cta: {
    title: "あなたの市場に、現代的な決済を。",
    subtitle: "メールを登録して、ローンチ時に最初にアクセスできる一人になりましょう。",
    button: "ウェイトリストに参加",
  },
  footer: {
    tagline: "サービスが行き届かない市場へ、現代的な決済を。",
    product: "プロダクト",
    company: "会社",
    legal: "法務",
    features: "機能",
    security: "セキュリティ",
    faq: "FAQ",
    terms: "規約",
    privacy: "プライバシー",
    cookies: "Cookie",
    contact: "お問い合わせ",
    rights: "All rights reserved.",
  },
  langLabel: "言語",
};

const ko: Dictionary = {
  nav: { features: "기능", how: "작동 방식", faq: "FAQ", join: "참여" },
  hero: {
    badge: "비공개 개발 중",
    titlePre: "소외된 시장을 위한 ",
    titleHighlight: "결제 인프라",
    titlePost: "",
    subtitle:
      "Flexpay는 글로벌 플랫폼이 아직 서비스하지 않는 국가에서 스타트업과 기업이 결제를 받고 수금할 수 있도록 돕습니다. 얼리 액세스는 대기자 명단에서 시작하세요.",
    emailPlaceholder: "이메일을 입력하세요",
    cta: "대기자 명단 참여",
    ctaLoading: "참여 중",
    success: "명단에 등록되었습니다",
    successDesc: "얼리 액세스가 열리는 즉시 이메일로 알려드릴게요.",
    errInvalid: "유효한 이메일 주소를 입력하세요.",
    errDuplicate: "이미 대기자 명단에 있는 이메일입니다.",
    errGeneric: "문제가 발생했습니다. 다시 시도해 주세요.",
    noSpam: "스팸 없음. 언제든 구독 해지 가능.",
    trustedBy: "비공개 개발 중. 얼리 멤버가 가장 먼저 액세스합니다.",
  },
  features: {
    eyebrow: "왜 Flexpay인가",
    title: "결제를 받기 위한 모든 것",
    subtitle: "소외된 시장에서 결제를 받는 어려운 부분을 한 플랫폼이 처리해, 제품에만 집중할 수 있습니다.",
    items: [
      { title: "현지 중심 설계", desc: "남들이 건너뛰는 시장에서 현지 결제수단, 통화, 은행 정산을 지원." },
      { title: "개발자를 위한 설계", desc: "깔끔한 API, 즉각적인 웹훅, 몇 분이면 연동되는 SDK." },
      { title: "보안을 핵심에", desc: "강력한 암호화, 안전한 인프라, 내장된 사기 탐지." },
      { title: "투명한 요금", desc: "설치 비용도 숨은 비용도 없습니다. 사용한 만큼만 지불하세요." },
    ],
  },
  principles: {
    items: [
      { title: "공개적으로 개발", desc: "초기 멤버와 함께 로드맵을 만들고, 여러분의 피드백이 방향을 정합니다." },
      { title: "개발자 우선", desc: "명확한 문서와, 연동이 즐거운 API." },
      { title: "숨은 수수료 없음", desc: "정직하고 투명한 가격. 설치 비용도, 놀랄 일도 없습니다." },
    ],
  },
  how: {
    eyebrow: "작동 방식",
    title: "세 단계면 시작",
    subtitle: "가입부터 첫 결제까지 하루 오후면 충분합니다.",
    steps: [
      { title: "계정 만들기", desc: "가입하면 대시보드와 테스트 키에 바로 접근할 수 있습니다." },
      { title: "API 연동", desc: "SDK를 추가하고 몇 분 만에 결제를 받기 시작하세요." },
      { title: "정산 받기", desc: "결제가 들어와 바로 은행으로 정산되는 것을 확인하세요." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "자주 묻는 질문",
    items: [
      { q: "Flexpay는 언제 출시되나요?", a: "현재 개발 중이며 단계적으로 액세스를 엽니다. 먼저 경험하려면 명단에 참여하세요." },
      { q: "명단 참여는 유료인가요?", a: "아니요. 완전히 무료이며 얼리 액세스 우선권을 드립니다." },
      { q: "Flexpay는 어디서 사용할 수 있나요?", a: "기업에 좋은 결제 수단이 없는 소외된 시장부터 시작해 점차 확장합니다. 어떤 지역이 먼저 열리는지 참여하면 알려드립니다." },
      { q: "제 데이터는 어떻게 처리되나요?", a: "데이터는 암호화되며 절대 판매하지 않습니다. 개인정보처리방침을 확인하세요." },
    ],
  },
  cta: {
    title: "당신의 시장에 현대적인 결제를",
    subtitle: "이메일을 남기고 출시 때 가장 먼저 액세스하는 사람이 되세요.",
    button: "대기자 명단 참여",
  },
  footer: {
    tagline: "소외된 시장을 위한 현대적인 결제.",
    product: "제품",
    company: "회사",
    legal: "법적 고지",
    features: "기능",
    security: "보안",
    faq: "FAQ",
    terms: "약관",
    privacy: "개인정보",
    cookies: "쿠키",
    contact: "문의",
    rights: "모든 권리 보유.",
  },
  langLabel: "언어",
};

export const dictionaries: Record<string, Dictionary> = {
  en, es, fr, de, pt, it, nl, ru, tr, ar, hi, zh, ja, ko,
};

export type LanguageMeta = { code: string; name: string; dir: "ltr" | "rtl" };

export const languages: LanguageMeta[] = [
  { code: "en", name: "English", dir: "ltr" },
  { code: "es", name: "Español", dir: "ltr" },
  { code: "fr", name: "Français", dir: "ltr" },
  { code: "de", name: "Deutsch", dir: "ltr" },
  { code: "pt", name: "Português", dir: "ltr" },
  { code: "it", name: "Italiano", dir: "ltr" },
  { code: "nl", name: "Nederlands", dir: "ltr" },
  { code: "ru", name: "Русский", dir: "ltr" },
  { code: "tr", name: "Türkçe", dir: "ltr" },
  { code: "ar", name: "العربية", dir: "rtl" },
  { code: "hi", name: "हिन्दी", dir: "ltr" },
  { code: "zh", name: "中文", dir: "ltr" },
  { code: "ja", name: "日本語", dir: "ltr" },
  { code: "ko", name: "한국어", dir: "ltr" },
];

export const DEFAULT_LANG = "en";

export function resolveLang(input: string | undefined | null): string {
  if (!input) return DEFAULT_LANG;
  const lower = input.toLowerCase();
  if (dictionaries[lower]) return lower;
  const base = lower.split("-")[0];
  if (dictionaries[base]) return base;
  return DEFAULT_LANG;
}

// Map an ISO country code (from IP geolocation) to the best UI language.
const countryToLang: Record<string, string> = {
  // Spanish
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es", EC: "es",
  GT: "es", CU: "es", BO: "es", DO: "es", HN: "es", PY: "es", SV: "es", NI: "es",
  CR: "es", PA: "es", UY: "es", PR: "es",
  // French
  FR: "fr", BE: "fr", MC: "fr", SN: "fr", CI: "fr", ML: "fr", CD: "fr", CG: "fr",
  GA: "fr", BJ: "fr", TG: "fr", NE: "fr", BF: "fr", GN: "fr", CM: "fr",
  // German
  DE: "de", AT: "de", CH: "de", LI: "de", LU: "de",
  // Portuguese
  PT: "pt", BR: "pt", AO: "pt", MZ: "pt", CV: "pt", GW: "pt", ST: "pt",
  // Italian
  IT: "it", SM: "it", VA: "it",
  // Dutch
  NL: "nl", SR: "nl", AW: "nl",
  // Russian
  RU: "ru", BY: "ru", KZ: "ru", KG: "ru",
  // Turkish
  TR: "tr",
  // Arabic
  SA: "ar", AE: "ar", EG: "ar", MA: "ar", DZ: "ar", TN: "ar", IQ: "ar", JO: "ar",
  KW: "ar", QA: "ar", BH: "ar", OM: "ar", YE: "ar", LB: "ar", LY: "ar", SD: "ar",
  SY: "ar", PS: "ar", MR: "ar",
  // Chinese
  CN: "zh", TW: "zh", HK: "zh", MO: "zh", SG: "zh",
  // Japanese
  JP: "ja",
  // Korean
  KR: "ko", KP: "ko",
  // English-first markets
  US: "en", GB: "en", AU: "en", CA: "en", NZ: "en", IE: "en", ZA: "en", IN: "en",
  NG: "en", KE: "en", GH: "en", PH: "en",
};

export function langFromCountry(code: string | undefined | null): string | null {
  if (!code) return null;
  return countryToLang[code.toUpperCase()] ?? null;
}
