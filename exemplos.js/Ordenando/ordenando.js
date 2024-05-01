// Função para trocar os valores de duas posições de um vetor
function swap(array, pos1, pos2) {
    let temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
}

// Função para embaralhar os elementos de um vetor
function shuffle(array, numSwaps) {
    for (let i = 0; i < numSwaps; i++) {
        let randomIndex1 = Math.floor(Math.random() * array.length);
        let randomIndex2 = Math.floor(Math.random() * array.length);
        swap(array, randomIndex1, randomIndex2);
    }
}

// Função para ordenar um vetor de inteiros com Bubble Sort
function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
}

// Função para ordenar um vetor de inteiros com Selection Sort
function selectionSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
}

// Função para ordenar um vetor de inteiros com Quick Sort
function quickSort(array, low, high) {
    if (low < high) {
        let pivotIndex = partition(array, low, high);
        quickSort(array, low, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, high);
    }
}

// Função de apoio ao Quick Sort para particionamento
function partition(array, low, high) {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
}

// Exemplo de uso das funções
let vetor = [5, 3, 8, 2, 1, 4, 7, 6];
console.log("Vetor original:", vetor);

swap(vetor, 0, 1);
console.log("Após swap:", vetor);

shuffle(vetor, 5);
console.log("Após shuffle:", vetor);

bubbleSort(vetor);
console.log("Após Bubble Sort:", vetor);

vetor = [5, 3, 8, 2, 1, 4, 7, 6]; // Reiniciando o vetor para desfazer o Bubble Sort

selectionSort(vetor);
console.log("Após Selection Sort:", vetor);

vetor = [5, 3, 8, 2, 1, 4, 7, 6]; // Reiniciando o vetor para desfazer o Selection Sort

quickSort(vetor, 0, vetor.length - 1);
console.log("Após Quick Sort:", vetor);
