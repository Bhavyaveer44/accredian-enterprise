"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import LeadFormModal from "@/components/forms/LeadFormModal";

interface LeadModalContextValue {
  openLeadModal: () => void;
  closeLeadModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextValue | undefined>(undefined);

export default function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLeadModal = () => setIsOpen(true);
  const closeLeadModal = () => setIsOpen(false);

  return (
    <LeadModalContext.Provider value={{ openLeadModal, closeLeadModal }}>
      {children}
      <LeadFormModal open={isOpen} onClose={closeLeadModal} />
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within LeadModalProvider");
  }
  return context;
}
