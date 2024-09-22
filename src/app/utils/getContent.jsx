import { createClient } from "contentful-management";

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

//generateStaticParams here to statically generate the contents

export async function getContent({ content_type, ...rest }) {
  const deliveryClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const { items, total } = await deliveryClient.getEntries({
    content_type,
    ...rest,
  });

  return { items, total };
}

export async function createEntry(contentType, fields) {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
  const environment = await space.getEnvironment('master');

  try {
    const entry = await environment.createEntry(contentType, {
      fields: fields,
    });
    await entry.publish();
    return entry;
  } catch (error) {
    console.error('Error creating entry:', error);
    throw error;
  }
}
