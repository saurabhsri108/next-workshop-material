export default async function sitemap() {
  const baseUrl = `${process.env.APP_URL}`;

  const articles = await fetch(`${process.env.JSON_URL}/articles`).then((res) =>
    res.json(),
  );
  const articleUrls =
    articles?.map((article: any) => {
      return {
        url: `${baseUrl}/${article.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...articleUrls,
  ];
}
