import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

export const HeaderFooter = `
 header: getHeader {
      siteTitle
      siteTagLine
      siteLogoUrl
      favicon
    }
    headerMenus: menuItems(
      where: { location: HCMS_MENU_HEADER, parentId: "0" }
    ) {
      edges {
        node {
          ...MenuFragment
          childItems {
            edges {
              node {
                ...MenuFragment
              }
            }
          }
        }
      }
    }
    footerMenus: menuItems(
      where: { location: HCMS_MENU_FOOTER, parentId: "0" }
    ) {
      edges {
        node {
          ...MenuFragment
        }
      }
    }
    footer: getFooter {
      copyrightText
      sidebarOne
      sidebarTwo
      socialLinks {
        iconName
        iconUrl
      }
    }
`;

export const GET_MENUS = gql`
  query MENUS {
   ${HeaderFooter}
  }
  ${MenuFragment}
`;
