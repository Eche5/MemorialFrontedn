import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PageContent({ title, children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <h1 className="font-serif text-4xl font-medium text-ink">{title}</h1>
      <div className="ornament my-5">
        <span className="h-1 w-1 rounded-full bg-current" />
      </div>
      <div className="max-w-md text-ink-soft">{children}</div>
      <Link to="/" className="btn-ghost mt-8">
        Return to memorial
      </Link>
    </div>
  );
}

PageContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default PageContent;
