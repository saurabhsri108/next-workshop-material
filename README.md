# NextJS 13 - App Router | Learning in Public

## Observations

1. It feels like WordPress Folder Structure of themes.
2. route.ts if exists, overrules the existence of layout.tsx and page.tsx in the same directory.
3. Data Flow is basically: SomePage -> SomePageLayout -> RootLayout
4. Once the page is fetched, the caching is automatic it seems, and the data doesn't refresh while we go back and forth using the link component. When we refresh the page, the data refreshes.
5. For the first time, it seems there is a true server component here which doesn't have hydration mechanism involved.
6. pages/index.tsx cannot exist with app/page.tsx. If pages/index.tsx exists, then app/layout.tsx is overruled in favour of pages/\_app.tsx.
7. Link component doesn't seem to work properly if I use both pages and app structure. It is working like basic <a> tag.
8. App and Pages are considered 2 separate projects in themselves so the seemless transition in <Link> terms will not happen. **What happens to the Global States in this case?** - TODO: Test with Zustand or Redux Toolkit later.
9. A special **page** or **route** file is used to make route segments publicly accessible.
10. pages are unique route UIs and layouts are shared parent-children UIs.
11. .js, .jsx, or .tsx file extensions can be used for Pages.
12. layouts preserve state, remain interactive, and do not re-render.
13. Have to figure out the dynamic metadata generation.
14. Loading page takes over during the waiting period of network call to the server and back.
15. All hooks can only be applied on the client end.
16. useRouter() is now a part of "next/navigation". Also, we have usePathname() and useSearchParams() inside it as well. usePathname() is for pathname (duh!). useSearchParams() is for queries.
17. prefetching in Link or router.prefetch() happens in production build only. Static routes are prefetched and cached. Dynamic routes are prefetched in "automatic" settings and everytime the route is changed, fetch is run again.
18. Next.js has an in-memory client-side cache called the Router Cache. As users navigate around the app, the React Server Component Payload of prefetched route segments and visited routes are stored in the cache.
19. Partial rendering of the route segments happens in next app: eg - sidebar blog page. Basically, regardless of client or server component, the sidebar which is common to all the blog pages, won't re-render again and again and only the blog page main area will re-render.
20. Route groups convention = (foldername). They don't affect the URL Path. layout should be directly inside the app folder. This is purely for grouping purpose during development and does not mean that we can have same folder inside 2 different groups. We can have different layout for each group. This is also good for opting shared layout between different paths. We can have mutliple root layouts in this if we remove the main app layout.
21. The naming of route groups has no special significance other than for organization. They do not affect the URL path.
22. Routes that include a route group should not resolve to the same URL path as other routes. For example, since route groups don't affect URL structure, (marketing)/about/page.js and (shop)/about/page.js would both resolve to /about and cause an error.
23. If you use multiple root layouts without a top-level layout.js file, your home page.js file should be defined in one of the route groups, For example: app/(marketing)/page.js.
24. Navigating across multiple root layouts will cause a full page load (as opposed to a client-side navigation). For example, navigating from /cart that uses app/(shop)/layout.js to /blog that uses app/(marketing)/layout.js will cause a full page load. This only applies to multiple root layouts.

## Things to figure out

1. Templates
2. Metadata generation dynamically
