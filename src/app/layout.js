import localFont from "next/font/local";
// import "./globals.css";
import "./assets/lib/animate/animate.min.css";
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <title>Cental - Car Rent Website Template</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta content="" name="keywords" />
            <meta content="" name="description" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" /> 

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        </head>

        <body>
          {children}
          {/* <!-- JavaScript Libraries --> */}
          <script type="text/javascript" src="./assets/js/jquery.min.js"></script>
          <script type="text/javascript" src="./assets/js/bootstrap.bundle.min.js"></script>
          <script type="text/javascript" src="./assets/lib/wow/wow.min.js"></script>
          <script type="text/javascript" src="./assets/lib/easing/easing.min.js"></script>
          <script type="text/javascript" src="./assets/lib/waypoints/waypoints.min.js"></script>
          <script type="text/javascript" src="./assets/lib/counterup/counterup.min.js"></script>
          <script type="text/javascript" src="./assets/lib/owlcarousel/owl.carousel.min.js"></script>
          

          {/* <!-- Template Javascript --> */}
          <script type="text/javascript" src="./assets/js/main.js"></script>
        </body>
      </html>
    );
  }
