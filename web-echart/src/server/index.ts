import axios from "axios";

const server = axios.create({
    baseURL: "http://localhost:3334"
})

server.interceptors.response.use(
    response => {
      const res = response.data

      if (!res.msg) return res
      if (res.code !== 200) {
        return Promise.reject(res.msg)
      }
      return Promise.resolve(res)
    },
    error => {
      return Promise.reject(error)
    }
  )

export const getList = () => {
    return server.get('/api/list')
}