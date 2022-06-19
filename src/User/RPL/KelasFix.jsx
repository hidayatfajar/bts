import React from 'react'
import { lazy } from "react"
import Kelas from lazy(() => import('./Kelas'))

export default function KelasFix() {
  return (
    <div><Kelas /></div>
  )
}
