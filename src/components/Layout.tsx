import { ReactNode } from 'react';
import Header from '@/components/header';
import AuthProvider from '@/providers/AuthProvider';
import Navbar from './navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AuthProvider>
      <Header >
        <Navbar />
      </Header>
      {children}
    </AuthProvider>
  );
}
