import { about } from '@/data';

export default async function sitemap() {
  const baseUrl = about.website;
  // const blogs = getBlogPosts().map(post => ({
  //   url: `${baseUrl}/blogs/${post.slug}`,
  //   lastModified: post.metadata.publishedAt,
  // }));

  const routes = ['', '/skills', '/contact'].map(route => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return routes;
}
