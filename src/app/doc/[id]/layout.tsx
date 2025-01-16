// import RoomProvider from '@/components/RoomProvider';

// const DocLayout = ({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: { id: string };
// }) => {
//   const { id } = params;

//   return <RoomProvider roomId={id}>{children}</RoomProvider>;
// };

// export default DocLayout;


import RoomProvider from '@/components/RoomProvider';
import { use } from 'react'; // Import use for handling async params

const DocLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>; // params is a Promise
}) => {
  const { id } = use(params); // Use the `use()` hook to unwrap the promise

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
};

export default DocLayout;