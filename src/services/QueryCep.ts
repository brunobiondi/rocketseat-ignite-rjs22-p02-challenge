import { api } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const GetCep = (cep: string) => {
  return useQuery({
    queryKey: ['cep', { cep }],
    queryFn: async () => api.get(cep),
  })
}
