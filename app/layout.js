
import NavBar from "@/components/NavBar";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";

export const metadata = {
  title: "Shobhit",
  description: "Shobhit's Portfolio",
}

const RootLayout = ({ children }) => {

  return (
    <html lang='en' className="!scroll-smooth">
      <body className="relative">

        <ActiveSectionContextProvider>
          <NavBar />
          {children}
        </ActiveSectionContextProvider>
        
      </body>

    </html>
  )
}

export default RootLayout;