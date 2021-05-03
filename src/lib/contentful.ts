import { Item, Post, PostEntries } from "./types";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const post = process.env.CONTENTFUL_CONTNET_TYPE_POST;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function getPosts() {
  const entries: PostEntries = await client.getEntries({
    content_type: post,
    order: "-fields.publishedAt",
  });

  return entries.items.map((item) => convertPost(item));
}

export async function getPostBySlug(slug: string) {
  const entries: PostEntries = await client.getEntries({
    content_type: post,
    limit: 1,
    "fields.slug[in]": slug,
  });

  return convertPost(entries.items[0]);
}

export async function getSlugs() {
  const entries: PostEntries = await client.getEntries({
    content_type: post,
    select: "fields.slug",
  });

  return entries.items.map((post) => post.fields.slug);
}

export const convertPost = (item: Item): Post => {
  return {
    title: item.fields.title,
    subtitle: item.fields.subtitle,
    body: item.fields.body,
    slug: item.fields.slug,
    publishedAt: item.fields.publishedAt,
    image: item.fields.image.fields.file.url + "?fit=thumb&w=1600&h=900",
  };
};
