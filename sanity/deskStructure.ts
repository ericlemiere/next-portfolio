import {
  DashboardIcon,
  CogIcon,
  BookIcon,
  EditIcon,
  DocumentsIcon,
} from "@sanity/icons";
import { TbLayoutNavbar, TbLayoutBottombar } from "react-icons/tb";
import { MdOutlineConstruction } from "react-icons/md";
import { GrDocumentMissing } from "react-icons/gr";
import { BiCookie } from "react-icons/bi";

export const deskStructure = (S: any) => {
  return S.list()
    .title("Content")
    .items([
      //
      // PAGES
      //
      S.listItem()
        .title("Web Pages")
        .schemaType("page")
        .icon(DocumentsIcon)
        .child(
          S.documentTypeList("page")
            .title("Web Pages")
            .child((documentId: any) =>
              S.document()
                .documentId(documentId)
                .schemaType("page")
                .views([S.view.form().icon(EditIcon)])
            )
        ),

      //
      // NAVIGATION
      //
      S.divider(),

      S.listItem()
        .title("Projects")
        .schemaType("project")
        .icon(MdOutlineConstruction)
        .child(
          S.documentTypeList("project")
            .title("Projects")
            .child((documentId: any) =>
              S.document()
                .documentId(documentId)
                .schemaType("project")
                .views([S.view.form().icon(EditIcon)])
            )
        ),

      //
      // NAVIGATION
      //
      S.divider(),

      S.listItem()
        .title("Header")
        .icon(TbLayoutNavbar)
        .child(S.document().schemaType("header").documentId("header")),

      S.divider(),

      // S.listItem()
      //   .title('Footer')
      //   .icon(TbLayoutBottombar)
      //   .child(S.document().schemaType('footer').documentId('footer')),

      //
      // SITE SETTINGS
      //
      S.divider(),

      // S.listItem()
      //   .title('Site Settings')
      //   .icon(CogIcon)
      //   .child(
      //     S.list()
      //       .title('Settings')
      //       .items([
      //         S.listItem()
      //           .title('SEO')
      //           .icon(CogIcon)
      //           .child(
      //             S.document()
      //               .title('SEO Content')
      //               .schemaType('seoContent')
      //               .documentId('seoContent'),
      //           ),
      //         S.listItem()
      //           .title('404 Page')
      //           .icon(GrDocumentMissing)
      //           .child(
      //             S.document()
      //               .title('404 Page')
      //               .schemaType('pageNotFound')
      //               .documentId('pageNotFound'),
      //           ),
      //         S.listItem()
      //           .title('Cookie Pop Up')
      //           .icon(BiCookie)
      //           .child(
      //             S.document()
      //               .title('Cookie Pop Up')
      //               .schemaType('cookiePopUp')
      //               .documentId('cookiePopUp'),
      //           ),
      //       ]),
      //   ),

      //
      // SITE DEPLOYMENT
      //
      S.divider(),
    ]);
};
