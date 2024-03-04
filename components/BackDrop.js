import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({children, setNavbarOpen}) {
  // const hiddenAnimationState = { opacity: 0, y: 30 };
  return createPortal(
    <>
      <div onClick={()=>setNavbarOpen(false)} className="fixed w-full h-[100vh] bottom-0 top-0 left-0 z-30 bg-black/60 backdrop-blur-lg" />
      <>
        {children}
      </>
     
    </>,
    document.getElementById('modal')
  );
}