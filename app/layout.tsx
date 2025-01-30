import './globals.css';
import { Providers } from '@/lib/providers';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 main-content">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}