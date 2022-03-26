import { isEmpty } from "lodash";

const Footer = ({ footer, footerMenus }) => {
  if (isEmpty(footerMenus)) {
    return null;
  }
  return <div>FOOTER</div>;
};

export default Footer;
