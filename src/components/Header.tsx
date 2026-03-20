'use client';

import { Show, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Breadcrumbs from './Breadcrumbs';

const Header = () => {
  const { user } = useUser();

  return (
    <div className="flex justify-between items-center p-4">
      {user && (
        <h1 className="text-2xl font-bold">
          {user?.firstName}
          {`'s`} Space
        </h1>
      )}

      <Breadcrumbs />

      <div>
        <Show when="signed-out">
          <SignInButton />
        </Show>

        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </div>
  );
};

export default Header;
