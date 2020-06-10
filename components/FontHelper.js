import FontFaceObserver from "fontfaceobserver";

const LoadFonts = () => {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Pacifico&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const pacifico = new FontFaceObserver("Pacifico");

  pacifico
    .load()
    .then(() => {
      console.log("Fonts have loaded");
    })
    .catch((reason) => console.log(reason));
};

export default LoadFonts;
