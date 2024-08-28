let scrollPosition = null;

document.addEventListener("astro:before-swap", (ev) => {
  // *Lista de paginas que mantendrán el scroll
  const exceptions = [
    "/productos/morteros-secos-premezclados",
    "/productos/estucos",
    "/productos/adhesivos",
  ];

  // * Indicamos que si el path no es el home, entonces se mantiene el scroll de la pagina anterior
  ev.from.pathname !== "/" &&
    exceptions.includes(ev.to.pathname) &&
    (scrollPosition = window.scrollY);
});

//  Limpia el scroll cuando se navega a otra pagina
document.addEventListener("astro:after-swap", () => {
  scrollPosition && window.scrollTo(0, scrollPosition);
  scrollPosition = null;
});
