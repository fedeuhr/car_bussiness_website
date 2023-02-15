/*ir hacia arriba*/
export const goTop = (behavior) => {
  window.scroll({
    top: 0,
    behavior: behavior ? "smooth" : undefined,
  });
};
