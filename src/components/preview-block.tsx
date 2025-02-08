import { Snippets } from "@/types/snippets-types";

interface PreviewBlockProps {
  snippet: Snippets;
}

export function PreviewBlock({ snippet }: PreviewBlockProps) {

  return(
    <div className="w-full md:aspect-video border rounded-xl overflow-x-auto scrollbar-custom bg-zinc-300">
      {snippet.category === "footer" && (
        <div className="w-[600px] h-full mx-auto block bg-white"/>
      )}

      <div className="" dangerouslySetInnerHTML={{ __html: snippet.reactCode }}/>

      {snippet.category === "header" && (
        <div className="w-[600px] h-full mx-auto block bg-white"/>
      )}
    </div>
  );
}