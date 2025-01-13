import liveblocks from '@/lib/liveblocks';
import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '../../../firebase-admin';

export async function POST(req: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { sessionClaims } = await auth();

  if (
    !sessionClaims?.email ||
    !sessionClaims?.fullName ||
    !sessionClaims?.image
  ) {
    return new Response('Session claims are missing necessary information', {
      status: 400,
    });
  }

  const { room } = await req.json();

  const session = liveblocks.prepareSession(sessionClaims.email, {
    userInfo: {
      name: sessionClaims.fullName,
      email: sessionClaims.email,
      avatar: sessionClaims.image,
    },
  });

  const usersInRoom = await adminDb
    .collectionGroup('rooms')
    .where('userId', '==', sessionClaims?.email)
    .get();

  const userInRoom = usersInRoom.docs.find((doc) => doc.id === room);

  if (userInRoom?.exists) {
    session.allow(room, session.FULL_ACCESS);
    const { body, status } = await session.authorize();

    console.log('You are in this room');
    

    return new Response(body, {
      status,
    });
  } else {
    return NextResponse.json(
      { message: 'You are not in this room' },
      { status: 403 }
    );
  }
}
