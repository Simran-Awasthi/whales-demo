import { useState } from "react";

const SubscribeForm = () => {
  const [showEmailError, setShowEmailError] = useState(false);
  const [email, setEmail] = useState("");

  const onEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    const isValid = emailRegex.test(e.target.value);
    if (!isValid) {
      console.log("Invalid email");
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (showEmailError) {
      return;
    }
    window.location.replace("https://app.loch.one/welcome");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[380px] flex flex-col justify-center items-center gap-6">
      <p className="text-4xl text-[39px] text-neutral-400 font-[500]">
        Sign up for exclusive access.
      </p>
      <input
        value={email}
        type="email"
        placeholder="Your email address"
        required={true}
        className="w-full border border-neutral-200 rounded-md p-4 text-[16px] hover:border-neutral-400 focus:ring-2 focus:ring-blue-600 bg-white outline-none focus:outline-none"
        onChange={onEmailChanged}
      />
      {showEmailError && (
        <p className="text-red-500 text-[12px]">Please enter a valid email</p>
      )}
      <button
        type="submit"
        className="w-full rounded-md p-4 font-semibold text-[16px] bg-neutral-900 text-white drop-shadow-md">
        Get Started
      </button>
      <p className="font-semibold text-[16px]">
        You’ll receive an email with an invite link to join.
      </p>
    </form>
  );
};

export default SubscribeForm;
