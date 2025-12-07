import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  // Not sure why defaultContentPageLayout doesn't come with afterBody
  afterBody: [
    // Show recent notes on homepage
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "Recent Notes",
        limit: 5,
        filter: (f) => {
        // Only Flashcards and Writing notes
        return f.slug!.startsWith("Flashcards/") || f.slug!.startsWith("Writing/")
      },
        showTags: false
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
    // show recent notes on mobile only everywhere
    Component.MobileOnly(
      Component.ConditionalRender({
        component: Component.RecentNotes({
          title: "Recent Notes",
          limit: 5,
          filter: (f) => f.slug!.startsWith("Flashcards/") || f.slug!.startsWith("Writing/"),
          showTags: false
        }),
        condition: (page) => page.fileData.slug !== "index",
      })
    ),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/anselboero",
    },
  }
  ),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
     // Show recent notes on homepage
    
    Component.TagList(),
    
  ],
  left: [
    // Show recent notes on homepage
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
