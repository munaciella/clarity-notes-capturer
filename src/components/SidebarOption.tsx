'use client';

import { doc } from "firebase/firestore";
import Link from "next/link";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { usePathname } from "next/navigation";

const SidebarOption = ({ href, id }: { href: string; id: string }) => {
  const [data, loading, error] = useDocumentData(doc(db, 'documents', id));
  const pathname = usePathname();
  const isActive = href.includes(pathname) && pathname !== '/';

  if (loading) {
    return <p className="p-2">Loading...</p>;
  }

  if (error) {
    return <p className="p-2 text-red-500">Error loading documents</p>;
  }
  if (!data) return null;

  return (
    <Link 
      href={href} 
      className={`border p-2 rounded-md ${
        isActive ? "bg-gray-300 font-bold border-black" : "border-gray-400"
      }`}
    >
      <p className="truncate">{data.title}</p>
    </Link>
  );
};

export default SidebarOption;