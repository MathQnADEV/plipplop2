// konfigurasi lainnya atau optimisasi seperti scale gambar dkk
// bisa di file ini
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "127.0.0.1",
      },
    ],
  },
};

module.exports = nextConfig;
