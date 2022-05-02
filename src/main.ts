import {clear, lvStart, mouse, print, resizeCanvas, selectCanvas} from "limeviz";


lvStart(setup, draw, events)

function setup(): void {
    selectCanvas('playground')
    resizeCanvas(1024, 1024)

}

function draw(): void {
    clear()
    // Your drawing code goes here.
}

function events(): void {
    mouse.click = () => {
        print(`x: ${mouse.x}, y: ${mouse.y}`)
    }
}
