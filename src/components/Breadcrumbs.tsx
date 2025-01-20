'use client';

import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Fragment } from 'react';
import Image from 'next/image';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const isDocPage = segments.length === 1 && segments[0] === 'doc';

  if (isDocPage) {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Image
                  src="/Clarity-Capture-logo.png"
                  alt="Clarity Capture Logo"
                  width={36}
                  height={36}
                  className="inline-block"
                />
              </BreadcrumbLink>{' '}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                This page has not been created yet
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
          <BreadcrumbLink href="/">
              <Image
                src="/Clarity-Capture-logo.png"
                alt="Clarity Capture Logo"
                width={36}
                height={36}
                className="inline-block"
              />
            </BreadcrumbLink>
          </BreadcrumbItem>
          {segments.map((segment, index) => {
            if (segment === 'doc') return null;

            const href = `/${segments.slice(0, index + 1).join('/')}`;
            const isLast = index === segments.length - 1;

            return (
              <Fragment key={segment}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{segment}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
