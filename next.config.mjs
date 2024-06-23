/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        baseURL: 'http://localhost:3000/api',
        siteUrl:"http://localhost:3001",
      },
      webpack(config){
        config.module.rules.push({
          test: /\.svg$/,
          use: [{ loader: '@svgr/webpack', options: { icon: true }}],
        });
        return config;
      }
};

export default nextConfig;
