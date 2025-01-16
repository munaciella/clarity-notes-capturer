'use client';

import * as Y from 'yjs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { FormEvent, useState, useTransition } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BotIcon, LanguagesIcon } from 'lucide-react';
import { toast } from 'sonner';
import Markdown from 'react-markdown';

type Language =
  | 'english'
  | 'spanish'
  | 'portuguese'
  | 'french'
  | 'german'
  | 'italian'
  | 'chinese'
  | 'arabic'
  | 'hindi'
  | 'russian'
  | 'japanese';

const languages: Language[] = [
  'english',
  'spanish',
  'portuguese',
  'french',
  'german',
  'italian',
  'chinese',
  'arabic',
  'hindi',
  'russian',
  'japanese',
];

const TranslateDocument = ({ doc }: { doc: Y.Doc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [question, setQuestion] = useState<string>('');
  const [isPending, startTransition] = useTransition();

  const handleAskQuestion = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      const documentData = doc.get('document-store').toJSON();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/translateDocument`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            documentData,
            targetLang: language,
          }),
        }
      );
      if (res.ok) {
        const id = toast.loading('Translating document...');
        const { translated_text } = await res.json();

        const cleanedText = translated_text
        .replace(/<[^>]+>/g, '') 
        .replace(/Blockgroup\s-?\s?«?/gi, '') 
        .trim(); 
        
        setSummary(cleanedText);
        toast.success('Translation successful!', { id });
      } else {
        toast.error('Translation failed. Please try again.');
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant="outline" className='p-2'>
        <DialogTrigger>
          <LanguagesIcon />
          Translate
        </DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Translate the document</DialogTitle>
          <DialogDescription>
            Select a language and AI will translate a summary of the document in
            the selected language.
          </DialogDescription>

          <hr className="mt-5" />

          {question && <p className="mt-5 text-gray-500">Q: {question}</p>}
        </DialogHeader>

        {summary && (
          <div className="flex flex-col items-start max-h-96 overflow-y-scroll gap-2 p-5 bg-gray-100">
            <div className="flex">
              <BotIcon className="w-10 flex-shrink-0" />
              <p className="font-bold">
                GPT {isPending ? 'is thinking...' : 'Says:'}
              </p>
            </div>
            <div className="markdown-output">
              {isPending ? <p>Thinking...</p> : <Markdown>{summary}</Markdown>}
            </div>
          </div>
        )}

        <form className="flex gap-2" onSubmit={handleAskQuestion}>
          <Select
            value={language}
            onValueChange={(value) => setLanguage(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>

            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language} value={language}>
                  {language.charAt(0).toUpperCase() + language.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button type="submit" disabled={!language || isPending}>
            {isPending ? 'Translating...' : 'Translate'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TranslateDocument;
