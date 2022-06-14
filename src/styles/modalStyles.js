export const navbarModalStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    display: "none",
  },
}

export const portfolioModalStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.75)",
    zIndex: "100000",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "80%",
    background: "transparent",
    overflow: "hidden",
    border: "none",
  },
}
