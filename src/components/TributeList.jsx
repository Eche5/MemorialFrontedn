import PropTypes from "prop-types";
import { useContext } from "react";
import { TributeContext } from "../Context/TributeContext";
import { useAuth } from "../Context/AuthContext";

function TributeList({ openUpDateForm, tribute }) {
  const { fetchTributes } = useContext(TributeContext);
  const isoDate = tribute.date;
  const { isAuthenticated } = useAuth();
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
          `https://memorialbackendupdated.onrender.com/api/v1/users/tribute`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
          }
        );

        if (response.status === 204) {
          fetchTributes();
        } else {
          // Handle deletion failure on the front end (if needed)
        }
      } catch (error) {
        // Handle fetch error here (network issue, etc.)
      }
    }
  };

  return (
    <>
      {tribute && (
        <li className=" bg-white shadow-lg rounded-lg p-4 text-gray-500 border-2 mb-4">
          <div className=" flex justify-between">
            <em>{formattedDate}</em>
            {isAuthenticated && (
              <div className=" justify-around flex gap-4">
                <button onClick={() => openUpDateForm(tribute._id)}>
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
          <p className=" text-center">{tribute.tribute}</p>
          <p className=" text-right">{tribute.name}</p>
        </li>
      )}
    </>
  );
}

TributeList.propTypes = {
  tribute: PropTypes.object,
  openUpDateForm: PropTypes.func,
  fetchTributes: PropTypes.func,
};

export default TributeList;
