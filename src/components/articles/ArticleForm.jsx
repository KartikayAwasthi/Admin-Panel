import { useState } from "react";

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    status: "published",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-5"
    >
      <input
        type="text"
        name="title"
        placeholder="Article Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full bg-zinc-800 rounded-xl p-4 outline-none"
      />

      <input
        type="text"
        name="slug"
        placeholder="Article Slug"
        value={formData.slug}
        onChange={handleChange}
        className="w-full bg-zinc-800 rounded-xl p-4 outline-none"
      />

      <textarea
        rows="4"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full bg-zinc-800 rounded-xl p-4 outline-none"
      />

      <textarea
        rows="8"
        name="content"
        placeholder="Article Content"
        value={formData.content}
        onChange={handleChange}
        className="w-full bg-zinc-800 rounded-xl p-4 outline-none"
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full bg-zinc-800 rounded-xl p-4 outline-none"
      >
        <option value="published">Published</option>
        <option value="draft">Draft</option>
      </select>

      <button
        type="submit"
        className="bg-violet-600 hover:bg-violet-700 transition-all px-6 py-3 rounded-xl font-semibold"
      >
        Publish Article
      </button>
    </form>
  );
};

export default ArticleForm;