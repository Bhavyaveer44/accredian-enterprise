"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LeadFormValues, leadSchema } from "@/lib/validations";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

interface LeadFormModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LeadFormModal({ open, onClose }: LeadFormModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  const onSubmit = async (values: LeadFormValues) => {
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      onClose();
      return;
    }

    const result = await response.json().catch(() => null);
    console.error("Lead form submission failed", result);
  };

  return (
    <Modal open={open} onClose={onClose} title="Book a Consultation">
      <p className="text-sm text-slate-600">
        Share your details and a member of our team will reach out to tailor your enterprise learning plan.
      </p>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <label className="block">
          <span className="text-sm font-medium text-slate-900">Full name</span>
          <input
            type="text"
            {...register("name")}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.name && <p className="mt-2 text-xs text-red-600">{errors.name.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-900">Work email</span>
          <input
            type="email"
            {...register("email")}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.email && <p className="mt-2 text-xs text-red-600">{errors.email.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-900">Company</span>
          <input
            type="text"
            {...register("company")}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.company && <p className="mt-2 text-xs text-red-600">{errors.company.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-900">Phone</span>
          <input
            type="tel"
            {...register("phone")}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.phone && <p className="mt-2 text-xs text-red-600">{errors.phone.message}</p>}
        </label>

        <div className="flex flex-col gap-3 pt-4 border-t border-slate-200 sm:flex-row sm:justify-end">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </div>

        {isSubmitSuccessful && (
          <p className="text-sm text-green-600">Thank you! We will contact you shortly.</p>
        )}
      </form>
    </Modal>
  );
}
