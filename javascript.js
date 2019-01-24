// The learning objective of this challenge is to examine existing code that allows users to drag & drop elements around the screen, 
// and use an if condition to prevent the drop from happening when a condition is true. Challenges will require you to practice 
// your Googling skills. There are a couple technical keywords in the requirements below that you can use to find some information 
// on the Web.


// The user should be able to drag one of the middle cards into either the top box, or the bottom box. However, there's a problem 
// with the way the code currently works. There's also a couple changes you need to make.

// If you drag one of the cards into the top/bottom box, and then drag another card into the first one, you get a nested card. You
//  need to prevent this from happening.
// The user should only be able to drag one card into either box. Use the childNodes property to ensure that, if a card is already
//  in the box, another can't be added.
// The user should be able to move a card from the top/bottom box back to the middle.


const DragDropManager = Object.create(null, {
    init: {
        value: () => {
            const stages = document.querySelectorAll(".stage")

            stages.forEach(stage => {
                // Gain reference of item being dragged
                stage.ondragstart = eItemBeingDraggedevent => {
                    eItemBeingDraggedevent.dataTransfer.setData("text", eItemBeingDraggedevent.target.classList)
                }
            })


            const targets = document.querySelectorAll(".target")

            targets.forEach(target => {
                // Dragover not supported by default. Turn that off.
                target.ondragover = eItemBeingDraggedevent => eItemBeingDraggedevent.preventDefault()

                target.ondrop = eItemBeingDraggedevent => {
                    // Enabled dropping on targets
                    eItemBeingDraggedevent.preventDefault()

                    // Determine what's being dropped
                    const data = eItemBeingDraggedevent.dataTransfer.getData("text")

                    // Append card to target component as child
                    if (eItemBeingDraggedevent.target.classList.contains("target")) {
                        if (eItemBeingDraggedevent.target.classList.contains("grid")) {
                            eItemBeingDraggedevent.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
                        } else if (!(eItemBeingDraggedevent.target.hasChildNodes())) {
                            eItemBeingDraggedevent.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))

                        }
                    }
                }
            })
        }
    }
})

DragDropManager.init()
