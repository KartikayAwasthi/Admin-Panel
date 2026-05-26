export const ARTICLE_STATUS = {
  PUBLISHED: "published",
  DRAFT: "draft",
};

export const STATUS_OPTIONS = [
  { label: "Published", value: "published" },
  { label: "Draft", value: "draft" },
];

export const API_BASE_URL = import.meta.env.VITE_API_URL;

export const ITEMS_PER_PAGE = 10;

export const TOAST_DURATION = 3000;

export const VALIDATION_RULES = {
  title: { required: "Title is required", minLength: { value: 3, message: "Min 3 characters" } },
  slug: { required: "Slug is required", pattern: { value: /^[a-z0-9-]*$/, message: "Invalid slug format" } },
  description: { required: "Description is required", minLength: { value: 10, message: "Min 10 characters" } },
  content: { required: "Content is required", minLength: { value: 50, message: "Min 50 characters" } },
};
