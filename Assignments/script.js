let a = 1;
let b = 220;


var firstName = "Priyank";
var lastName = "Fichadiya";
console.log(firstName + " " + lastName);
console.log(typeof firstName);
console.log(typeof lastName);

let str = "Hello World";
console.log(str.length);
console.log(typeof str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("World"));
console.log(str.slice(0, 5));
console.log(str.replace("World", "JavaScript"));
console.log(str.split(" "));
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.trim());
console.log(str.startsWith("Hello"));
console.log(str.endsWith("World"));
console.log(str.includes("World"));
console.log(str.search("World"));
console.log(str.match(/World/));
console.log(str.concat(" - Welcome to JavaScript!"));
console.log(str.repeat(2));
console.log(str.split("").reverse().join("")); // Reverse the string
console.log(str.substring(0, 5));

const title = "Programming in C";
const author = "balaguru samy";
const year = 2025;

const result = `Title: ${title} is written by ${author} in the year ${year}.`;
console.log(result);

players = ["Rohit", "Virat", "Hardik", "Jasprit"];
console.log(players.join(", ")); // Join array elements into a string
console.log(players.length); // Get the number of elements in the array
console.log(players[0]); // Access the first element
console.log(players[players.length - 1]); // Access the last element
console.log(players.indexOf("Virat")); // Find the index of "Virat"
console.log(players.includes("Hardik")); // Check if "Hardik" is in the array
console.log(players.slice(0, 3)); // Get a sub-array from index 1

coaches = ["Ravi", "Suresh", "Ajay"];
console.log(coaches.concat(players)); // Concatenate two arrays
console.log(players.push("Rishabh")); // Add an element to the end of the array
console.log(players.slice(1, 3)); // Get a sub-array from index 1 to 2
console.log(players.splice(1, 1)); // Remove one element from index 1
console.log(players); // Display the modified array after splice
console.log(players.reverse()); // Reverse the array
console.log(players.sort()); // Sort the array alphabetically
console.log(players.unshift("Rohit")); // Add an element to the beginning of the array
console.log(players.pop()); // Remove the last element from the array
console.log(players.shift()); // Remove the first element from the array
console.log(players); // Display the final state of the array

let aa = 25;
console.log(aa == '25'); // Display the value of 'a'

let number = "100";
console.log(typeof number); // Display the type of 'number'
number = Number(number); // Convert string to number
console.log(typeof number); // Display the type after conversion

let abc = 'hello';
abc = Number(abc); // Convert string to number
console.log(abc); // Display the result of conversion

let x = 'false';
x = Boolean(x); // Convert string to boolean
console.log(x); // Display the boolean value

// create array of values of some products and calculate sum and total after applying tax using functions 

function calculateTotal(products) {
    let taxRate = 0.18; // 18% tax rate
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i];
    }
    total += total * taxRate;
    return total;
}
let productPrices = [100, 200, 300, 400];
let totalPrice = calculateTotal(productPrices);
console.log("Total Price: " + totalPrice);

// 1. Create three new arrays:
//    a. Even numbers
//    b. Odd numbers
//    c. Numbers divisible by 3 but not by 2

let evenNumbers = [];
let oddNumbers = [];
let divisibleByThree = [];

function categorizeNumbers(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        } else {
            oddNumbers.push(arr[i]);
        }
        if (arr[i] % 3 === 0 && arr[i] % 2 !== 0) {
            divisibleByThree.push(arr[i]);
        }
    }
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original Array: " + numbers);
let categorizedNumbers = categorizeNumbers(numbers);
console.log("Even Numbers: " + evenNumbers);
console.log("Odd Numbers: " + oddNumbers);
console.log("Divisible by 3 but not by 2: " + divisibleByThree);


// 2. Find all duplicate elements in an array and store them in a new array
function findDuplicates(arr) {
    let seen = {};
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            duplicates.push(arr[i]);
        } else {
            seen[arr[i]] = true;
        }
    }
    return duplicates;
}
let arrayWithDuplicates = [1, 2, 3, 4, 5, 1, 2, 6, 7];
console.log(arrayWithDuplicates);
let duplicates = findDuplicates(arrayWithDuplicates);
console.log(duplicates);

//3. read a string and remove all white spaces from it
function removeWhiteSpaces(str) {
    return str.replace(/\s+/g, '');
}
let stringWithSpaces = "a b c d";
let stringWithoutSpaces = removeWhiteSpaces(stringWithSpaces);
console.log("Original String: " + stringWithSpaces);
console.log("String Without Spaces: " + stringWithoutSpaces);

