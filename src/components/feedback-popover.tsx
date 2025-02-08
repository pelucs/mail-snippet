import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Textarea } from "./ui/textarea";

export function FeedbackPopover() {
  return(
    <Popover>
      <Button asChild variant="ghost">
        <PopoverTrigger>
          Feedback
        </PopoverTrigger>
      </Button>

      <PopoverContent 
        align="end"
        className="w-[340px] space-y-4"
      >
        <div>
          <span>Compartilhe seu feedback ou sugira melhorias</span>
        </div>

        <Textarea placeholder="Deixe sua mensagem" className="h-28 resize-none"/>

        <div className="flex gap-2">
          <Button className="flex-1">
            Enviar Feedback
          </Button>
          
          <span className="text-muted-foreground text-xs flex items-center gap-1">Emojis:
            <span className="pb-1.5 pt-2 px-2 leading-none bg-secondary rounded">⌘ + .</span>
          </span>
        </div>
      </PopoverContent>
    </Popover>
  );
}