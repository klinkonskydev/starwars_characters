export type Characters = {
  name: string
  homeworld: string
  gender: 'male' | 'female' | 'n/a'
  hair_color?:
    | 'Auburn'
    | 'Black'
    | 'Blonde'
    | 'BondeGolden'
    | 'PastelPink'
    | 'Blue'
    | 'Platinum'
    | 'Red'
    | 'SilverGray'
  skin_color?:
    | 'Tanned'
    | 'Yellow'
    | 'Pale'
    | 'Light'
    | 'Brown'
    | 'DarkBrown'
    | 'Black'
  eye_color: string
  url: string
}


export type AvatarProps = {
  mouth?:
    | 'Default'
    | 'Concerned'
    | 'Disbelief'
    | 'Eating'
    | 'Grimace'
    | 'Sad'
    | 'ScreamOpen'
    | 'Serious'
    | 'Smile'
    | 'Tongue'
    | 'Twinkle'
    | 'Vomit'
  hairColor?:
    | 'Auburn'
    | 'Black'
    | 'Blonde'
    | 'BondeGolden'
    | 'PastelPink'
    | 'Blue'
    | 'Platinum'
    | 'Red'
    | 'SilverGray'
  skinColor?:
    | 'Tanned'
    | 'Yellow'
    | 'Pale'
    | 'Light'
    | 'Brown'
    | 'DarkBrown'
    | 'Black'
    | string
  gender?: 'male' | 'female' | 'n/a'
  eyeColor?: string
}

export type CharactersResponse = {
  count: number
  results: Characters[]
  next: string
  previous: string
}


