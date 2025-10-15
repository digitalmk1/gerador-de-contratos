"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FileText, Loader2 } from 'lucide-react';
import { saveAs } from 'file-saver';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Contract from '@/components/contract';

const formSchema = z.object({
  razaoSocial: z.string().min(1, { message: "Razão Social é obrigatória." }),
  cnpjCpf: z.string().min(1, { message: "CNPJ/CPF é obrigatório." }),
  endereco: z.string().min(1, { message: "Endereço é obrigatório." }),
  cidade: z.string().min(1, { message: "Cidade é obrigatória." }),
  uf: z.string().min(2, { message: "UF deve ter 2 caracteres." }).max(2, { message: "UF deve ter 2 caracteres." }),
  cep: z.string().min(8, { message: "CEP deve ter 8 caracteres." }),
});

export type ContractFormData = z.infer<typeof formSchema>;

export default function Home() {
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<ContractFormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      razaoSocial: '',
      cnpjCpf: '',
      endereco: '',
      cidade: '',
      uf: '',
      cep: '',
    },
  });

  const watchedData = form.watch();

  const generateDocx = async () => {
    if (!form.formState.isValid) {
      form.trigger();
      return;
    }

    setIsGenerating(true);
    const contractElement = document.getElementById('contract-preview');

    if (contractElement) {
      try {
        const styles = `
          @page WordSection1 {
            size: 595.3pt 841.9pt; /* A4 */
            margin: 3cm 2cm 2cm 3cm; /* ABNT: Superior 3cm, Direita 2cm, Inferior 2cm, Esquerda 3cm */
            mso-header-margin: .5in;
            mso-footer-margin: .5in;
            mso-paper-source: 0;
          }
          div.WordSection1 {
            page: WordSection1;
          }
        `;

        const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
          <head>
            <meta charset='utf-8'>
            <title>Contrato</title>
            <style>${styles}</style>
          </head>
          <body>
            <div class="WordSection1">
        `;
        const footer = "</div></body></html>";
        const sourceHTML = header + contractElement.innerHTML + footer;
        
        const blob = new Blob(['\ufeff', sourceHTML], {
          type: 'application/msword'
        });
        
        const razaoSocial = form.getValues('razaoSocial');
        const fileName = razaoSocial ? `${razaoSocial}.doc` : 'digital MK.doc';
        saveAs(blob, fileName);

      } catch (error) {
        console.error("Failed to generate DOCX:", error);
      } finally {
        setIsGenerating(false);
      }
    } else {
      console.error("Contract preview element not found");
      setIsGenerating(false);
    }
  };


  return (
    <main className="min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="text-center py-8">
          <h1 className="text-4xl font-headline font-bold text-primary sm:text-5xl">ContractEase</h1>
          <p className="text-muted-foreground mt-2 text-lg">Gere seu contrato de licença de uso de software com facilidade.</p>
        </header>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Dados do Contratante</CardTitle>
            <CardDescription>Preencha as informações abaixo para gerar o contrato.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="space-y-6">
                <FormField
                  control={form.control}
                  name="razaoSocial"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Razão Social / Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: João da Silva ME" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="cnpjCpf"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CNPJ / CPF</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 12.345.678/0001-90" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="endereco"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Endereço</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Rua das Flores, 123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cidade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cidade</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: São Paulo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <FormField
                    control={form.control}
                    name="uf"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estado (UF)</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: SP" maxLength={2} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cep"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CEP</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 01001-000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                 </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <section className="space-y-4">
          <h2 className="text-3xl font-headline font-semibold text-center">Pré-visualização do Contrato</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Contract data={watchedData} />
          </div>
        </section>

        <footer className="text-center py-8">
          <Button onClick={generateDocx} disabled={isGenerating} size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
            {isGenerating ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <FileText className="mr-2 h-5 w-5" />
            )}
            {isGenerating ? 'Gerando Documento...' : 'Gerar e Baixar DOCX'}
          </Button>
          {!form.formState.isValid && form.formState.isSubmitted && <p className="text-sm text-destructive mt-2">Por favor, preencha todos os campos corretamente para gerar o documento.</p>}
        </footer>
      </div>
    </main>
  );
}
