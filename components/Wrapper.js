import { twMerge } from "tailwind-merge";
function Wrapper({ children, className = "" }) {
  return (
    <div className={twMerge(" h-96 mx-auto max-w-[60rem]", className)}>
      {children}
    </div>
  );
}

export default Wrapper;
