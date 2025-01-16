import RoomProvider from '@/components/RoomProvider';
import { auth } from '@clerk/nextjs/server';

const DocLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {

  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
          <p className="text-gray-700 mt-4">
            You must sign in to access this page.
          </p>
        </div>
      </div>
    );
  }

  const { id } = params;

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
};

export default DocLayout;