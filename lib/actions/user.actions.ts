'use server';

import { connectToDB } from '../mongoose';
import User from '../models/user.models';

interface Props {
  userId: string;
  name: string;
  task: string;
}

export async function updateUser({ userId, name, task }: Props): Promise<void> {
  connectToDB();

  try {
    await User.findOneAndUpdate(
      { id: userId },
      {
        name: name.toLowerCase(),
        task: task,
      },
      { upsert: true }
    );
  } catch (error: any) {
    throw new Error(`failed to create user ${error.message}`);
  }
}
