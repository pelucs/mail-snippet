"use client"

import Link from "next/link";

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button";
import { snippets } from "@/snippets/snippets";
import { Snippets } from "@/types/snippets-types";
import { Separator } from "@/components/ui/separator";
import { AdaptedFragments } from "@/components/adapted-fragments";
import { useEffect, useState } from "react";

export default function Componentes() {

  const [allSnippets, setAllSnippets] = useState<Map<string, Snippets[]>>(new Map());

  useEffect(() => {

    const snippetsMap = new Map<string, Snippets[]>();
    
    snippets.forEach(item => {
      const category = item.category;

      if(!snippetsMap.has(category)) {
        snippetsMap.set(category, []);
      }

      snippetsMap.get(category)?.push(item);
    });

    setAllSnippets(snippetsMap);

  }, []);

  return(
    <div className="container-default">
      <Header/>

      <div className="min-h-screen p-5 md:p-10 space-y-10">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">
            Componentes
          </h1>
          
          <p className="max-w-sm text-muted-foreground">
            Headers, Footers, Grids e muito mais — tudo o que você precisa para construção de uma peça de email
          </p>
        </div>

        {[...allSnippets.entries()].map(([category, snippetsFromMap]) => (
          <div 
            key={category} 
            className="space-y-2"
          >
            <h1 className="text-xl capitalize flex items-center gap-2">
              {category}

              <span className="py-px px-2 text-xs bg-gradient-to-tr to-blue-500 from-pink-500 rounded-full animate-bounce">
                Novo
              </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {snippetsFromMap.map(snippet => (
                <div key={snippet.slug} className="w-full flex flex-col gap-2 group">
                  <div className="h-full overflow-x-auto scrollbar-custom pb-2 md:p-0">
                    <Button
                      asChild
                      className="w-fit h-full p-0 flex items-start bg-[#ebebeb] border-none group-hover:opacity-80 transition-all"
                    >
                      <Link href={`/componentes/${category}/${snippet.slug}`} className="flex items-start overflow-hidden">
                        <div dangerouslySetInnerHTML={{ __html: snippet.reactCode }}/>
                      </Link>
                    </Button>
                  </div>

                  <Link href={`/componentes/${category}/${snippet.slug}`} className="text-muted-foreground group-hover:text-white transition-all">
                    {snippet.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}

        <Separator/>

        <AdaptedFragments/>
      </div>

      <Footer/>
    </div>
  );
} 