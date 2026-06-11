const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-site-nav]");
const revealItems = document.querySelectorAll(".reveal");

const translations = {
  es: {
    meta: {
      title: "JKLANGAMES - Estudio de videojuegos móviles",
      description:
        "Estudio independiente de videojuegos móviles creando juegos divertidos.",
    },
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    nav: {
      home: "Inicio",
      games: "Juegos",
      support: "Soporte",
      privacy: "Privacidad",
    },
    common: {
      comingSoon: "Próximamente",
    },
    home: {
      eyebrow: "Estudio independiente de juegos móviles",
      heroTitle: "Creating fun games for everyone",
      heroCopy:
        "Estudio independiente centrado en crear experiencias móviles entretenidas.",
      ourGames: "Nuestros juegos",
      contactUs: "Contactar",
      status: "Proyectos móviles en desarrollo",
      metricMobile: "Móvil",
      metricGlobal: "Global",
      metricPlayers: "Jugadores de todo el mundo",
      aboutEyebrow: "Sobre nosotros",
      aboutTitle: "Entretenimiento accesible y bien construido",
      aboutText:
        "JKLANGAMES es un estudio independiente de videojuegos centrado en crear juegos divertidos, accesibles y atractivos para jugadores de todo el mundo.",
      gamesTitle: "Próximos lanzamientos móviles",
      viewRoadmap: "Ver juegos",
      moreGames: "Se anunciarán más juegos a medida que avance la producción.",
      getInTouch: "Contactar",
    },
    games: {
      eyebrow: "Portfolio de JKLANGAMES",
      title: "Nuestros juegos",
      intro:
        "Una línea de experiencias móviles diseñada para partidas rápidas, buen rendimiento y accesibilidad para una audiencia amplia.",
      inDevelopment: "En desarrollo",
      cardCopy: "Nuevas experiencias móviles están actualmente en desarrollo.",
    },
    support: {
      eyebrow: "Soporte para jugadores",
      title: "Soporte",
      intro:
        "¿Necesitas ayuda con un juego de JKLANGAMES? Nuestro canal de soporte está preparado para preguntas de juego, problemas técnicos, consultas de tienda y feedback.",
      contactTitle: "Contactar con soporte",
      contactCopy:
        "Para recibir ayuda, envíanos tu modelo de dispositivo, versión del sistema operativo, nombre del juego y una breve descripción del problema.",
      privacyTitle: "Solicitudes de privacidad",
      privacyCopy:
        "Para preguntas de privacidad, solicitudes de datos o dudas relacionadas con privacidad, contacta directamente con nuestro equipo.",
      includeTitle: "Qué incluir",
      includeGame: "Título del juego y versión de la app.",
      includeDevice: "Modelo de dispositivo y versión del sistema.",
      includeSteps: "Pasos para reproducir el problema.",
      includeScreens: "Capturas o referencias de compra si aplica.",
    },
    privacy: {
      eyebrow: "Legal",
      title: "Política de privacidad",
      updated: "Última actualización: 11 de junio de 2026",
      overviewTitle: "Resumen",
      overviewCopy:
        "JKLANGAMES crea juegos móviles para jugadores de todo el mundo. Esta Política de privacidad explica cómo se puede recopilar, usar y compartir información cuando usas nuestros juegos, sitios web o servicios relacionados.",
      collectTitle: "Información que podemos recopilar",
      collectCopy:
        "Nuestros juegos pueden recopilar información técnica como tipo de dispositivo, sistema operativo, idioma, versión de la app, eventos de juego, informes de fallos y región aproximada. Si contactas con soporte, también podemos tratar la información que decidas incluir en tu mensaje.",
      adsTitle: "Publicidad y analítica",
      adsCopy:
        "Nuestras apps móviles pueden mostrar anuncios y utilizar servicios de publicidad o analítica de terceros. Estos socios pueden tratar identificadores del dispositivo, identificadores publicitarios, datos de uso y ubicación aproximada para entregar, medir y mejorar anuncios, incluidos anuncios personalizados cuando la ley y la configuración de tu dispositivo lo permitan.",
      useTitle: "Cómo usamos la información",
      useCopy:
        "Usamos la información para operar nuestros juegos, mejorar la experiencia, entender el rendimiento, corregir errores, responder solicitudes de soporte, proteger nuestros servicios y cumplir obligaciones legales.",
      choicesTitle: "Tus opciones",
      choicesCopy:
        "Puedes limitar el seguimiento publicitario o restablecer tu identificador de publicidad en los ajustes de tu dispositivo. También puedes contactarnos para solicitar acceso, corrección o eliminación de información personal cuando corresponda.",
      childrenTitle: "Menores",
      childrenCopy:
        "Nuestros juegos están dirigidos a una audiencia general salvo que la ficha de una app indique lo contrario. No recopilamos conscientemente información personal de menores sin el consentimiento adecuado cuando sea necesario.",
      securityTitle: "Seguridad de los datos",
      securityCopy:
        "Utilizamos medidas técnicas y organizativas razonables para proteger la información. Ningún servicio online puede garantizar seguridad completa, pero trabajamos para tratar los datos de los jugadores de forma responsable.",
      changesTitle: "Cambios en esta política",
      changesCopy:
        "Podemos actualizar esta Política de privacidad a medida que evolucionen nuestros juegos y servicios. Las versiones actualizadas se publicarán en esta página con una fecha revisada.",
      contactTitle: "Contacto",
      contactCopyA: "Para preguntas o solicitudes de privacidad, contacta con",
      contactCopyB: "Para soporte a jugadores, contacta con",
    },
  },
  en: {
    meta: {
      title: "JKLANGAMES - Mobile Game Studio",
      description: "Independent mobile game studio creating fun games.",
    },
    menuOpen: "Open menu",
    menuClose: "Close menu",
    nav: {
      home: "Home",
      games: "Games",
      support: "Support",
      privacy: "Privacy",
    },
    common: {
      comingSoon: "Coming Soon",
    },
    home: {
      eyebrow: "Independent Mobile Game Studio",
      heroTitle: "Creating fun games for everyone",
      heroCopy:
        "Independent game studio focused on building entertaining mobile experiences.",
      ourGames: "Our Games",
      contactUs: "Contact Us",
      status: "Mobile projects in development",
      metricMobile: "Mobile",
      metricGlobal: "Global",
      metricPlayers: "Players worldwide",
      aboutEyebrow: "About Us",
      aboutTitle: "Built for accessible entertainment",
      aboutText:
        "JKLANGAMES is an independent game studio focused on creating fun, accessible and engaging games for players around the world.",
      gamesTitle: "Future mobile releases",
      viewRoadmap: "View games",
      moreGames: "More games will be announced as production moves forward.",
      getInTouch: "Get in touch",
    },
    games: {
      eyebrow: "JKLANGAMES Portfolio",
      title: "Our Games",
      intro:
        "A focused lineup of mobile-first entertainment is being designed for quick play, smooth performance and broad accessibility.",
      inDevelopment: "In Development",
      cardCopy: "New mobile experiences are currently in development.",
    },
    support: {
      eyebrow: "Player Support",
      title: "Support",
      intro:
        "Need help with a JKLANGAMES title? Our support channel is ready for gameplay questions, technical issues, store concerns and feedback.",
      contactTitle: "Contact Support",
      contactCopy:
        "For assistance, send a message with your device model, operating system version, game name and a short description of the issue.",
      privacyTitle: "Privacy Requests",
      privacyCopy:
        "For privacy questions, data requests or account-related privacy concerns, contact the privacy team directly.",
      includeTitle: "What To Include",
      includeGame: "Game title and app store version.",
      includeDevice: "Your device model and OS version.",
      includeSteps: "Steps to reproduce the issue.",
      includeScreens: "Screenshots or purchase references when relevant.",
    },
    privacy: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      updated: "Last updated: June 11, 2026",
      overviewTitle: "Overview",
      overviewCopy:
        "JKLANGAMES creates mobile games for players around the world. This Privacy Policy explains how information may be collected, used and shared when you use our games, websites or related services.",
      collectTitle: "Information We May Collect",
      collectCopy:
        "Our games may collect technical information such as device type, operating system, language settings, app version, gameplay events, crash reports and approximate region. If you contact support, we may also process the information you choose to provide in your message.",
      adsTitle: "Advertising And Analytics",
      adsCopy:
        "Our mobile apps may display ads and use third-party advertising or analytics services. These partners may process device identifiers, ad identifiers, usage data and approximate location to deliver, measure and improve ads, including personalized ads where permitted by law and by your device settings.",
      useTitle: "How We Use Information",
      useCopy:
        "We use information to operate our games, improve gameplay, understand performance, fix bugs, respond to support requests, protect our services and comply with legal obligations.",
      choicesTitle: "Your Choices",
      choicesCopy:
        "You can limit ad tracking or reset your advertising identifier in your device settings. You may also contact us to request access, correction or deletion of personal information where applicable.",
      childrenTitle: "Children",
      childrenCopy:
        "Our games are intended for a general audience unless a specific app listing states otherwise. We do not knowingly collect personal information from children without appropriate consent where required.",
      securityTitle: "Data Security",
      securityCopy:
        "We use reasonable technical and organizational measures to protect information. No online service can guarantee complete security, but we work to keep player data handled responsibly.",
      changesTitle: "Changes To This Policy",
      changesCopy:
        "We may update this Privacy Policy as our games and services evolve. Updated versions will be posted on this page with a revised date.",
      contactTitle: "Contact",
      contactCopyA: "For privacy questions or requests, contact",
      contactCopyB: "For player support, contact",
    },
  },
};

const getNestedValue = (source, path) =>
  path.split(".").reduce((value, key) => value?.[key], source);

const getPreferredLanguage = () => {
  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || "es"];
  const match = browserLanguages
    .map((language) => language.toLowerCase().slice(0, 2))
    .find((language) => language === "es" || language === "en");

  return match || "es";
};

const applyLanguage = () => {
  const lang = getPreferredLanguage();
  const dictionary = translations[lang];
  document.documentElement.lang = lang;
  document.title = dictionary.meta.title;

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", dictionary.meta.description);
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", dictionary.meta.title);
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute("content", dictionary.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getNestedValue(dictionary, element.dataset.i18n);
    if (value) {
      element.textContent = value;
    }
  });

  navToggle?.setAttribute("aria-label", dictionary.menuOpen);
};

applyLanguage();

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    const dictionary = translations[document.documentElement.lang] || translations.es;
    navToggle.setAttribute("aria-label", isOpen ? dictionary.menuClose : dictionary.menuOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      document.body.classList.remove("nav-open");
      const dictionary = translations[document.documentElement.lang] || translations.es;
      navToggle.setAttribute("aria-label", dictionary.menuOpen);
    }
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
