import { ReactNode } from "react";
import Header from "@/components/header";
import AuthProvider from "@/providers/AuthProvider";
import Navbar from "./navbar";
import StorageProvider from "@/providers/StorageProvider";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AuthProvider>
      <StorageProvider>
        <Header>
          <Navbar />
        </Header>
        {children}
      </StorageProvider>
    </AuthProvider>
  );
}
