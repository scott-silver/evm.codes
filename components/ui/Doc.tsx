import React from 'react'

import cn from 'classnames'
import Link from 'next/link'

// The mark identifying an empty table cell, in order to avoid applying styles
const EMPTY_MARK = '*'

type Props = {
  children: string
}

type LinkProps = {
  href?: string
} & Props

export const H1: React.FC<Props> = ({ children }) => (
  <h1 className="text-lg font-semibold my-4">{children}</h1>
)

export const H2: React.FC<Props> = ({ children }) => (
  <h2 className="text-base font-semibold my-3">{children}</h2>
)

export const H3: React.FC<Props> = ({ children }) => (
  <h2 className="text-base font-medium my-2">{children}</h2>
)

export const P: React.FC<Props> = ({ children }) => (
  <p className="leading-5 mb-3">{children}</p>
)

export const UL: React.FC<Props> = ({ children }) => (
  <ul className="list-disc mb-2">{children}</ul>
)

export const OL: React.FC<Props> = ({ children }) => (
  <ol className="list-decimal mb-2">{children}</ol>
)

export const LI: React.FC<Props> = ({ children }) => (
  <li className="ml-6">{children}</li>
)

export const Table: React.FC<Props> = ({ children }) => (
  <table className="table-auto">{children}</table>
)

export const TH: React.FC<Props> = ({ children }) => {
  console.log({ children })
  return (
    <th
      className={cn('py-1 px-2 border-gray-400 text-xs font-semibold', {
        border: children !== EMPTY_MARK,
      })}
    >
      {children !== EMPTY_MARK && children}
    </th>
  )
}

export const TD: React.FC<Props> = ({ children }) => (
  <td
    className={cn('py-1 px-2 border-gray-400 text-xs font-normal', {
      border: children !== EMPTY_MARK,
    })}
  >
    {children !== EMPTY_MARK && children}
  </td>
)

export const A: React.FC<LinkProps> = ({ children, href }) => (
  <Link href={href as string} scroll={false}>
    <a className="underline">{children}</a>
  </Link>
)
