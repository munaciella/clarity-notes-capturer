import { ArrowLeftCircle } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <main className="flex space-x-2 items-center animate-pulse">
        <ArrowLeftCircle className="w-12 h-12" />
        <h1 className="font-bold">Get started with creating a New Document</h1>
      </main>

      <div className="mx-auto max-w-2xl text-center space-y-6 px-6 lg:px-8 mt-16">
            <p
              role="alert"
              className="inline-block bg-red-200 dark:bg-red-900 px-4 py-2 rounded-md text-red-700 dark:text-red-300 font-medium text-md"
            >
              <span className="mr-1">⚠️</span>
              <strong>Demo Notice:</strong>{" "}
              <span className="font-light">
                This live demo is provided solely for testing and development
                purposes. Functionality may be limited, unstable, or subject to
                sudden service restrictions. Use at your own risk;
                production-grade reliability is not guaranteed.
              </span>
            </p>
            </div>

      <section className='flex items-center justify-center mt-8'>
      <Image 
      src="/Chill-Time.png" 
      alt="Clarity Capture Logo" 
      width={240} 
      height={240} 
      priority
      />
      </section>

      {/* Welcome Message and Purpose Section */}
      <section className="text-center max-w-3xl mx-auto px-4 mt-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome to Clarity Capture
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Clarity Capture is the ultimate notes capturing and collaboration platform. 
          With real-time collaboration, AI-powered features, and a versatile note editor, 
          it&apos;s designed to help teams and individuals organise, manage, and collaborate on notes 
          seamlessly. Create a new document above to get started.
        </p>
      </section>
    </>
  );
}