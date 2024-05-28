const { headers } = require("next/headers");

module.exports = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'https://api.mercadopago.com/:path*',

            },
        ]
    },
};