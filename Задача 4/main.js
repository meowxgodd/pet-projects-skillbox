const word = 'JavaScript'

const countVowels = (word) => {
	const alfabet = ['a', 'e', 'i', 'o', 'u']
	const lowerWord = word.toLowerCase()
	const newWord = lowerWord.split('')
	const lengtWord = newWord.filter(item => alfabet.includes(item))
	return lengtWord.length
}

console.log(countVowels(word));



const users = [
	["Alice", 25, true],
	["Bob", 30, false],
	["Charlie", 22, true],
	["David", 27, true],
	["Eve", 20, false]
];


function filterAndSortUsers(users) {
	const newUsers = users
		.filter(item => item[1] > 25 && item[2])
		.sort((a, b) => a[1] - b[1])
		.map(item => item[0])
	return newUsers
}

console.log(filterAndSortUsers(users));