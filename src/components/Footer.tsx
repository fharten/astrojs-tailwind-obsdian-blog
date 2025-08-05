export default function Footer() {
  return (
    <div className="mt-72 mb-5 w-full">
      <div className="flex pr-32 pl-10">
        <div className="flex-1">
          <p className="p mytext-base">Logo</p>
          <p className="p mytext-base">Get off.</p>
        </div>
        <div>
          <a href="/categories">
            <p className="p mytext-base">Categories</p>
          </a>
          <a href="/why">
            <p className="p mytext-base">Why</p>
          </a>
          <a href="/contact">
            <p className="p mytext-base">Contact</p>
          </a>
        </div>
      </div>

      <div className="mytext-base p-small mt-14 mr-14 flex justify-end space-x-5">
        <p>&copy; {new Date().getFullYear()} off the grid. All rights reserved</p>
        <a href="/privacy">
          <p>Privacy Policy</p>
        </a>
        <a href="/imprint">
          <p>Imprint</p>
        </a>
      </div>
    </div>
  );
}
