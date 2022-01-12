const axios = require('axios')

const baseUrl = process.env.BASE_URL

async function fetchQuery(path, params = null) {
    let url
    if (params !== null) {
        url = `${baseUrl}/${path}/${params}`
    } else {
        url = `${baseUrl}/${path}`
    }
    const response = await axios.get(`${url}`)
    const data = await response.json()

    return data
}

export { baseUrl, fetchQuery}