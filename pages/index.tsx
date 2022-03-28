import * as React from 'react'
import axios, { AxiosError } from 'axios'

import { useQuery, QueryClient, QueryClientProvider, UseQueryOptions } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const client = new QueryClient()

type Todos = {
  items: readonly {
    id: string
    text: string
  }[]
}

async function fetchTodos(): Promise<Todos> {
  const res: any = [
    { id: '1', first_name: 'aaa', last_name: 'aaa' },
    { id: '2', first_name: 'bbb', last_name: 'bbb' },
    { id: '3', first_name: 'ccc', last_name: 'ccc' },
  ]
  return res
}

function useTodos<TData = Todos>(options?: UseQueryOptions<Todos, AxiosError, TData, string[]>) {
  return useQuery(['todos'], fetchTodos, options)
}

function TodoCounter() {
  // subscribe only to changes in the 'data' prop, which will be the
  // amount of todos because of the select function
  const counterQuery = useTodos({
    select: (data) => data.items.length,
    notifyOnChangeProps: ['data'],
  })

  React.useEffect(() => {
    console.log('rendering counterxxx')
  })

  return <div>TodoCounter: {counterQuery.data ?? 0}</div>
}

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <TodoCounter />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}
