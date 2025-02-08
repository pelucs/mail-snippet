"use client";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-markup";

import { toast } from "sonner";
import { Button } from "./ui/button";
import { adaptedSnippets } from "@/snippets/adapted-snippets";
import { useEffect, useState } from "react";
import { Check, ClipboardList } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function AdaptedFragments() {

  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState("outlook");

  useEffect(() => {
    setIsClient(true);
    Prism.highlightAll();
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Fragmentos adaptados</h1>

      <Tabs 
        defaultValue="outlook" 
        className="space-y-4"
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList>
          <TabsTrigger value="outlook">Outlook</TabsTrigger>
        </TabsList>

        <TabsContent value="outlook" className="space-y-6">
          {activeTab === "outlook" && (
            <>
              <p className="max-w-4xl text-muted-foreground">
                Snippets para otimizar a renderização no Microsoft Outlook, utilizando estilos inline e uma 
                estrutura semântica.
              </p>
              <AdaptedFragmentsList category="outlook" />
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function AdaptedFragmentsList({ category }: { category: string }) {

  const [clipboardTimeout, setClipboardTimeout] = useState<boolean>(false);

  const snippetsFiltered = adaptedSnippets.filter(
    (snippet) => snippet.category === category
  );

  return (
    <div className="space-y-8">
      {snippetsFiltered.map((item) => (
        <div key={item.title} className="space-y-3">
          <div>
            <h1 className="text-lg">{item.title}</h1>

            <p className="text-muted-foreground">{item.description}</p>
          </div>

          <div className="py-4 px-5 relative gap-5 rounded-md bg-secondary overflow-hidden">
            <pre className="flex-1 overflow-x-auto scrollbar-custom pb-2">
              <code className="text-sm language-html">{item.htmlCode}</code>
            </pre>

            <div className="p-2 absolute top-4 right-4 bg-secondary">
              <Button
                size="icon"
                onClick={() => {
                  navigator.clipboard.writeText(item.htmlCode);
                  setClipboardTimeout(true);

                  toast("Copiado para área de transferência!");

                  setTimeout(() => setClipboardTimeout(false), 1500);
                }}
              >
                {clipboardTimeout ? (
                  <Check className="size-4" />
                ) : (
                  <ClipboardList className="size-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
