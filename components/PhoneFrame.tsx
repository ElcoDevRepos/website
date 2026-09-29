import Image from "next/image";

/** A phone-shaped frame around an app screenshot. */
export function PhoneFrame({ src, alt, className = "", priority = false, sizes = "(min-width: 1024px) 240px, 40vw" }: { src: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  return (
    <div className={`overflow-hidden rounded-[2.2rem] border-[6px] border-ink bg-ink shadow-[0_30px_60px_-20px_rgba(11,15,26,0.45)] ${className}`}>
      <Image src={src} alt={alt} width={540} height={1170} sizes={sizes} priority={priority} className="h-full w-full object-cover object-top" />
    </div>
  );
}
