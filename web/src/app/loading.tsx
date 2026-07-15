import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A2333]">
      <div className="flex flex-col items-center gap-6 animate-pulse">
        <Image
          src="/images/logo-white.png"
          alt="Space Node Architects loading..."
          width={80}
          height={80}
          className="object-contain w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
          priority
        />
        <div className="w-48 h-px bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-white/60 w-full origin-left animate-[loading-bar_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
