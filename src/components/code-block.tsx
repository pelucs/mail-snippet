"use client";

import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';

import { Snippets } from "@/types/snippets-types";
import { useEffect } from "react";

interface PreviewBlockProps {
  snippet: Snippets;
}

export function CodeBlock({ snippet }: PreviewBlockProps) {
    
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="w-full h-fit pb-2 border rounded-xl overflow-hidden bg-zinc-900">
      <div className="w-full h-10 rounded-tl-xl bg-zinc-800">
        <span className="w-fit px-5 h-full flex items-center bg-zinc-700/40">
          index.html
        </span>
      </div>

      <div>
        <pre className="p-3 text-left h-full overflow-y-auto scrollbar-custom pb-2">
          <code className="text-sm language-html bg-transparent">
            {snippet.htmlCode}
          </code>
        </pre>
      </div>
    </div>
  );
}