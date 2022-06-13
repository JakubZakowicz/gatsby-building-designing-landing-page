export const animate = (displayed, translate) => {
  return {
    transform: displayed ? "translate(0)" : `translate(${translate}px)`,
    opacity: displayed ? 1 : 0,
  }
}