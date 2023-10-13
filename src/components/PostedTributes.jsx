import PropTypes from "prop-types";
import Loader from "../components/Loader";
import { useTribute } from "../Context/TributeContext";
import { Suspense, lazy } from "react";
const TributeList = lazy(() => import("./TributeList"));

function PostedTributes({ openUpDateForm }) {
  const { tributes, success } = useTribute();

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="desktop:w-[800px] phone:w-[400px]">
        <ul className="w-full justify-between p-4 transition-all">
          {tributes.map((tribute) => (
            <Suspense fallback={<Loader />} key={tribute._id}>
              <TributeList
                tribute={tribute}
                key={tribute._id}
                openUpDateForm={openUpDateForm}
              />
            </Suspense>
          ))}
        </ul>
      </div>
      {!success && (
        <div className="flex flex-col justify-center items-center mt-4">
          <h1>Something went wrong ⛔</h1>
        </div>
      )}
    </section>
  );
}

PostedTributes.propTypes = {
  name: PropTypes.string,
  tribute: PropTypes.string,
  openUpDateForm: PropTypes.func,
  fetchTributes: PropTypes.func,
  success: PropTypes.bool,
  tributes: PropTypes.array,
};

export default PostedTributes;
