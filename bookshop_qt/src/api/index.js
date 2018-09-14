import axios from 'axios'
// 配置请求地址的前缀
axios.defaults.baseURL = 'http://127.0.0.1:3000'
// axios拦截数据
axios.interceptors.response.use((res) => {
  return res.data
})
// 请求sliders
export function getSliders () {
  return axios.get('/sliders')
}
// 请求图书信息
export function getBooks (page, pagenum) {
  return axios.get(`/books?page=${page}&pagenum=${pagenum}`)
}
// 请求删除某一图书
export function removeBooks (id) {
  return axios.delete(`/books/${id}`)
}
// 请求得到某一图书的信息
export function getOneBook (id) {
  return axios.get(`/books/${id}`)
}
// 请求更新某一图书的信息
export function updateOneBook (id, book) {
  const params = new URLSearchParams()
  params.append('bookName', book.bookName)
  params.append('bookDescript', book.bookDescript)
  params.append('bookPrice', book.bookPrice)
  return axios.put(`/books/${id}`, params)
}
// 请求添加某一图书的信息
export function addOneBook (book) {
  const params = new URLSearchParams()
  params.append('bookName', book.bookName)
  params.append('bookDescript', book.bookDescript)
  params.append('bookPrice', book.bookPrice)
  params.append('bookCover', book.bookCover)
  return axios.post('/books', params)
}
