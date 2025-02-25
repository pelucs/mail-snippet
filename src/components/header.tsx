import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { SearchDialog } from "./search-dialog";
import { FeedbackPopover } from "./feedback-popover";

export function Header() {
  return (
    <header className="w-full h-14 px-5 md:px-7 flex items-center justify-between gap-2 sm:gap-0 border-b border-dashed sticky top-0 bg-background/50 z-50 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src={logo} 
            alt="Logo"
            width={36}
            height={36}
            className="w-[36px] h-[36px] sm:max-w-[30px]"
          />

          <h1 className="hidden sm:block text-xl font-bold">
            MailSnippet
          </h1>
        </Link>

        <span className="hidden sm:block text-muted-foreground text-xs">
          Versão 0.0.1
        </span>
      </div>

      <div className="w-full block sm:hidden">
        <SearchDialog/>
      </div>

      <div className="hidden md:flex items-center gap-2">
        <nav>
          <Button asChild variant="ghost">
            <Link href="/">Início</Link>
          </Button>

          <Button asChild variant="ghost">
            <Link href="/componentes">Componentes</Link>
          </Button>

          <Button asChild variant="ghost">
            <Link href="/components">Sobre nós</Link>
          </Button>

          <FeedbackPopover/>
        </nav>

        <div className="flex items-center gap-5">
          <Separator orientation="vertical" className="h-5"/>

          <div>
            <SearchDialog/>
          </div>
        </div>
      </div>
    </header>
  );
}