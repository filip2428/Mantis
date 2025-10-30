"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledMessage = (searchParams.get("message") ?? "").trim();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: prefilledMessage,
  });

  useEffect(() => {
    if (prefilledMessage && formData.message.trim() === "") {
      setFormData((prev) => ({ ...prev, message: prefilledMessage }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefilledMessage]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      action={"https://formspree.io/f/xanlqbee"}
      className="space-y-6 rounded-3xl bg-white/90 p-8 font-sans shadow-mantis-card backdrop-blur-sm dark:bg-[#143921]"
      method="POST"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-semibold uppercase tracking-wide text-mantis-green-700"
          >
            Nume complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Ex: Ioana Popescu"
            autoComplete="name"
            className="w-full rounded-xl border border-mantis-green-100/70 bg-white/70 px-4 py-3 text-mantis-bark shadow-sm transition focus:border-mantis-green-400 focus:outline-none focus:ring-2 focus:ring-mantis-green-200 dark:bg-[#102a1b] dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold uppercase tracking-wide text-mantis-green-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Ex: contact@exemplu.ro"
            autoComplete="email"
            className="w-full rounded-xl border border-mantis-green-100/70 bg-white/70 px-4 py-3 text-mantis-bark shadow-sm transition focus:border-mantis-green-400 focus:outline-none focus:ring-2 focus:ring-mantis-green-200 dark:bg-[#102a1b] dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-semibold uppercase tracking-wide text-mantis-green-700"
          >
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Ex: +40 723 123 456"
            autoComplete="tel"
            className="w-full rounded-xl border border-mantis-green-100/70 bg-white/70 px-4 py-3 text-mantis-bark shadow-sm transition focus:border-mantis-green-400 focus:outline-none focus:ring-2 focus:ring-mantis-green-200 dark:bg-[#102a1b] dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="organization"
            className="block text-sm font-semibold uppercase tracking-wide text-mantis-green-700"
          >
            Școală / Organizație (opțional)
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleInputChange}
            placeholder="Ex: Liceul Teoretic X"
            autoComplete="organization"
            className="w-full rounded-xl border border-mantis-green-100/70 bg-white/70 px-4 py-3 text-mantis-bark shadow-sm transition focus:border-mantis-green-400 focus:outline-none focus:ring-2 focus:ring-mantis-green-200 dark:bg-[#102a1b] dark:text-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="message"
            className="block text-sm font-semibold uppercase tracking-wide text-mantis-green-700"
          >
            Mesaj
          </label>
          {prefilledMessage && (
            <span className="text-xs font-medium text-mantis-green-500">
              Mesaj precompletat din pagina programelor
            </span>
          )}
        </div>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleInputChange}
          rows={6}
          placeholder="Spune-ne cum te putem ajuta sau ce program te interesează."
          className="w-full rounded-2xl border border-mantis-green-100/70 bg-white/70 px-4 py-4 text-mantis-bark shadow-sm transition focus:border-mantis-green-400 focus:outline-none focus:ring-2 focus:ring-mantis-green-200 dark:bg-[#102a1b] dark:text-white"
        />
      </div>

      <input
        type="hidden"
        name="source"
        value={prefilledMessage ? "Programe educationale" : "Formular contact"}
      />

      <button
        type="submit"
        className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-mantis-green-600 hover:bg-mantis-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mantis-green-500 transition duration-150"
      >
        Trimite Cererea
      </button>
    </form>
  );
}
