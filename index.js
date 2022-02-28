function superbowlWin(collection) {
    
    let win = collection.find(object => (object.result === "W"))
    if (win === undefined) {
        return win
    }
    
    else {
    return win.year
    }
}

