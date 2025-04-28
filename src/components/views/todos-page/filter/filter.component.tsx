enum FilterOptions {
  ALL = "all",
  COMPLETED = "completed",
  INCOMPLETE = "incomplete",
}

interface FilterProps {
  filter: FilterOptions
  setFilter: (filter: FilterOptions.ALL | FilterOptions.COMPLETED | FilterOptions.INCOMPLETE) => void;
}

const Filter = ({ filter, setFilter }: FilterProps) =>{
  return (
    <div className="flex gap-3 mb-4 flex-wrap">
      <button
        className={`px-4 py-2 cursor-pointer ${filter === FilterOptions.ALL ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => setFilter(FilterOptions.ALL)}
        type="button"
      >
        All
      </button>
      <button
        className={`px-4 py-2 cursor-pointer ${filter === FilterOptions.COMPLETED ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => setFilter(FilterOptions.COMPLETED)}
        type="button"
      >
        Completed
      </button>
      <button
        className={`px-4 py-2 cursor-pointer ${filter === FilterOptions.INCOMPLETE ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => setFilter(FilterOptions.INCOMPLETE)}
        type="button"
      >
        Incomplete
      </button>
    </div>
  );
}

export { Filter, FilterOptions }