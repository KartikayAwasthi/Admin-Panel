import { useForm } from "react-hook-form";

import AdminLayout from "../../components/layout/AdminLayout";

import { createArticle } from "../../api/articleApi";

import toast from "react-hot-toast";

const CreateArticle = () => {
  const { register, handleSubmit } =
    useForm();

  const onSubmit = async (data) => {
    try {
      data.tags = data.tags.split(",");

      await createArticle(data);

      toast.success("Article Created");
    } catch (error) {
      toast.error("Creation Failed");
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">
        Create Article
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-secondaryDark p-6 rounded-xl border border-primary"
      >
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="w-full p-3 rounded-lg bg-black"
        />

        <input
          type="text"
          placeholder="Slug"
          {...register("slug")}
          className="w-full p-3 rounded-lg bg-black"
        />

        <textarea
          placeholder="Description"
          {...register("description")}
          className="w-full p-3 rounded-lg bg-black h-32"
        />

        <textarea
          placeholder="Content"
          {...register("content")}
          className="w-full p-3 rounded-lg bg-black h-40"
        />

        <input
          type="text"
          placeholder="Domain Slug"
          {...register("domain_slug")}
          className="w-full p-3 rounded-lg bg-black"
        />

        <input
          type="text"
          placeholder="Tags comma separated"
          {...register("tags")}
          className="w-full p-3 rounded-lg bg-black"
        />

        <select
          {...register("status")}
          className="w-full p-3 rounded-lg bg-black"
        >
          <option value="published">
            Published
          </option>

          <option value="draft">
            Draft
          </option>
        </select>

        <button className="bg-primary px-6 py-3 rounded-lg">
          Create Article
        </button>
      </form>
    </AdminLayout>
  );
};

export default CreateArticle;