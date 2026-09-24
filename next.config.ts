import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // As imagens de trabalho vivem em /public/images (fáceis de substituir pelas
    // oficiais do Lab Azul: basta sobrescrever o arquivo mantendo o nome).
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
