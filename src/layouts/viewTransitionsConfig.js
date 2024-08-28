let scrollPosition = null;

document.addEventListener("astro:before-swap", (ev) => {
  const exceptions = [
    "/productos/morteros-secos-premezclados",
    "/productos/estucos",
    "/productos/adhesivos",
  ];

  exceptions.includes(ev.to.pathname) && (scrollPosition = window.scrollY);
});

document.addEventListener("astro:after-swap", () => {
  scrollPosition && window.scrollTo(0, scrollPosition);
  scrollPosition = null;
});
