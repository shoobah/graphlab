export const MOUSECLICK = 'MOUSECLICK'
export function mouseClick(e){
  return {
    type: MOUSECLICK,
    x: e.clientX,
    y: e.clientY,
    button: e.buttons
  }
}

export const MOUSEMOVE = 'MOUSEMOVE'
export function mouseMove(e){
  return {
    type: MOUSEMOVE,
    x: e.clientX,
    y: e.clientY,
    button: e.buttons
  }
}

export const CONTACTCLICK = 'CONTACTCLICK'
export function contactClick(id, isOn){
  return {
    type: CONTACTCLICK,
    id,
    isOn
  }
}
