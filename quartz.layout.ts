import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
  	 component: Component.ArticleTitle(),
 	 condition: (page) => page.fileData.slug !== "index",}),
    Component.ContentMeta({ showReadingTime: false, showComma: false }),
    Component.TagList(),
  ],
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
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph({
  localGraph: {
    drag: true,
    zoom: true,
    depth: 1,
    scale: 1.1,
    repulsion: 0.5,
  },
  globalGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 0.9,
    repulsion: 0.5,
  },
  // This is where you match your Obsidian tags
  colors: {
    lightMode: {
      arrow: "#9b9b9b",
      link: "#d3d3d3",
      node: "#4b4b4b",
      tagGroup: "#b3b3b3",
      // Custom tag colors from your screenshot
      "math/subject": "#ff0000",    // Red
      "math/concept": "#61ef7e",    // Green
      "math/definition": "#00aaff", // Blue
      "math/problems": "#efff3b",   // Yellow
      "math/theorem": "#e952e1",    // Pink/Purple
    },
    darkMode: {
      arrow: "#8b8b8b",
      link: "#2b2b2b",
      node: "#d3d3d3",
      tagGroup: "#3b3b3b",
      "math/subject": "#ff4d4d",
      "math/concept": "#85ff9e",
      "math/definition": "#33bbff",
      "math/problems": "#f4ff66",
      "math/theorem": "#ef82e9",
    },
  },
}),
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
