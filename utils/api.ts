import client from '@utils/contentfulConfig';
import { IParticipant } from 'types/contentful';

export const getParticipants = async () => {
  const participants = await client.getEntries<IParticipant>({ content_type: 'participant' });

  return participants.items;
};
