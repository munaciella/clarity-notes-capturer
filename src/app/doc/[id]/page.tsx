// 'use client';

// import Document from '@/components/Document';
// import { use } from 'react';

// const DocumentPage = ({ params }: { params: Promise<{ id: string }> }) => {
//   const { id } = use(params);

//   return <div className='flex flex-col flex-1 min-h-screen'>
//     <Document id={id} />
//     </div>;
// };

// export default DocumentPage;


'use client';

import Document from '@/components/Document';

const DocumentPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className='flex flex-col flex-1 min-h-screen'>
      <Document id={id} />
    </div>
  );
};

export default DocumentPage;