import { MdSearch } from 'react-icons/md'

export default function SearchForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="md:w-full">
      <div className="relative flex items-center">
        <button
          type="submit"
          className="absolute inset-y-0 left-0 px-2 py-2 transform hover:scale-110 motion-reduce:transform-none pl-3 flex items-center pointer-events-none"
        >
          <MdSearch size="15px" />
        </button>
        <input
          id="city"
          name="city"
          placeholder="Introduce una ciudad..."
          type="text"
          className="bg-transparent border-none pl-10 pr-4 focus:outline-0 focus:outline-slate-400 text-base py-2 placeholder-black rounded-3xl placeholder:text-sm placeholder:text-slate-400"
          required
        />
      </div>
    </form>

  )
}
