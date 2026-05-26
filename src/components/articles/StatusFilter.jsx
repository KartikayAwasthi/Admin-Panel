const StatusFilter = () => {
  return (
    <select className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3">
      <option>All</option>
      <option>Published</option>
      <option>Draft</option>
    </select>
  );
};

export default StatusFilter;