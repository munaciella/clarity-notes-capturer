'use client'

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { useTransition } from "react"
import { createNewDocument } from "../../actions/actions"
import { useState } from 'react';

const NewDocumentButton = () => {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleCreateNewDocument = async () => {
        setErrorMessage(null)

        startTransition(async () => {
            const response = await createNewDocument();

      if (response.error) {
        setErrorMessage(response.error); // Set the error message if not logged in
      } else {
        const { docId } = response;
        router.push(`/doc/${docId}`);
      }
    });
  };

  return (
    <div>
      <Button onClick={handleCreateNewDocument} disabled={isPending}>
        {isPending ? 'Creating...' : 'Create a new document'}
      </Button>
      
      {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error message */}
    </div>
  );
};

export default NewDocumentButton