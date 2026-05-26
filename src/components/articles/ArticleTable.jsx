import { Eye, Pencil, Trash2 } from "lucide-react";

const data = [
  {
    title: "AI Future",
    status: "Published",
    date: "26 May 2026",
  },
  {
    title: "React Admin Panel",
    status: "Draft",
    date: "25 May 2026",
  },
];

const ArticleTable = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-zinc-800">
          <tr>
            <th className="p-4">Title</th>
            <th className="p-4">Status</th>
            <th className="p-4">Date</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((article, index) => (
            <tr
              key={index}
              className="border-t border-zinc-800 hover:bg-zinc-800/40 transition-all"
            >
              <td className="p-4">{article.title}</td>

              <td className="p-4">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  {article.status}
                </span>
              </td>

              <td className="p-4">{article.date}</td>

              <td className="p-4">
                <div className="flex items-center justify-center gap-4">
                  <button className="text-blue-400 hover:text-blue-500">
                    <Eye size={18} />
                  </button>

                  <button className="text-yellow-400 hover:text-yellow-500">
                    <Pencil size={18} />
                  </button>

                  <button className="text-red-400 hover:text-red-500">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleTable;