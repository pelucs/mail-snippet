"use client"

import Link from "next/link";
import Head from "next/head";

import { toast } from "sonner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { snippets } from "@/snippets/snippets";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { CodeBlock } from "@/components/code-block";
import { PreviewBlock } from "@/components/preview-block";
import { Check, ChevronRight, ClipboardList, MoveLeft } from "lucide-react";

export default function Snippet() {
  
  const { component, snippetSlug } = useParams<{ component: string, snippetSlug: string }>();

  const [activeTab, setActiveTab] = useState<string>("preview");
  const [clipboardTimeout, setClipboardTimeout] = useState<boolean>(false);

  const snippet = snippets.find(item => item.slug === snippetSlug);

  const navigation = useRouter();

  if (!snippet) {
    return(
      <div className="h-screen flex items-center flex-col justify-center gap-4">
        <p className="text-xl">Snippet não encontrado.</p>
        <Button onClick={() => navigation.back()}>
          <MoveLeft className="size-4"/>
          
          Voltar
        </Button>
      </div>
    );
  }

  return(
    <div className="container-default">
      <Head>
        <title>{`${snippet.title} - MailSnippet`}</title>
        <meta name="description" content={`Veja detalhes sobre o snippet ${snippet.title}.`} />
      </Head>

      <Header/>

      <div className="min-h-screen p-5 md:p-10 space-y-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Link href="/componentes" className="hover:text-zinc-100 transition-colors">
              Componentes
            </Link>

            <ChevronRight className="size-4"/>

            <span className="capitalize">
              {component}
            </span>

            <ChevronRight className="size-4"/>

            <span className="text-zinc-100">
              {snippet.title}
            </span>
          </div>

          <h1 className="text-2xl font-bold">
            {snippet.title}
          </h1>
        </div>

        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="flex space-x-1 rounded-lg bg-muted p-1">
                <Button
                  variant="secondary"
                  onClick={() => setActiveTab('preview')}
                  className={`flex-1 justify-center px-3 h-[28px] text-sm font-medium rounded-md ${
                    activeTab === 'preview'
                      ? 'bg-background text-foreground shadow-sm hover:bg-background'
                      : 'text-muted-foreground'
                  }`}
                >
                  Preview
                </Button>

                <Button
                  variant="secondary"
                  onClick={() => setActiveTab('code')}
                  className={`flex-1 justify-center px-3 h-[28px] text-sm font-medium rounded-md ${
                    activeTab === 'code'
                      ? 'bg-background text-foreground shadow-sm hover:bg-background'
                      : 'text-muted-foreground'
                  }`}
                >
                  Código
                </Button>
              </div>

              <Separator orientation="vertical" className="h-6"/>

              <Button 
                size="icon"
                onClick={() => {
                  navigator.clipboard.writeText(snippet.htmlCode);
                  setClipboardTimeout(true);

                  toast("Copiado para área de transferência!")

                  setTimeout(() => setClipboardTimeout(false), 1500);
                }}
              >
                {clipboardTimeout ? <Check className="size-4"/> : <ClipboardList className="size-4"/>}
              </Button>
            </div>

            <div>
              {activeTab === "preview" ? (
                <PreviewBlock snippet={snippet}/>
              ) : (
                <CodeBlock snippet={snippet}/>
              )}
            </div>
          </div>

          <div className="py-3 px-4 rounded-md border bg-secondary/50">
            <strong>Nota:</strong> Este snippet de código é fornecido como exemplo e pode necessitar de ajustes dependendo da 
            estrutura e lógica específica do seu código ou aplicação.
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}