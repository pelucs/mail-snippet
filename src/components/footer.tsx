"use client"

import Link from "next/link";

import { Mail, MoveUp } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="py-5 md:py-3 px-7 flex flex-col items-center md:flex-row md:justify-between gap-4 md:gap-6 border-t border-dashed text-muted-foreground">
      <span>
        &copy;2025 - Todos os direitos reservados
      </span>

      <h1>
        MailSnippet
      </h1>

      <div className="flex items-center gap-4">
        <nav className="flex items-center gap-2">
          <Button asChild size="icon" className="size-8">
            <a href="mailto:">
              <Mail className="size-2"/>
            </a>
          </Button>
        </nav>

        <Separator orientation="vertical" className="h-5" />

        <Button 
          size="sm" 
          variant="secondary"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
        >
          Voltar ao topo 
          <MoveUp className="size-2"/>
        </Button>
      </div>
    </footer>
  );
}