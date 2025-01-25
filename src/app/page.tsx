import { ArrowLeftCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <main className="flex space-x-2 items-center animate-pulse">
        <ArrowLeftCircle className="w-12 h-12" />
        <h1 className="font-bold">Get started with creating a New Document</h1>
      </main>

      {/* Welcome Message and Purpose Section */}
      <section className="text-center max-w-3xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome to Clarity Capture
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Clarity Capture is the ultimate notes capturing and collaboration platform. 
          With real-time collaboration, AI-powered features, and a versatile note editor, 
          it&apos;s designed to help teams and individuals organise, manage, and collaborate on notes 
          seamlessly. Create a new document above to get started.
        </p>
      </section>
    </>
  );
}