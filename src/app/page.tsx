"use client"

import Link from "next/link";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Banner } from "@/components/banner";
import { Snippets } from "@/types/snippets-types";
import { snippets } from "@/snippets/snippets";
import { MoveRight } from "lucide-react";
import { codeIllustration } from "@/utils/code-illustration";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {

  const [snippetsForHeader, setSnippetsForHeader] = useState<Snippets[]>([]);
  const [snippetsForFooter, setSnippetsForFooter] = useState<Snippets[]>([]);
  
  useEffect(() => {
    
    const filteredSnippetsForHeader = snippets.filter(snippet => snippet.category === "header");
    const filteredSnippetsForFooter = snippets.filter(snippet => snippet.category === "footer");

    setSnippetsForHeader(filteredSnippetsForHeader);
    setSnippetsForFooter(filteredSnippetsForFooter);

  }, []);

  return (
    <main className="container-default">
      <Header/>
      <Banner/>

      {/* Hero */}
      <div className="py-10 md:py-20 pl-5 md:pl-20 md:h-[70vh] flex flex-col md:grid md:grid-cols-2 md:items-center gap-10">
        <div className="pr-5 md:pr-0 space-y-8 md:space-y-10">
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Snippets Prontos <br />
              para E-mails
            </h1>

            <p className="max-w-sm">
              Descubra componentes prontos e códigos HTML otimizados para criar campanhas de e-mail profissionais e responsivas sem complicações
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button>
              <Link href="/componentes">
                Ver Componentes
              </Link>
            </Button>

            <Button variant="secondary">
              <Link href="" className="flex items-center gap-2">
                Ler mais

                <MoveRight className="size-4"/>
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-2xl w-full flex flex-col pl-8 md:pl-14 pt-8 md:pt-14 rounded-tl-3xl rounded-bl-3xl bg-gradient-to-t to-blue-500 from-pink-500">
            <div className="w-full h-10 rounded-tl-xl overflow-hidden bg-zinc-800">
              <span className="w-fit px-5 h-full flex items-center bg-zinc-700/40">
                index.html
              </span>
            </div>

            <div className="w-full h-full p-2 md:p-4 bg-zinc-900 overflow-hidden">
              <pre className="text-left">
                <code className="text-xs md:text-sm text-white font-mono">
                  {codeIllustration}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Section Components */}
      <div className="px-5 md:px-20 pb-20 space-y-10">
        <div className="space-y-4">
          <h1 className="text-lg">Componentes</h1>

          <h1 className="max-w-2xl text-xl md:text-3xl font-bold">
            Componentes para peças de email lindamente elaborados, prontos para sua próxima campanha.
          </h1>

          <p className="max-w-lg text-muted-foreground">
            Crie e-mails incríveis em menos tempo! Nossos componentes prontos garantem praticidade, personalização fácil e um design profissional
            para suas campanhas.
          </p>
        </div>

        <Tabs defaultValue="header" className="container">
          <div className="flex items-center gap-2">
            <TabsList>
              <TabsTrigger value="header">Header</TabsTrigger>
              <TabsTrigger value="footer">Footer</TabsTrigger>
            </TabsList>

            <Button 
              asChild
              variant="secondary"
              className="text-muted-foreground"
            >
              <Link href="/componentes">
                Ver Mais...
              </Link>
            </Button>
          </div>

          <div className="mt-6 relative">
            <TabsContent value="header" className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {snippetsForHeader.map(snippet => (
                <div key={snippet.slug} className="w-full flex flex-col gap-2 group rounded-md overflow-hidden">
                  <div className="h-full overflow-x-auto scrollbar-custom pb-2 md:p-0">
                    <Button
                      asChild
                      className="w-fit h-full p-0 flex items-start bg-[#ebebeb] border-none group-hover:opacity-80 transition-all"
                    >
                      <Link href={`/componentes/${snippet.category}/${snippet.slug}`} className="flex items-start overflow-hidden">
                        <div dangerouslySetInnerHTML={{ __html: snippet.reactCode }}/>
                      </Link>
                    </Button>
                  </div>

                  <Link href={`/componentes/${snippet.category}/${snippet.slug}`} className="text-muted-foreground group-hover:text-white transition-all">
                    {snippet.title}
                  </Link>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="footer" className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {snippetsForFooter.slice(0, 2).map(snippet => (
                <div key={snippet.slug} className="w-full flex flex-col gap-2 group rounded-md overflow-hidden">
                  <div className="h-full overflow-x-auto scrollbar-custom pb-2 md:p-0">
                    <Button
                      asChild
                      className="w-fit h-full p-0 flex items-start bg-[#ebebeb] border-none group-hover:opacity-80 transition-all"
                    >
                      <Link href={`/componentes/${snippet.category}/${snippet.slug}`} className="flex items-start overflow-hidden">
                        <div dangerouslySetInnerHTML={{ __html: snippet.reactCode }}/>
                      </Link>
                    </Button>
                  </div>

                  <Link href={`/componentes/${snippet.category}/${snippet.slug}`} className="text-muted-foreground group-hover:text-white transition-all">
                    {snippet.title}
                  </Link>
                </div>
              ))}
            </TabsContent>

            {/* Gradiente de ocultação com efeito de suspense */}
            <div className="absolute bottom-0 left-0 w-full h-32 pb-12 bg-gradient-to-t from-background via-background/80 to-transparent 
            flex items-end justify-center">
              <Button>
                <Link href="/componentes">
                  Ver mais
                </Link>
              </Button>
            </div>
          </div>
        </Tabs>
      </div>


      <Footer/>
    </main>
  );
}