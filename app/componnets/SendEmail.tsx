"use client";

import { useState } from "react";

export default function EmailSender() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = async () => {
    setStatus("Sending...");
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("✅ Welcome email sent!");
      } else {
        setStatus("❌ Failed to send email.");
      }
    } catch {
      setStatus("❌ Error sending email.");
    }
    saveEmail();
  };

  const saveEmail = async () => {
    setStatus("Saving...");
    try {
      const res = await fetch("/api/saveEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("✅ Email saved!");
      } else {
        setStatus("❌ Failed to save email.");
      }
    } catch {
      setStatus("❌ Error saving email.");
    }
  };


  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-64"
        />
        <button
          onClick={sendEmail}
          className="bg-green-700 text-white px-4 py-2 rounded"
        >
          subscribe
        </button>

      </div>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
