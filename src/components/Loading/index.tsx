import style from './style.module.css'
import { PropsWithChildren } from 'react'

export const Loading = ({ children }: PropsWithChildren) => {
  return (
    <div className={style.wrapper}>
      <div className={style.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {children && <div>{children}</div>}
    </div>
  )
}
