import apiService from '@/common/api.service'

export function getAccount (id) {
  return apiService({
    url: '/account',
    method: 'get',
    params: { id }
  })
}
