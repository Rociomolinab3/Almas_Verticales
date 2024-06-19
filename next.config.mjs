/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
       
        ignoreDuringBuilds: true,
    },
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'uprosanluis.edu.ar',
               
            },
            {
                protocol:'https',
                hostname:'firebasestorage.googleapis.com',
               
            },
        ]
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        });
    
        return config;
    },
};

export default nextConfig;
