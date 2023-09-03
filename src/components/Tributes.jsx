import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import PostedTributes from "./PostedTributes";
import { TributeContext } from "../Context/TributeContext";

function Tributes() {
  const { setTribute, tribute, name, setName, fetchTributes } =
    useContext(TributeContext);
  const nameRef = useRef();
  const [image, setImage] = useState(null);

  const [writeTribute, setWriteTribute] = useState(false);
  const [succMsg, setSuccMsg] = useState("");
  const [sentTribute, setSentTribute] = useState(false);
  const navigate = useNavigate();
  const [valid, setIsValid] = useState(false);

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

  //controlled Api request
  const debouncedFetchTributes = useRef(
    debounce(fetchTributes, 1000) // Adjust the debounce delay as needed
  ).current;
  useEffect(() => {
    const controller = new AbortController();
    debouncedFetchTributes();
    return function () {
      controller.abort();
    };
  }, [name, tribute]);

  //submiteTribute
  const submitTributeHandler = async (e) => {
    e.preventDefault();
    setWriteTribute(false);
    const tributes = { name, tribute };
    const res = await fetch(
      "https://memorialbackendupdated.onrender.com/api/v1/users/tribute",
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
          <h1 className="mb-4 mt-16 font-bold text-3xl">Tributes</h1>
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
            <section className=" flex flex-col justify-center p-4 bg-gray-600 rounded-lg">
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
                    className=" rounded-lg p-2 border-[#fffbf2] border-2"
                  />
                  <textarea
                    id="message"
                    rows="10"
                    type="text"
                    required
                    value={tribute}
                    placeholder="Your Tribute"
                    className=" rounded-lg p-2"
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
                      ? " ml-2 cursor-not-allowed bg-white border-2 rounded-full px-2 flex hover:bg-[#fffbf2]"
                      : " ml-2 bg-white border-2 rounded-md flex hover:bg-[#fffbf2]"
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

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

Tributes.propTypes = {
  name: PropTypes.string,
  tribute: PropTypes.string,
  setTribute: PropTypes.func,
  setName: PropTypes.func,
};

export default Tributes;
