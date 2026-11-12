import stem01 from '../assets/stem-01.webp'
import stem02 from '../assets/stem-02.webp'
import stem03 from '../assets/stem-03.webp'
import stem04 from '../assets/stem-04.webp'
import stem05 from '../assets/stem-05.webp'
import stem06 from '../assets/stem-06.webp'
import stem07 from '../assets/stem-10.webp'
import stem08 from '../assets/stem-08.webp'
import stem09 from '../assets/stem-09.webp'
import stem10 from '../assets/stem-07.webp'

export type Plate = {
  src: string
  time: string // HH:MM the photograph "was taken"
  title: string
  note: string
  tint: string // placeholder colour while the image loads
  focus?: string // object-position when the plate is expanded full screen
}

// Photographs: generated for this portfolio, cropped to 3:4 WebP.
export const PLATES: Plate[] = [
  { src: stem01, time: '05:40', title: 'Anemone, first light', note: 'Window, east', tint: '#8a8f94' },
  { src: stem02, time: '07:05', title: 'The boardwalk at low tide', note: 'Dune trail', tint: '#807b6d' },
  { src: stem03, time: '08:30', title: 'Up the ridge trail', note: 'Trailhead', tint: '#6c6a5d' },
  { src: stem04, time: '10:15', title: 'Poppy at the front desk', note: 'Lobby', tint: '#8d8173' },
  { src: stem05, time: '11:50', title: 'The cove, all to ourselves', note: 'Beach', tint: '#a8a29a' },
  { src: stem06, time: '13:10', title: 'Pinot among the vines', note: 'Wine country', tint: '#8a8264' },
  { src: stem07, time: '14:45', title: 'A bath with a view', note: 'Suite, upstairs', tint: '#8b745b' },
  { src: stem08, time: '18:05', title: 'Sunset, then dinner', note: 'The terrace', tint: '#885145' },
  { src: stem09, time: '20:10', title: 'Piano in the lobby', note: 'The bar', tint: '#3a2719' },
  { src: stem10, time: '21:15', title: 'Through the keyhole', note: 'Your room', tint: '#0a0804', focus: '50% 50%' },
]

export const toMinutes = (t: string) => {
  const [h, m] = t.split(':').map(Number)
  return h * 60 + m
}
export const fmt = (mins: number) => {
  const m = Math.round(mins)
  return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`
}
