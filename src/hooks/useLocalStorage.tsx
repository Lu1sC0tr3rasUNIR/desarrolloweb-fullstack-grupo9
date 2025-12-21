import { StorageContext } from "@/context/StorageContext";
import { useContext } from "react";

export default function useLocalStorage() {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error("useLocalStorage must be used within a StorageProvider");
  }
  return context;
}
