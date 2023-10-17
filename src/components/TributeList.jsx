import PropTypes from "prop-types";
import { useTribute } from "../Context/TributeContext";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";
import Loader from "./Loader";

function TributeList({ openUpDateForm, tribute }) {
  const { fetchTributes, fetchOneTribute, isLoaded } = useTribute();

  const isoDate = tribute.date;

  const { isAuthenticated } = useAuth();

  const [success, setSuccess] = useState(false);

  const date = new Date(isoDate);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  const deleteTributeHandler = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this tribute?"
    );

    if (confirmed) {
      try {
        const response = await fetch(
          `https://memorial.adaptable.app/api/v1/users/tribute`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
          }
        );

        if (response.status === 204) fetchTributes();
        setSuccess(true);
      } catch (error) {
        setSuccess(false);
      }
    }
  };

  return (
    <>
      {tribute && (
        <li className=" bg-white shadow-lg rounded-lg p-4 text-gray-500 border-2 mb-4">
          <div className=" flex justify-between mb-8">
            <em>{formattedDate}</em>
            {isAuthenticated && (
              <div className=" justify-around flex gap-4">
                <button
                  onClick={() => {
                    openUpDateForm(tribute._id);
                    fetchOneTribute(tribute._id);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTributeHandler(tribute._id)}
                  className=" text-red-800"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          <p className=" text-justify">{tribute.tribute}</p>
          <p className=" text-right font-bold text-black">
            {tribute.name}
            {tribute.relationship && (
              <span>({tribute.relationship?.toUpperCase()})</span>
            )}
          </p>
        </li>
      )}
      {isLoaded && !tribute && <Loader />}
    </>
  );
}

TributeList.propTypes = {
  tribute: PropTypes.object,
  openUpDateForm: PropTypes.func,
  fetchTributes: PropTypes.func,
  relationship: PropTypes.string, // Add this line
};

export default TributeList;
