import { MoveRight, X } from "lucide-react";
import { Button } from "./ui/button";

export function Banner() {
  return(
    <div 
      className="relative isolate flex items-center justify-center gap-x-6 overflow-hidden px-6 py-4 md:py-2 sm:px-3.5
      bg-gradient-to-r to-blue-500 from-pink-500"
    >
      <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-3">
        <div className="text-sm/6 flex flex-col md:flex-row items-center gap-2">
          <strong className="font-semibold flex items-center gap-2">
            Mail Snippet Extension <span className="hidden md:inline">•</span>
          </strong>

          <p className="leading-tight text-center">
            Instale a extensão Mail Snippet no seu VSCode!
          </p>
        </div>

        <Button 
          asChild 
          size="sm" 
          variant="secondary"
          className="gap-2 px-6 rounded-full"
        >
          <a 
            target="_blank"
            href="https://marketplace.visualstudio.com/items?itemName=pdlucs.mailsnippet&ssr=false#overview"
          >
            Instalar

            <MoveRight className="size-4"/>
          </a>
        </Button>
      </div>
    </div>
  );
}