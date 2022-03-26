import DOMpurify from "dompurify";

export const sanitize = (content) => {
  return process.browser ? DOMpurify.sanitize(content) : content;
};
