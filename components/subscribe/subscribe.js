import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();

    setState("Loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setState("Success");
        setEmail("");
      } else {
        const errorData = await response.json();
        setErrorMsg(errorData.error);
        setState("Error");
      }
    } catch (e) {
      setErrorMsg("An error occurred while subscribing.");
      setState("Error");
    }
  };

  return (
    <div className="max-w-sm bg-white border border-white p-6 text-[#2c395b]">
      <h4 className="text-3xl font-bold mb-4">What&apos;s your email?</h4>
      <p className="mb-6 text-base">
        Get notified about quality articles on frontend development and more
        sent to your inbox. I&apos;ll send you an email once a month, no spam.
      </p>
      <form onSubmit={subscribe} className="flex flex-wrap">
        <div className="w-full md:w-3/4 mb-4 md:mr-2">
          <input
            required
            id="email-input"
            name="email"
            type="email"
            placeholder="nome@email.it"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full">
          <button
            disabled={state === "Loading"}
            type="submit"
            className={`w-full p-2 font-bold text-white bg-[#FE6847] border-lg ${
              state === "Loading" ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {state === "Loading" ? "Loading..." : "Subscribe"}
          </button>
        </div>
      </form>
      {state === "Error" && <p className="text-red-600 py-4">{errorMsg}</p>}
      {state === "Success" && (
        <p className="text-green-600 py-4">
          Awesome, you&apos;ve been subscribed!
        </p>
      )}
    </div>
  );
};

export default Subscribe;
