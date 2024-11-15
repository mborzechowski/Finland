import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata = {
  title: 'Finland Trip',
  description: 'Strona informacyjna o wyjeździe do Finlandii',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
