// import dotenv from 'dotenv';
// dotenv.config({path: "../../.env"});

// const config = {
//     port: process.env.PORT || 9000,
//     mongoURI: process.env.MONGODB_URI,
//     nodeMailerGmailPassword: process.env.NODE_MAILER_GMAIL_PASSWORD,
//     jwtSecret: process.env.JWT_SECRET,
//     nodeEnvironment: process.env.NODE_ENV,
//     authRoles: {
//         admin: "admin",
//         user: "user",
//     },
//     googleClintID: process.env.GOOGLEOAUTH_CLIENT_ID,
//     googleClintSecret: process.env.GOOGLEOAUTH_CLIENT_SECRET,
//     amadeusApiKey: process.env.AMADEUS_API_KEY,
//     amadeusApiSecret: process.env.AMADEUS_API_SECRET,
//     allowedOrigins: "http:localhost:3000,http:localhost:3001".split(',')
//     // allowedOrigins: process.env.ALLOWED_ORIGINS.split(',')
// };

const config = {
    port: 9000,
    mongoURI: "mongodb+srv://pokemonfanshravan:pokemon@cluster0.4brsf15.mongodb.net/?retryWrites=true&w=majority",
    // mongoURI: "mongodb+srv://pokemonfanshravan:pokemon@cluster0.4brsf15.mongodb.net/?retryWrites=true&w=majority@<cluster-url>/<database-name>?retryWrites=true&w=majority",
    nodeMailerGmailPassword:"get the guns for me",
    jwtSecret: "bruh",
    nodeEnvironment: 'production', 
    authRoles: {
        admin: "admin",
        user: "user",
    },
    googleClintID: "576429205815-7ke0sar9a1daon0ogmkn07j2q2b4ekgn.apps.googleusercontent.com",
    googleClintSecret: "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",
    amadeusApiKey: "X1U3dHGKefrkQbEJwXBmSyy19BGWGgyu", 
    amadeusApiSecret: "z9mL3iiWNA5KscWs",
    allowedOrigins: "*" //"http:localhost:3000,http:localhost:3001".split(',')
};

export default config;
