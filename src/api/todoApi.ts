import axiosClient from './axiosClients'

const todoApi = {
  getAll() {
    const url = '/todos'
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      },
    })
  },

  getById(id: string | number) {
    const url = `/todos/${id}`
    return axiosClient.get(url)
  },

  add(data: any) {
    const url = '/todos'
    return axiosClient.post(url, data)
  },

  update(data: any) {
    const url = `/todos/${data.id}`
    return axiosClient.patch(url, data)
  },

  remove(id: string | number): Promise<any> {
    const url = `/todos/${id}`
    return axiosClient.delete(url)
  },
}

export default todoApi
