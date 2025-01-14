export function ButtonGlitchBrightness() {
    return (
      <button className="font-rubik group relative inline-flex items-center gap-1 overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 to-violet-700 px-4 py-2 text-sm font-medium text-white duration-300 hover:from-violet-600 hover:to-violet-800">
        <TextGlitch text="Work With Us" />
        <Brightness />
      </button>
    );
  }
  
  function TextGlitch({ text }: { text: string }) {
    return (
      <div className="font-rubik relative overflow-hidden">
        <span className="invisible">{text}</span>
        <span className="absolute left-0 top-0 font-medium transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
          {text}
        </span>
        <span className="absolute left-0 top-0 translate-y-full font-medium transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
          {text}
        </span>
      </div>
    );
  }
  
  function Brightness() {
    return (
      <div className="absolute inset-0 flex h-full w-full animate-brightness justify-center">
        <div className="relative h-full w-8 bg-violet-400/20 blur" />
      </div>
    );
  }
  