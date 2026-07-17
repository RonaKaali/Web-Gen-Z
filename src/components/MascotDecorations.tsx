export default function MascotDecorations() {
  return (
    <>
      {/* LEFT SIDE - scroll bersama halaman */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-28 lg:w-36 xl:w-48 pointer-events-none z-10 flex flex-col justify-between py-20">
        <div className="w-full flex justify-start">
          <img src="/MASKOT 1.png" alt="" className="w-full h-auto object-contain opacity-80" draggable={false} />
        </div>
        <div className="w-full flex justify-start">
          <img src="/MASKOT 3.png" alt="" className="w-full h-auto object-contain opacity-80" draggable={false} />
        </div>
      </div>

      {/* RIGHT SIDE - scroll bersama halaman */}
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-28 lg:w-36 xl:w-48 pointer-events-none z-10 flex flex-col justify-between py-20">
        <div className="w-full flex justify-end">
          <img src="/MASKOT 2.png" alt="" className="w-full h-auto object-contain opacity-80" draggable={false} />
        </div>
        <div className="w-full flex justify-end">
          <img src="/MASKOT 4.png" alt="" className="w-full h-auto object-contain opacity-80" draggable={false} />
        </div>
      </div>
    </>
  );
}
