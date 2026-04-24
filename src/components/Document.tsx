'use client';

import { useEffect, useState, useTransition } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import Editor from './Editor';
import useOwner from '@/lib/useOwner';
import DeleteDocument from './DeleteDocument';
import InviteUser from './InviteUser';
import ManageUsers from './ManageUsers';
import Avatars from './Avatars';
import { updateDocumentTitle } from '../../actions/actions';
import { toast } from 'sonner';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Document = ({ id }: { id: string }) => {
  const [data, loading, error] = useDocumentData(doc(db, 'documents', id));
  const [input, setInput] = useState('');
  const [isUpdating, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const isOwner = useOwner();

  useEffect(() => {
    if (data?.title) {
      setInput(data.title);
    }
  }, [data]);

  const handleUpdateTitle = () => {
    if (!input.trim()) {
      toast.error('Document title cannot be empty');
      return;
    }

    startTransition(async () => {
      try {
        const result = await updateDocumentTitle(id, input.trim());

        if (result?.success) {
          setIsOpen(false);
          toast.success('Document renamed successfully');
        } else {
          toast.error(result?.error || 'Failed to rename document');
        }
      } catch (error) {
        console.error('Error updating title:', error);
        toast.error('Something went wrong while renaming the document');
      }
    });
  };

  if (loading) {
    return <div>Loading document...</div>;
  }

  if (error) {
    return <div>Error loading document: {error.message}</div>;
  }

  return (
    <div className="flex-1 h-full bg-white p-5">
      <div className="flex max-w-6xl mx-auto justify-between pb-5">
        <div className="flex flex-1 items-center space-x-2">
          <Input
            value={input}
            readOnly
            className="font-bold"
          />

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <Button asChild className="p-3">
              <DialogTrigger>Rename</DialogTrigger>
            </Button>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Rename document</DialogTitle>
                <DialogDescription>
                  Choose a new name for this document.
                </DialogDescription>
              </DialogHeader>

              <div className="py-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter document title"
                  className="font-bold"
                />
              </div>

              <DialogFooter className="sm:justify-end gap-2">
                <Button
                  type="button"
                  onClick={handleUpdateTitle}
                  disabled={isUpdating || !input.trim()}
                >
                  {isUpdating ? 'Updating...' : 'Save'}
                </Button>

                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {isOwner && (
            <>
              <InviteUser />
              <DeleteDocument />
            </>
          )}
        </div>
      </div>

      <div className="flex max-w-6xl mx-auto justify-between items-center mb-5">
        <ManageUsers />
        <Avatars />
      </div>

      <hr className="pb-10" />

      <Editor />
    </div>
  );
};

export default Document;