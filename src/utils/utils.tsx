import React from 'react'

/**
 *
 * @param val
 */
export function formatWan (val: number): React.ReactNode {
  const v = val
  if (!v || Number.isNaN(v)) return ''

  let result = val
  if (val > 10000) {
    result = Math.floor(val / 10000)
    return (
      <span>
        {result}
        <span
          style={{
            position: 'absolute',
            bottom: -2,
            fontSize: 14,
            fontStyle: 'normal',
            marginLeft: 2
          }}
        >
          万
        </span>
      </span>
    )
  }
}
