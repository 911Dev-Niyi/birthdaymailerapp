import rateLimit from 'express-rate-limit';

const rateLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minute
    max: 5,
    standardHeaders: true, // Send rate limit infor in headers
    legacyHeaders: false, // Disable deprecated headers
    skipFailedRequests: true, // Dont count failed requests
    message: {
        status: 429,
        message: 'Too many requests. Please try again later.' 
    }
});

export default rateLimiter;