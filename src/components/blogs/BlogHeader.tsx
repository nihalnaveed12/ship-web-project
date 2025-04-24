import Image from "next/image";

// components/BlogHeader.tsx
export function BlogHeader({ title , img }: { title: string; img: string }) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <Image src={img} alt={title} height={1000} width={1000} className="rounded-[12px]"/>
      </div>
    );
  }
  