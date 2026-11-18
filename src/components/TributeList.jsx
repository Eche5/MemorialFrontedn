import PropTypes from "prop-types";
import { useTribute } from "../Context/TributeContext";
import { useAuth } from "../Context/AuthContext";
import { PencilIcon, TrashIcon } from "./Icons";
import { USERS_API } from "../config";

const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

function TributeList({ openUpDateForm, tribute }) {
  const { fetchTributes, fetchOneTribute } = useTribute();

  const { isAuthenticated } = useAuth();

  if (!tribute) return null;

  const formattedDate = tribute.date
    ? new Date(tribute.date).toLocaleDateString("en-US", dateOptions)
    : "";

  const initial = tribute.name?.trim()?.charAt(0)?.toUpperCase() || "•";

  const deleteTributeHandler = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this tribute?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `${USERS_API}/tribute`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        }
      );

      if (response.status === 204) fetchTributes();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li className="card p-6 sm:p-7">
      <p className="whitespace-pre-line font-serif text-lg leading-relaxed text-ink">
        {tribute.tribute}
      </p>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gold-tint font-serif text-lg text-gold">
            {initial}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-ink">
              {tribute.name}
              {tribute.relationship && (
                <span className="font-normal text-ink-muted">
                  {" "}
                  &middot; {tribute.relationship}
                </span>
              )}
            </p>
            {formattedDate && (
              <p className="text-xs text-ink-muted">{formattedDate}</p>
            )}
          </div>
        </div>

        {isAuthenticated && (
          <div className="flex flex-none gap-1">
            <button
              onClick={() => {
                openUpDateForm(tribute._id);
                fetchOneTribute(tribute._id);
              }}
              aria-label="Edit tribute"
              className="rounded-full p-2 text-ink-muted transition-colors hover:bg-gold-tint hover:text-ink"
            >
              <PencilIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => deleteTributeHandler(tribute._id)}
              aria-label="Delete tribute"
              className="rounded-full p-2 text-ink-muted transition-colors hover:bg-red-50 hover:text-red-700"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

TributeList.propTypes = {
  tribute: PropTypes.object,
  openUpDateForm: PropTypes.func,
};

export default TributeList;
