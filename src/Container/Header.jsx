/* eslint-disable react/prop-types */
const Header = ({ searchTerm, onSearchTerm }) => {
  // console.log(searchTerm);

  return (
    <div className="flex justify-between">
      <div>
        <header className="font-hind-siliguri-bold">
          <a href="#" className="btn btn-ghost text-3xl p-6">
            EduBuzz
          </a>
        </header>
      </div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Search Your QNA..."
            className="input input-bordered w-full max-w-xs"
            value={searchTerm}
            onChange={(event) => onSearchTerm(event.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
