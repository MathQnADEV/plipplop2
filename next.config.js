// konfigurasi lainnya atau optimisasi seperti scale gambar dkk
// bisa di file ini
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
    ],
  },
};

module.exports = nextConfig
