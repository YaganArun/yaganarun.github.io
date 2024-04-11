import getData from "../utils/data";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer flex justify-center box-border p-4">
          <p className="text-lg text-white font-googlesansregular">
            Made with ❤️ by {getData(0)[0]}
          </p>
        </div>
      </footer>
    </div>
  );
}
