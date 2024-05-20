import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import schemas from "./sanity/schemas";
import { deskStructure } from "./sanity/deskStructure";

const config = defineConfig({
  projectId: "uqguztyt",
  dataset: "production",
  title: "Portfolio Website",
  apiVersion: "2024-05-19",
  basePath: "/admin",
  plugins: [
    structureTool({
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // You can add any React component to `S.view.component` and it will be rendered in the pane
      // and have access to content in the form in real-time.
      // It's part of the Studio's “Structure Builder API” and is documented here:
      // https://www.sanity.io/docs/structure-builder-reference
      defaultDocumentNode: (S, { schemaType }) => {
        if (schemaType === "page")
          return S.document().views([
            // Default form view
            S.view.form(),
            // Preview
          ]);
      },
      structure: deskStructure,
    }),
    media(),
  ],
  schema: { types: schemas },
  useCdn: false,
});

export default config;
