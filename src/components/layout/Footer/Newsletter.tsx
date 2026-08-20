import { useState } from "react";
import { EnvelopeIcon } from "../../icons";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();
    setMessage(trimmed ? `Thanks — we'll send updates to ${trimmed}.` : "Please enter a valid email address.");
    if (trimmed) setEmail("");
  }

  return (
    <div className="absolute left-1/2 top-[-280px] z-[5] w-[min(1200px,calc(100%-48px))] -translate-x-1/2">
      <div
        className="grid grid-cols-[1.1fr_1.4fr_auto] items-center gap-[26px] rounded-[18px] border border-[rgba(20,110,130,0.10)] px-[38px] py-8 shadow-[0_14px_35px_rgba(20,70,90,0.10)] mw-1000:grid-cols-1 mw-1000:text-center mw-650:m-0 mw-650:px-[22px] mw-650:py-[26px]"
        style={{ background: "linear-gradient(135deg, #F1FBFC 0%, #E9F7F8 100%)" }}
      >
        <div className="flex items-center gap-4 mw-1000:justify-center">
          <EnvelopeIcon size={44} strokeWidth={1.6} className="flex-shrink-0 text-[#0D7F88]" />
          <div className="text-[21px] font-bold leading-[1.25] text-[#0E4D58]">
            Latest Updates
            <br />
            Subscribe To Our Newsletter
          </div>
        </div>

        <form id="newsletterForm" className="flex" onSubmit={handleSubmit}>
          <label htmlFor="anc-nl-email" className="sr-only">
            Email address
          </label>
          <input
            id="anc-nl-email"
            type="email"
            required
            placeholder="Enter Your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-[54px] w-full rounded-lg border border-[#D9E5E8] bg-white px-[18px] font-sans text-[14px] text-[#32475A] outline-none focus:border-[#1A8C98] focus:shadow-[0_0_0_3px_rgba(26,140,152,0.10)]"
          />
        </form>

        <button
          type="submit"
          form="newsletterForm"
          className="h-[54px] whitespace-nowrap rounded-lg border-none bg-[#0D7F88] px-7 font-sans text-[14px] font-bold uppercase text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#0A6E76] hover:shadow-[0_8px_18px_rgba(12,100,115,0.18)]"
        >
          Sign Up
        </button>
      </div>

      {message && <div>{message}</div>}
    </div>
  );
}
