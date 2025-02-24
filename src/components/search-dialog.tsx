"use client"

import Link from "next/link";

import { Button } from "./ui/button";
import { useState } from "react";
import { snippets } from "@/snippets/snippets";
import { valueFormated } from "@/helpers/expression-regular";
import { CornerDownRight, Menu, Search } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogOverlay, 
  DialogPortal, 
  DialogTitle, 
  DialogTrigger 
} from "./ui/dialog";
import { MenuPopover } from "./menu-popover";

export function SearchDialog() {

  const [search, setSearch] = useState<string>("");

  const filteringSnippets = search.length > 0 ? snippets.filter(item => (
    valueFormated(item.title).includes(valueFormated(search)) ||
    valueFormated(item.slug).includes(valueFormated(search)) ||
    valueFormated(item.category).includes(valueFormated(search))
  ))
  : snippets;

  return(
    <Dialog>
      <div className="hidden sm:block">
        <Button asChild size="icon" className="size-8">
          <DialogTrigger>
            <Search className="size-2" />
          </DialogTrigger>
        </Button>
      </div>

      <div className="w-full flex gap-2 sm:hidden">
        <Button 
          asChild 
          variant="ghost"
          className="w-full flex-1 border bg-secondary/70 text-muted-foreground"
        >
          <DialogTrigger>
            Pesquisar...
          </DialogTrigger>
        </Button>

        <MenuPopover/>
      </div>

      <DialogPortal>
        <DialogOverlay/>

        <DialogContent className="pt-0 pb-2 px-0">
          <div>
            <div className="relative">
              <Search className="size-4 text-muted-foreground absolute top-4 left-4"/>

              <input 
                placeholder="Pesquise aqui"
                onChange={e => setSearch(e.target.value)}
                className="w-full h-12 pl-11 pr-12 border-x-0 border-t-0 border-b rounded-none focus:outline-none 
                bg-transparent placeholder:text-zinc-600"
              /> 
            </div>
          </div>

          <div className="space-y-2">
            <DialogTitle className="px-4 leading-none text-xs text-muted-foreground font-normal">
              {search && (filteringSnippets.length === 0) ? (
                "Nenhum resultado"
              ) : (
                "Snippets"
              )}
            </DialogTitle>

            <div className="px-2 flex flex-col">
              {filteringSnippets.map(snippet => (
                <Button
                  asChild 
                  variant="ghost"
                  key={snippet.slug}
                  className="h-10 px-2 justify-between transition-all" 
                >
                  <Link href={`/componentes/${snippet.category}/${snippet.slug}`}>
                    {snippet.title}

                    <CornerDownRight className="size-4"/>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}