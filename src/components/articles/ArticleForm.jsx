import { useForm } from "react-hook-form";
import InputField from "../forms/InputField";
import TextEditor from "../forms/TextEditor";
import SelectField from "../forms/SelectField";
import Button from "../ui/Button";
import { STATUS_OPTIONS } from "../../utils/constants";
import { generateSlug } from "../../utils/helpers";

const ArticleForm = ({ onSubmit, isLoading, initialData = {} }) => {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: initialData,
  });

  const title = watch("title");

  const handleTitleChange = (val) => {
    setValue("slug", generateSlug(val));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-xl border border-gray-200">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            placeholder="Article title"
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Slug *</label>
          <input
            type="text"
            {...register("slug", { required: "Slug is required" })}
            placeholder="url-friendly-slug"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
        <textarea
          {...register("description", { required: "Description is required" })}
          placeholder="Article description"
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Content *</label>
        <TextEditor value={watch("content")} onChange={(val) => setValue("content", val)} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Domain Slug</label>
          <input
            type="text"
            {...register("domain_slug")}
            placeholder="domain-slug"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Status *</label>
          <select
            {...register("status")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-primary"
          >
            {STATUS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Tags (comma separated)</label>
        <input
          type="text"
          {...register("tags")}
          placeholder="tag1, tag2, tag3"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-primary"
        />
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="submit" disabled={isLoading} className="flex-1">
          {isLoading ? "Saving..." : "Publish Article"}
        </Button>
      </div>
    </form>
  );
};

export default ArticleForm;
