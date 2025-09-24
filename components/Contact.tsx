"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const inputBase =
  "w-full rounded-md bg-white/5 dark:bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple/60";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name || !email || !message) {
      setError("Please fill all fields.");
      return;
    }
    try {
      setLoading(true);
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Let’s work together
        </motion.h2>
        <motion.p
          className="text-white/70 mb-10 md:text-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Have a project in mind or just want to say hi? Drop a message.
        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 text-left"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className={inputBase}
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={inputBase}
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            className={`${inputBase} min-h-36`}
            placeholder="Tell me about your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}
          {sent && (
            <p className="text-green-400 text-sm">Thanks! I’ll get back to you soon.</p>
          )}
          <div className="flex justify-center pt-2">
            <button type="submit" disabled={loading}>
              <MagicButton
                title={loading ? "Sending..." : "Send message"}
                icon={<FaLocationArrow />}
                position="right"
              />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;


