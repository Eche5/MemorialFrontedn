import PropTypes from "prop-types";

import TributeList from "./TributeList";
import { useContext } from "react";
import { TributeContext } from "../Context/TributeContext";

function PostedTributes({ openUpDateForm }) {
  const { tributes, success } = useContext(TributeContext);
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="desktop:w-[800px] phone:w-[400px]">
        <ul className="w-full justify-between p-4">
          {tributes.map((tribute) => (
            <TributeList
              tribute={tribute}
              key={tribute._id}
              openUpDateForm={openUpDateForm}
            />
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
