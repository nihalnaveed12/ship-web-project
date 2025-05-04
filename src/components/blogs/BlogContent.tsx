// components/BlogContent.tsx
import { ContentBlock } from "@/data/blog";

export function BlogContent({ content }: { content: ContentBlock[] }) {
  return (
    <div className="prose max-w-none">
      {content.map((block, index) => {
        if (block.type === "paragraph-1") {
          return (
            <p className="py-2 text-[14px] text-zinc-600" key={index}>
              {block.value}
            </p>
          );
        } else if (block.type === "paragraph") {
          return (
            <p className="py-2 text-[14px] text-zinc-600" key={index}>
              {block.value}
            </p>
          );
        } else if (block.type === "heading") {
          return (
            <h2 className="pt-2 text-xl font-semibold" key={index}>
              {block.value}
            </h2>
          );
        }
        return null;
      })}
    </div>
  );
}
