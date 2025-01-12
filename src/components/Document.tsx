'use client';

import { useEffect, useState, useTransition } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';

const Document = ({ id }: { id: string }) => {
  const [data, loading, error] = useDocumentData(doc(db, 'documents', id));
  const [input, setInput] = useState('');
  const [isUpdating, startTransition] = useTransition();

  useEffect(() => {
    if (data) {
      setInput(data.title);
    }
  }, [data]);

  const updateTitle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim()) {
      startTransition(async () => {
        await updateDoc(doc(db, 'documents', id), {
          title: input,
        });
      });
    }
  };

  if (loading) {
    return <div>Loading document...</div>;
  }

  if (error) {
    return <div>Error loading document: {error.message}</div>;
  }

  return (
    <div>
      <div className='flex max-w-6xl mx-auto justify-between pb-5'>
        <form className='flex flex-1 space-x-2' onSubmit={updateTitle}>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />

          <Button disabled={isUpdating || !input.trim()} type="submit">
            {isUpdating ? 'Updating...' : 'Update'}
          </Button>
        </form>
      </div>

      <div>
        {/* ManageUsers */}

        {/* Avatars */}
      </div>

      {/* Collaborative Editor */}
    </div>
  );
};

export default Document;