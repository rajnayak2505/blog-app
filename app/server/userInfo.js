 'use server'

import { auth } from '@/auth';

export default async function getUserInfo() {
  const session = await auth();
  return session?.user || null;
}
