import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Clarity-Capture-logo.png"
              alt="Clarity Capture Logo"
              className="h-12 w-12"
              width={40}
              height={40}
            />
            <span className="ml-2 text-xl font-semibold">Clarity Capture</span>
          </Link>

          {/* Made With Love */}
          <div className="mt-4 sm:mt-0 text-center text-lg">
            <span className="mr-1">Made with</span>
            <span role="img" aria-label="heart" className="text-red-500">
              ♥
            </span>
            <span className="ml-1">
              by{" "}
              <a
                href="https://francescovurchio-dev.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="-ml-2"
              >
                <Image
                  src="/notion-avatar.PNG"
                  alt="Francesco Vurchio Notion Avatar"
                  className="inline h-14 w-14 rounded-full -mr-2"
                  width={40}
                  height={40}
                />
              </a>
            </span>
          </div>
        </div>

        {/* Developer Website */}
        <div className="text-center lg:text-end md:text-end mt-4">
          <a
            href="https://francescovurchio-dev.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 underline-offset-4 hover:underline"
          >
            Visit Developer Website
          </a>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-md font-medium text-gray-600">
            &copy; {new Date().getFullYear()} Clarity Capture. All rights
            reserved.
          </p>

          {/* Privacy Policy */}
          <Link
            href="/privacy-policy"
            className="text-md text-gray-600 underline-offset-4 hover:underline mt-2 sm:mt-0"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;