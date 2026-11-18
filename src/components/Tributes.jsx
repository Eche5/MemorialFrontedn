import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTribute } from "../Context/TributeContext";
import { FeatherIcon } from "./Icons";

import PostedTributes from "./PostedTributes";
import { USERS_API } from "../config";

function Tributes() {
  const {
    setTribute,
    tribute,
    name,
    setName,
    fetchTributes,
    setRelationship,
    relationship,
    tributeRef,
  } = useTribute();

  const nameRef = useRef();

  const [writeTribute, setWriteTribute] = useState(false);

  const [msg, setMsg] = useState({ text: "", ok: true });

  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const valid = name.length >= 3 && tribute.length >= 3;

  const scrollToTributes = useCallback(() => {
    if (tributeRef.current) {
      tributeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [tributeRef]);

  useEffect(() => {
    scrollToTributes();
  }, [scrollToTributes]);

  useEffect(() => {
    if (writeTribute && nameRef.current) {
      nameRef.current.focus();
    }
  }, [writeTribute]);

  useEffect(() => {
    fetchTributes();
  }, [fetchTributes]);

  const openUpDateForm = (id) => {
    navigate(`/tributes/${id}`);
  };

  const submitTributeHandler = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const res = await fetch(
        `${USERS_API}/tribute`,
        {
          method: "POST",
          body: JSON.stringify({ name, tribute, relationship }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();

      setMsg({ text: data.message, ok: res.ok });

      if (res.ok) {
        setName("");
        setTribute("");
        setRelationship("");
        setWriteTribute(false);
      }

      fetchTributes();
    } catch {
      setMsg({
        text: "We couldn't send your tribute. Please try again.",
        ok: false,
      });
    } finally {
      setSubmitting(false);
      setTimeout(() => setMsg({ text: "", ok: true }), 4000);
    }
  };

  const toggleForm = () => {
    setWriteTribute((prev) => !prev);
    if (writeTribute) fetchTributes();
  };

  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <div ref={tributeRef} className="scroll-mt-20 text-center">
        <h2 className="font-serif text-3xl font-medium text-ink">Tributes</h2>
        <div className="ornament mt-4">
          <span className="h-1 w-1 rounded-full bg-current" />
        </div>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          Share a memory, a prayer or a few words of comfort with the family.
        </p>
        <button
          onClick={toggleForm}
          className={`mt-6 ${writeTribute ? "btn-ghost" : "btn-primary"}`}
        >
          {writeTribute ? (
            "See all tributes"
          ) : (
            <>
              <FeatherIcon className="h-4 w-4" />
              Write a tribute
            </>
          )}
        </button>
      </div>

      {msg.text && (
        <p
          role="status"
          className={`mx-auto mt-6 max-w-md rounded-xl border px-4 py-3 text-center text-sm ${
            msg.ok
              ? "border-gold-soft/50 bg-gold-tint text-ink"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          {msg.text}
        </p>
      )}

      {writeTribute && (
        <form onSubmit={submitTributeHandler} className="card mt-10 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="field-label">
                Your name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                ref={nameRef}
                placeholder="e.g. Ada Okafor"
                onChange={(e) => setName(e.target.value)}
                className="field"
              />
            </div>
            <div>
              <label htmlFor="relationship" className="field-label">
                Relationship{" "}
                <span className="font-normal text-ink-muted">(optional)</span>
              </label>
              <input
                id="relationship"
                type="text"
                value={relationship}
                placeholder="e.g. Friend, Colleague"
                onChange={(e) => setRelationship(e.target.value)}
                className="field"
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="field-label">
              Your tribute
            </label>
            <textarea
              id="message"
              rows="7"
              required
              value={tribute}
              placeholder="Share a memory or a few kind words…"
              className="field resize-y leading-relaxed"
              onChange={(e) => setTribute(e.target.value)}
            />
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="btn-primary"
              disabled={!valid || submitting}
            >
              {submitting ? "Sending…" : "Share tribute"}
            </button>
          </div>
        </form>
      )}

      {!writeTribute && <PostedTributes openUpDateForm={openUpDateForm} />}
    </section>
  );
}

export default Tributes;
