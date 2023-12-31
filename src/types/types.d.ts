export type ImageId = 'discord' | 'pokedex' | 'socialDev' | 'reactMusic'

export type ITools =
  | 'typescript'
  | 'react'
  | 'nextjs'
  | 'reactQuery'
  | 'tailwindcss'
  | 'nuxt'
  | 'supabase'
  | 'firebase'
  | 'threejs'
  | 'graphql'
  | 'nodejs'

export type ICarouselItem = {
  title: string
  description: string
  imageId: ImageId
  link: string
  languages: ITools[]
}
