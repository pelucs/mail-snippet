"use client"

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export function MenuPopover() {

  const [activeMenu, setActiveMenu] = useState(false);

  return(
    <Popover onOpenChange={setActiveMenu}>
      <Button
        asChild
        size="icon" 
        variant="secondary" 
        className="border bg-secondary/70"
      >
        <PopoverTrigger>
          {activeMenu ? <X className="size-4"/> : <Menu className="size-4"/>}
        </PopoverTrigger>
      </Button>

      <PopoverContent align="end" className="relative top-1 w-[calc(100vw-40px)]">
        <nav className="flex flex-col items-center">
          <Button asChild variant="ghost">
            <Link href="/">Início</Link>
          </Button>

          <Button asChild variant="ghost">
            <Link href="/componentes">Componentes</Link>
          </Button>

          <Button asChild variant="ghost">
            <Link href="/components">Sobre nós</Link>
          </Button>
        </nav>
      </PopoverContent>
    </Popover>
  );
}