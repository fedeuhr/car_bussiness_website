export const scroller = (tagDestino, desplazamiento) => {
  setTimeout(() => {
    let tagContenedor = document.querySelector(tagDestino);
    if (tagContenedor) {
      let tagAltura = tagContenedor.offsetTop;
      window.scroll({
        top: tagAltura - desplazamiento,
        behavior: "smooth",
      });
    }
  }, 400);
};
