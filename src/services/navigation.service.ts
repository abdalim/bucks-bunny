import * as React from 'react'
import { NavigationContainerRef, ParamListBase } from '@react-navigation/native'

export const navigationRef = React.createRef<NavigationContainerRef>()

export const navigate = (name: string, params?: ParamListBase) => {
  navigationRef.current?.navigate(name, params)
}
