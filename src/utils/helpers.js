export const truncate = (str, length = 50) => {
  return str?.length > length ? str.substring(0, length) + "..." : str;
};

export const capitalizeFirstLetter = (str) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};

export const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const generateSlug = (title) => {
  return slugify(title);
};

export const stripHtml = (html) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

export const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
