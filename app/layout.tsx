import '@/app/ui/global.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
      <html lang="fr">
        <body>{children}</body>
      </html>
    );
}
