import s01 from './assets/sheet-01.webp'
import s02 from './assets/sheet-02.webp'
import s03 from './assets/sheet-03.webp'
import s04 from './assets/sheet-04.webp'
import s05 from './assets/sheet-05.webp'
import s06 from './assets/sheet-06.webp'
import s07 from './assets/sheet-07.webp'
import s08 from './assets/sheet-08.webp'
import s09 from './assets/sheet-09.webp'
import s10 from './assets/sheet-10.webp'
import s11 from './assets/sheet-11.webp'
import s12 from './assets/sheet-12.webp'

export type Specimen = {
  no: string
  latin: string
  common: string
  src: string
  pressed: string
  place: string
  note: string
  tape: 'top' | 'corners' | 'side'
}

export const SPECIMENS: Specimen[] = [
  { no: '01', latin: 'Acer macrophyllum', common: 'Maple leaf, the lawn tree', src: s01, pressed: '02 Jun', place: 'Under the old tree', note: 'Fell into my book. Stayed there.', tape: 'top' },
  { no: '02', latin: 'Room 14', common: 'Brass key & lavender', src: s02, pressed: '03 Jun', place: 'Front desk, check-in', note: 'They let me keep the tag.', tape: 'corners' },
  { no: '03', latin: 'Sea glass', common: 'Shells from the cove', src: s03, pressed: '05 Jun', place: 'The cove, low tide', note: 'Pockets full of sand for a week.', tape: 'side' },
  { no: '04', latin: 'Eschscholzia californica', common: 'Poppy, front desk', src: s04, pressed: '06 Jun', place: 'Lobby, by the bell', note: 'Picked from the vase. Asked first.', tape: 'top' },
  { no: '05', latin: 'Pinot noir, 2021', common: 'Wine label & cork', src: s05, pressed: '08 Jun', place: 'The vineyard terrace', note: 'Soaked off the bottle at midnight.', tape: 'corners' },
  { no: '06', latin: 'Ridge trail', common: 'Map, pine & aster', src: s06, pressed: '09 Jun', place: 'Trailhead, mile 0', note: 'Folded wrong every time.', tape: 'side' },
  { no: '07', latin: 'Last light', common: 'Sunset dinner', src: s07, pressed: '11 Jun', place: 'The terrace, table 6', note: 'The one this whole trip was for.', tape: 'top' },
  { no: '08', latin: 'Athyrium filix-femina', common: 'Lady fern, the arboretum', src: s08, pressed: '12 Jun', place: 'Off the lobby', note: 'Unfurled under glass.', tape: 'corners' },
  { no: '09', latin: 'Piano bar', common: 'Ticket & sheet music', src: s09, pressed: '13 Jun', place: 'The lobby, 20:10', note: 'Played the last song anyway.', tape: 'side' },
  { no: '10', latin: 'Cirsium & feather', common: 'Thistle and a hawk feather', src: s10, pressed: '15 Jun', place: 'Top of the ridge', note: 'Found on the way down.', tape: 'top' },
  { no: '11', latin: 'The cove', common: 'Postcard, never sent', src: s11, pressed: '17 Jun', place: 'Gift shop, by the door', note: 'Wrote it. Kept it.', tape: 'corners' },
  { no: '12', latin: 'Rosa ‘Peach’', common: 'Rose, from the room', src: s12, pressed: '18 Jun', place: 'Suite, upstairs', note: 'Closing the book on June.', tape: 'side' },
]

/** the keepsake the camera dives into at the end of the scroll */
export const FEATURE = 6
