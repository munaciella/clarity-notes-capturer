import RoomProvider from '@/components/RoomProvider';

const DocLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  const { id } = params;

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
};

export default DocLayout;