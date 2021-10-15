import React from "react";
import { AnimatePresence } from "framer-motion";
import LogoBar from "../components/logo-bar";
import "../styles/global.css";
import "../styles/bganimation.scss";

export default function MyApp({ Component, pageProps }) {
  const shapeRef = React.useRef();
  const contentRef = React.useRef();
  React.useEffect(() => {
    const shape = shapeRef.current;
    if (!shape) return;
    var html = "";
    for (var i = 1; i < 50; i++) {
      html +=
        '<div class="shape-container--' +
        i +
        ' shape-animation"><div class="random-shape"></div></div>';
    }
    var innershape = (shape.innerHTML += html);
    const pagecontent = contentRef.current;
    console.log(pagecontent);
    const contentMinHeight = pagecontent.clientHeight;
    shape.style.minHeight = `${contentMinHeight}px`;
  });
  return (
    <div className={`app-wrapper containter`}>
      <div ref={shapeRef} className='shape'></div>
      <div className='innercontainer' ref={contentRef}>
        <LogoBar />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
    </div>
  );
}
