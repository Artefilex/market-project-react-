const Redis = require("ioredis");
const redis = new Redis({
    host: "host",
    password: "CPGdcDIUxJysdtJ1sTZlGiCDb5hZgsR6",
    port: 6379
});

export default redis;
