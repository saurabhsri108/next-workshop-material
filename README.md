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
