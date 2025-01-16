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
import { Input } from './ui/input';
import { FormEvent, useState, useTransition } from 'react';
import { BotIcon, FileText } from 'lucide-react';
import { toast } from 'sonner';
import Markdown from 'react-markdown';


const SummariseDocument = ({ doc }: { doc: Y.Doc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [summary, setSummary] = useState<string>('');
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');

  const handleSummariseQuestion = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.trim()) {
        toast.error('Please provide text to summarize.');
        return;
      }

    startTransition(async () => {
      const documentData = doc.get('document-store').toJSON();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/summariseDocument`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            documentData,
          }),
        }
      );
      if (res.ok) {
        const id = toast.loading('Summarising document...');
        const { summary } = await res.json();

        setSummary(summary.trim());

        toast.success('Summarisation successful!', { id });
      } else {
        toast.error('Summarisation failed. Please try again.');
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant="outline" className='p-2'>
        <DialogTrigger>
          <FileText />
          Summarise
        </DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Summarise the document</DialogTitle>
          <DialogDescription>
            Enter the document text, and AI will summarise it for you.
          </DialogDescription>

          <hr className="mt-5" />

        </DialogHeader>

        {summary && (
          <div className="flex flex-col items-start max-h-96 overflow-y-scroll gap-2 p-5 bg-gray-100">
            <div className="flex items-center gap-2">
              <BotIcon className="w-10 flex-shrink-0" />
              <p className="font-bold text-lg">
                GPT {isPending ? 'is thinking...' : 'Says:'}
              </p>
            </div>
            <div className="markdown-output">
              {isPending ? <p>Thinking...</p> : <Markdown>{summary}</Markdown>}
            </div>
          </div>
        )}

        <form className="flex gap-2" onSubmit={handleSummariseQuestion}>
           <Input 
    type="text"
    placeholder="Enter text to summarise"
    className="w-full"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    />

          <Button type="submit" disabled={!input.trim() || isPending}>
            {isPending ? 'Summarising...' : 'Summarise'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SummariseDocument;
