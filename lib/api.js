import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");
const workDirectory = join(process.cwd(), "_portfolio");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getWorkSlugs() {
  return fs.readdirSync(workDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getWorkBySlug(slug, fields = []) {
  const realWorkSlug = slug.replace(/\.md$/, "");
  const fullWorkPath = join(workDirectory, `${realWorkSlug}.md`);
  const fileContents = fs.readFileSync(fullWorkPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realWorkSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? 1 : -1));
  return posts;
}

export function getAllWork(fields = []) {
  const workSlugs = getWorkSlugs();
  const work = workSlugs
    .map((slug) => getWorkBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? 1 : -1));
  return work;
}
