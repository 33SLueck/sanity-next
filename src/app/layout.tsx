import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
          
          </>
        )}
      </body>
    </html>
  );
}