import PropTypes from "prop-types";
import Loader from "../components/Loader";
import { useTribute } from "../Context/TributeContext";
import { Suspense, lazy } from "react";
const TributeList = lazy(() => import("./TributeList"));

function PostedTributes({ openUpDateForm }) {
  const { tributes, success, isLoaded } = useTribute();

  if (!success) {
    return (
      <p className="mt-10 text-center text-ink-muted">
        We couldn&apos;t load the tributes right now. Please try again later.
      </p>
    );
  }

  if (isLoaded && tributes.length === 0) return <Loader />;

  if (tributes.length === 0) {
    return (
      <p className="mt-10 text-center font-serif text-lg italic text-ink-muted">
        No tributes yet. Be the first to share a memory.
      </p>
    );
  }

  return (
    <Suspense fallback={<Loader />}>
      <ul className="mt-10 space-y-5">
        {tributes.map((tribute) => (
          <TributeList
            tribute={tribute}
            key={tribute._id}
            openUpDateForm={openUpDateForm}
          />
        ))}
      </ul>
    </Suspense>
  );
}

PostedTributes.propTypes = {
  openUpDateForm: PropTypes.func,
};

export default PostedTributes;
