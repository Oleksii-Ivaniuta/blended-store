//Робота з loacalStorage
export function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLocalStorage(key) {
    try {
        const savedData = JSON.parse(localStorage.getItem(key));
    return savedData; 
    }
    catch (error) {
        console.log(error);
    }
}

export function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}
