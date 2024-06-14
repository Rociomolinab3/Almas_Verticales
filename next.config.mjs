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
        ]
    },
};

export default nextConfig;
