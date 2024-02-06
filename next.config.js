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
        hostname: "admin.plipplop.site",
      },
    ],
  },
};

module.exports = nextConfig;
