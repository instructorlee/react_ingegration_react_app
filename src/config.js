const defaultConfig = {
}

const dev = {
    API_URL: "http://localhost:5000"
}

const prod = {
    API_URL: "http://localhost:8080"
}

const test = {
    API_URL: "http://localhost:8080"
}

export const config = process.env.NODE_ENV === 'development' ? {...dev, ...defaultConfig} : process.env.NODE_ENV === 'test' ? {...test, ...defaultConfig}  : {...prod, ...defaultConfig} ;