import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TributeDetail() {
  const [tribute, setTribute] = useState("");
  const [valid, setIsValid] = useState(false);
  const [update, isUpDated] = useState(false);
  const [image, setImage] = useState(null);

  const tributeRef = useRef();
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const { tributeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Mrs. Sunmola | rewrite Tribute";
  }, []);

  useEffect(() => {
    if (tribute.length >= 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [tribute]);
  useEffect(() => {
    tributeRef.current.focus();
  }, []);

  const upDateTributeHandler = async () => {
    const res = await fetch(
      `https://memorialbackendupdated.onrender.com/api/v1/users/tribute/${tributeId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tribute }),
      }
    );
    if (res.ok) {
      isUpDated(true);
      return navigate("/tributes");
    }
  };

  return (
    <div className="flex justify-center items-center m-4">
      {!update && (
        <section className=" flex flex-col justify-center p-4 bg-gray-600 rounded-lg">
          <form>
            <div className="flex-col flex justify-evenly flex-grow-0 p-2 gap-4">
              <textarea
                id="message"
                rows="10"
                type="text"
                required
                value={tribute}
                placeholder="Your Tribute"
                className=" rounded-lg"
                onChange={(e) => setTribute(e.target.value)}
                ref={tributeRef}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <button
              type="button"
              onClick={upDateTributeHandler}
              className={
                !valid
                  ? " ml-2 cursor-not-allowed bg-white border-2 rounded-md flex hover:bg-[#fffbf2]"
                  : " ml-2 bg-white border-2 rounded-md flex hover:bg-[#fffbf2]"
              }
              disabled={!valid}
            >
              Submit
            </button>
          </form>
        </section>
      )}
    </div>
  );
}

export default TributeDetail;
