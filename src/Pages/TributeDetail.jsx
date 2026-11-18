import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTribute } from "../Context/TributeContext";
import { ArrowLeftIcon } from "../components/Icons";
import { USERS_API } from "../config";

function TributeDetail() {
  const [tribute, setTribute] = useState("");

  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");

  const { editTribute } = useTribute();

  const tributeRef = useRef();

  const { tributeId } = useParams();

  const navigate = useNavigate();

  const valid = tribute.length >= 3;

  useEffect(() => {
    if (editTribute.length > 1) setTribute(editTribute);
  }, [editTribute]);

  useEffect(() => {
    document.title = "Mrs. Sunmola | Edit Tribute";
    tributeRef.current.focus();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const res = await fetch(
        `${USERS_API}/tribute/${tributeId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tribute }),
        }
      );

      const data = await res.json();

      if (res.ok) return navigate("/tributes");

      setError(data.message || "Could not save changes.");
    } catch {
      setError("Could not save changes. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <Link
        to="/tributes"
        className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to tributes
      </Link>

      <h2 className="mt-6 font-serif text-3xl font-medium text-ink">
        Edit tribute
      </h2>

      {error && <p className="errmsg mt-4">{error}</p>}

      <form onSubmit={handleOnSubmit} className="card mt-6 p-6 sm:p-8">
        <label htmlFor="editableField" className="field-label">
          Tribute
        </label>
        <textarea
          id="editableField"
          rows="10"
          required
          value={tribute}
          placeholder="Your tribute"
          className="field resize-y leading-relaxed"
          onChange={(e) => setTribute(e.target.value)}
          ref={tributeRef}
        />
        <div className="mt-6 flex justify-end gap-3">
          <Link to="/tributes" className="btn-ghost">
            Cancel
          </Link>
          <button
            type="submit"
            className="btn-primary"
            disabled={!valid || saving}
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default TributeDetail;
