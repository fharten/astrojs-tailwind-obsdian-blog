export default function Footer() {
  return (
    <div className="mt-72 mb-5 w-full">
      <div className="flex pr-5 pl-10 md:pr-32">
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

      <div className="mytext-base p-small mx-5 mt-14 flex justify-end space-x-5 md:mr-14">
        <p>&copy; {new Date().getFullYear()} off the grid. All rights reserved</p>
        <a href="/privacy">
          <p>Privacy Policy</p>
        </a>
        <a href="/imprint">
          <p>Imprint</p>
        </a>
      </div>
      <div className="mytext-base p-small mx-5 mt-5 flex justify-center md:mx-50">
        <p>
          Note: This website was created solely for demonstration purposes and serves to showcase my
          skills. It is not a commercial offering. Despite the utmost care, no liability can be
          accepted for the content.
        </p>
      </div>
    </div>
  );
}
