import { createContext, PropsWithChildren } from 'react'
import products from './products.json'
import { ProductsModel } from './ProductsModel'

export const ProductsContext = createContext<ProductsModel>({} as ProductsModel)

export const ProductsContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}
