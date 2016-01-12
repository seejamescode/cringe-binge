export const TOGGLE_PIN = 'TOGGLE_PIN'
export const TOGGLE_TOP = 'TOGGLE_TOP'

export function togglePin(pinned) {
  return { type: TOGGLE_PIN, pinned }
}

export function toggleTop(top) {
  return { type: TOGGLE_TOP, top }
}

export function changeCardView(cardView) {
  return { type: CHANGE_CARDVIEW, cardView }
}