import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useTribute } from "../Context/TributeContext";

import PostedTributes from "./PostedTributes";

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

  const [image, setImage] = useState(null);

  const [writeTribute, setWriteTribute] = useState(false);

  const [succMsg, setSuccMsg] = useState("");

  const [sentTribute, setSentTribute] = useState(false);

  const navigate = useNavigate();

  const [valid, setIsValid] = useState(false);

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

  const openUpDateForm = (id) => {
    navigate(`/tributes/${id}`);
  };

  //form validation
  useEffect(() => {
    if (name.length >= 3 && tribute.length >= 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, tribute]);

  useEffect(() => {
    fetchTributes();
  }, [name, fetchTributes]);

  const submitTributeHandler = async (e) => {
    e.preventDefault();

    setWriteTribute(false);

    const tributes = { name, tribute, relationship };

    const res = await fetch(
      "https://memorial.adaptable.app/api/v1/users/tribute",
      {
        method: "POST",
        body: JSON.stringify(tributes),
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setSuccMsg(data.message);

      fetchTributes();
    } else {
      setSentTribute(true);

      setSuccMsg(data.message);

      setName("");

      setTribute("");

      setRelationship("");
    }

    setTimeout(() => {
      setSuccMsg("");
    }, 3000);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    setImage(selectedImage);
  };

  const writeTributeHandler = () => {
    setWriteTribute((prev) => !prev);
  };

  const seeAllTribute = () => {
    setWriteTribute((prev) => !prev);

    fetchTributes();
  };

  return (
    <>
      <section className="flex justify-center items-center">
        <div className="text-center">
          <h1 className="mb-4 mt-16 font-bold text-3xl" ref={tributeRef}>
            Tributes
          </h1>
          {!writeTribute && (
            <button
              onClick={writeTributeHandler}
              className="p-2 bg-white border-2 rounded-md flex hover:bg-[#fffbf2] justify-center m-4"
            >
              Write a tribute
            </button>
          )}
          {writeTribute && (
            <button
              onClick={seeAllTribute}
              className="p-2 bg-white border-2 rounded-md flex hover:bg-[#fffbf2] justify-center m-4"
            >
              See all Tributes
            </button>
          )}
          {writeTribute && (
            <section className=" flex flex-col justify-center p-4  rounded-lg">
              <p>
                Fill out the fields below to leave memories, condolences, and/or
                photos.
              </p>
              <form onSubmit={submitTributeHandler}>
                <div className="flex-col flex justify-evenly flex-grow-0 p-2 gap-4">
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    ref={nameRef}
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    className=" rounded-lg p-2 border-gray-600 border-2"
                  />
                  <input
                    id="relationship"
                    type="text"
                    value={relationship}
                    placeholder="Your Relationship"
                    onChange={(e) => setRelationship(e.target.value)}
                    className=" rounded-lg p-2 border-gray-600 border-2"
                  />
                  <textarea
                    id="message"
                    rows="10"
                    type="text"
                    required
                    value={tribute}
                    placeholder="Your Tribute"
                    className=" rounded-lg p-2 border-gray-600 border-2"
                    onChange={(e) => setTribute(e.target.value)}
                  />
                  <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className={
                    !valid
                      ? " ml-2 cursor-not-allowed bg-white border-2 rounded-full px-4 py-2 flex hover:bg-[#fffbf2]"
                      : " ml-2 bg-white border-2 rounded-full flex hover:bg-[#fffbf2] px-4 py-2"
                  }
                  disabled={!valid}
                >
                  Submit
                </button>
              </form>
            </section>
          )}

          {sentTribute && <h1>{succMsg}</h1>}
        </div>
      </section>
      {!writeTribute && <PostedTributes openUpDateForm={openUpDateForm} />}
    </>
  );
}

Tributes.propTypes = {
  name: PropTypes.string,
  tribute: PropTypes.string,
  setTribute: PropTypes.func,
  setName: PropTypes.func,
};

export default Tributes;
