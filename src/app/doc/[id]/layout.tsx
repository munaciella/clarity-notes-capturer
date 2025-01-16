import RoomProvider from '@/components/RoomProvider';
import { use } from 'react';

const DocLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) => {
  const { id } = use(params);

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
};

export default DocLayout;