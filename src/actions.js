export const TOGGLE_PIN = 'TOGGLE_PIN'

export function togglePin(pinned) {
  return { type: TOGGLE_PIN, pinned }
}