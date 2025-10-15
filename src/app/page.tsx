"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FileText, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

  const generatePdf = async () => {
    if (!form.formState.isValid) {
      form.trigger();
      return;
    }

    setIsGenerating(true);
    const contractElement = document.getElementById('contract-preview');

    if (contractElement) {
      try {
        const canvas = await html2canvas(contractElement, {
          scale: 2,
          useCORS: true,
          logging: false,
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = imgWidth / imgHeight;
        const newImgWidth = pdfWidth;
        const newImgHeight = newImgWidth / ratio;
        let heightLeft = newImgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, newImgWidth, newImgHeight);
        heightLeft -= pdfHeight;

        let page = 1;
        while (heightLeft > 0) {
          page++;
          position = heightLeft - newImgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, newImgWidth, newImgHeight);
          heightLeft -= pdfHeight;
        }

        const a = document.createElement('a');
        a.href = pdf.output('bloburl');
        a.download = 'contrato-digitalmk.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

      } catch (error) {
        console.error("Failed to generate PDF:", error);
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
          <Button onClick={generatePdf} disabled={isGenerating} size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
            {isGenerating ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <FileText className="mr-2 h-5 w-5" />
            )}
            {isGenerating ? 'Gerando PDF...' : 'Gerar e Baixar PDF'}
          </Button>
          {!form.formState.isValid && form.formState.isSubmitted && <p className="text-sm text-destructive mt-2">Por favor, preencha todos os campos corretamente para gerar o PDF.</p>}
        </footer>
      </div>
    </main>
  );
}
