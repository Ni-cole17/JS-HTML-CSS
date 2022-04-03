//Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valores(arr){
    const sets = new Set(arr);

    return [...sets];
}

console.log(valores(arr))