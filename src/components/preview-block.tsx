import { useEffect, useRef, useState } from "react";
import { Snippets } from "@/types/snippets-types";

interface PreviewBlockProps {
  snippet: Snippets;
}

export function PreviewBlock({ snippet }: PreviewBlockProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
  }, [snippet.reactCode]);

  return (
    <div className="w-full md:aspect-video border rounded-xl overflow-x-auto scrollbar-custom bg-zinc-300">
      {snippet.category === "footer" && (
        <div
          className="w-[600px] mx-auto block bg-white"
          style={{ height: `calc(100% - ${contentHeight}px)` }}
        />
      )}

      <div ref={contentRef} dangerouslySetInnerHTML={{ __html: snippet.reactCode }} />

      {snippet.category === "header" && (
        <div
          className="w-[600px] mx-auto block bg-white"
          style={{ height: `calc(100% - ${contentHeight}px)` }}
        />
      )}
    </div>
  );
}