//4. check if two strings are rotations of each other
function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let combined = str1 + str1;
    return combined.includes(str2);
}
let string1 = "abcd";
let string2 = "cdab";
console.log(areRotations(string1, string2));

let user = {
    name: "Priyank",
    age: 30,
    email: "priyank@example.com",
    blogs: ["JavaScript Basics", "Advanced JavaScript"],
    login: function () {
        console.log(this.name + " has logged in.");
    },
    logout: () => {
        console.log(user.name + " has logged out.");
    }
};

console.log(user);
console.log(user.name);
console.log(user.blogs);
user.age = 20;
console.log(user.age); // Update age
const key = 'name';
console.log(user[key]); // Access name using variable key
user.login(); // Call the login method
user.logout(); // Call the logout method

//create object called as blog(title,author,content,publish(),unpublish()). 
// create array of blogs and print them using userdefined method

let Blog = function (title, author, content) {
    this.title = title;
    this.author = author;
    this.content = content;
    this.published = false;

    this.publish = function () {
        this.published = true;
    };

    this.unpublish = function () {
        this.published = false;
    };
};
let blogs = [];
function addBlog(title, author, content) {
    let newBlog = new Blog(title, author, content);
    blogs.push(newBlog);
}

addBlog("JavaScript Basics", "Priyank Fichadiya", "This is a blog about JavaScript basics.");
addBlog("Advanced JavaScript", "Priyank Fichadiya", "This is a blog about advanced JavaScript topics.");
blogs[0].publish();
console.log(blogs);

//Assignment
let userBlogSystem = {
    user: {
        name: "Priyank Fichadiya",
        age: 30,
        email: "priyank@example.com",
        blogs: [],
        login: function () {
            console.log(this.name + " has logged in.");
        },
        logout: () => {
            console.log(userBlogSystem.user.name + " has logged out.");
        }
    }
};

function createBlog(title, author, content) {
    let blog = {
        title: title,
        author: author,
        content: content,
        published: false,
        publish: function () {
            this.published = true;
        },
        unpublish: function () {
            this.published = false;
        }
    };
    userBlogSystem.user.blogs.push(blog);
    blog.publish();
}
function unpublishBlog(title) {
    let blog = userBlogSystem.user.blogs.find(b => b.title === title);
    if (!blog) {
        console.log("Blog not found.");
        return;
    }
    blog.unpublish();
    console.log(`Blog "${title}" has been unpublished.`);
}
function listBlogs() {
    userBlogSystem.user.blogs.forEach(blog => {
        console.log(`Title: ${blog.title}, Author: ${blog.author}, Published: ${blog.published}`);
    });
}

function searchBlogs(keyword) {
    return userBlogSystem.user.blogs.filter(blog =>
        blog.title.includes(keyword) || blog.content.includes(keyword)
    );
}

function countPublishedBlogs() {
    return userBlogSystem.user.blogs.filter(blog => blog.published).length;
}

// Example usage
userBlogSystem.user.login();
createBlog("JavaScript Basics", "Priyank Fichadiya", "This is a blog about JavaScript basics.");
createBlog("Advanced JavaScript", "Priyank Fichadiya", "This is a blog about advanced JavaScript topics.");
listBlogs();
unpublishBlog("JavaScript Basics");
listBlogs();
console.log("Published blogs count: " + countPublishedBlogs());

let searchResult = searchBlogs("JavaScript");
console.log("Search Results:");
searchResult.forEach(blog => {
    console.log(`Title: ${blog.title}, Author: ${blog.author}, Published: ${blog.published}`);
});

userBlogSystem.user.logout();
document.addEventListener("DOMContentLoaded", function () {
    let players = ["Rohit", "Virat", "Hardik", "Jasprit"];
    const playerTable = document.querySelector('.table');
    let count = 1;
    players.forEach(player => {
        playerTable.innerHTML += `<tr>
                <td>${count++}</td>
                <td>${player}</td>
            </tr>`;
    });
});


const nameInput = document.querySelector('.nameTxt');
const submitButton = document.querySelector('.submit');
const displayDiv = document.querySelector('.displayDiv');

submitButton.addEventListener('click',  () => {
  displayDiv.innerText += `Hello, ${nameInput.value}`;
  nameInput.value = ''; 
});

const inputData = document.querySelector('.inputData');
const outputData = document.querySelector('.outputData');

inputData.addEventListener('input', () => {
  outputData.value = inputData.value;
    outputData.style.color = 'red';
});