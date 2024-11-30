export const products = [
  // {
  //   href: "https://google.com",
  //   title: "Bedium",
  //   description:
  //     "A blogging website to craft your own story.",
  //   thumbnail: "/images/sidefolio-aceternity.png",
  //   images: [
  //     "/images/sidefolio-aceternity.png",
  //     "/images/sidefolio-aceternity-2.png",
  //   ],
  //   stack: ["Nextjs", "Tailwindcss"],
  //   slug: "Bedium",
  //   content: (
  //     <div>
  //       <p>
  //         Bedium is a platform where users can share their stories and engage in
  //         creative writing. This project focuses on simplicity and an intuitive
  //         user experience.
  //       </p>
  //     </div>
  //   ),
  // },
  {
    href: "https://solanawallet.baivabprojects.site/",
    title: "Solana Wallet",
    description:
      "A secure, commercially usable crypto wallet where you own the keys.",
    thumbnail: "/images/wallet1.png",
    images: [
      "/images/wallet1.png",
      "/images/wallet2.png",
      "/images/wallet3.png",

    ],
    stack: ["Solana", "Nextjs", "Tailwindcss"],
    slug: "solana-wallet",
    content: (
      <div>
        <p>
          The Solana Wallet is a secure crypto wallet designed for commercial use, ensuring users have full ownership of their private keys. 
          It is currently in beta, but it can be adapted for mainnet usage.
        </p>
        <p>
          Like the other Web3 projects, this wallet started as a local deployment on a Raspberry Pi with Cloudflare Tunnels. 
          It was later moved to AWS and is now hosted on Vercel, offering a scalable and secure solution.
        </p>
      </div>
    ),
  },
  {
    href: "https://pondyretreats.in/",
    title: "Pondy Retreats",
    description:
      "A client project for a retreat business, built with a custom admin panel and handling over 50+ concurrent users.",
    thumbnail: "/images/pondyretreats3.png",
    images: [
      "/images/pondyretreats1.png",
      "/images/pondyretreats0.png",
    ],
    stack: ["Reactjs", "Tailwindcss", "Node.js", "AWS", "Resend"],
    slug: "pondy-retreats",
    content: (
      <div>
        <p>
          Pondy Retreats was a client project developed for a retreat business. 
          The client needed a professional website with features for managing bookings 
          and user interactions. The project included a custom admin panel for efficient 
          business management and supported over 100+ concurrent users.
        </p>
        <p>
          Built using AWS for scalability and Resend for email notifications, this project 
          showcases the integration of modern cloud services to meet client requirements. 
          The website ensures seamless performance, even under heavy traffic.
        </p>
        <p>
          Status: <strong>Delivered to Client</strong>.
        </p>
      </div>
    ),
  },

  {
    href: "https://launchpad.baivabprojects.site/",
    title: "Launchpad",
    description:
      "A Solana-connected DApp to create tokens, mint tokens, create wallets, and more.",
    thumbnail: "/images/launchpad1.png",
    images: [
      "/images/launchpad1.png",
      "/images/launchpad2.png",
    ],
    stack: ["Solana", "Reactjs","TypeScript", "Tailwindcss"],
    slug: "launchpad",
    content: (
      <div>
        <p>
          Launchpad is a Solana-connected DApp that allows users to create and mint tokens, manage wallets, and more. 
          It is currently in beta but can be easily transitioned to the mainnet if required.
        </p>
        <p>
          This was one of my first Web3 projects. Initially, it was locally hosted using a Raspberry Pi and 
          Cloudflare Tunnels. Later, it was deployed on AWS, and it is now hosted on Vercel for better scalability and reliability.
        </p>
      </div>
    ),
  },
  {
    href: "https://google.com",
    title: "FAttendance",
    description:
      "Take Attendance automatically with the power of Face Recognition and Object Detection. (Under Development)",
    thumbnail: "/images/RealtimeObj1.png",
    images: [
      "/images/RealtimeObj1.png",
      "/images/sidefolio-algochurn-2.png",
    ],
    stack: ["Reactjs", "Tailwindcss", "MediaPipe", "OpenCV"],
    slug: "FacialAttendance",
    content: (
      <div>
        <p>
          FAttendance aims to revolutionize attendance systems by using advanced face recognition 
          and object detection technologies. While currently under development, the project 
          promises to make attendance faster, more reliable, and entirely automated.
        </p>
        <p>
          The project leverages cutting-edge frameworks like MediaPipe and OpenCV, combined 
          with modern front-end tools like React and Tailwind CSS. Once completed, 
          it will demonstrate the real-world application of AI in daily operations.
        </p>
        <p>
          Status: <strong>Under Development</strong>.
        </p>
      </div>
    ),
  },
  {
    href: "https://solanadapp.baivabprojects.site/",
    title: "Solana Faucet",
    description:
      "Connect your wallet and airdrop tokens instantly.",
    thumbnail: "/images/faucet1.png",
    images: [
      "/images/faucet1.png",
      "/images/faucet2.png",
    ],
    stack: ["Solana", "Nextjs", "Tailwindcss"],
    slug: "solana-faucet",
    content: (
      <div>
        <p>
          The Solana Faucet lets users connect their wallets and airdrop tokens seamlessly. 
          It is a lightweight and efficient tool ideal for developers testing Solana-based apps. 
          Currently in beta, the app can be moved to the mainnet with minimal changes.
        </p>
        <p>
          Originally served locally via a Raspberry Pi and Cloudflare, the project migrated to AWS and 
          is now deployed on Vercel for enhanced performance.
        </p>
      </div>
    ),
  },

];
