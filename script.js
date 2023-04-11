// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
async function fetchApis() {
        const startAll = performance.now();
        const allResponses = await Promise.all(
          apiUrls.map(url => fetch(url))
        );
        const endAll = performance.now();

        const startAny = performance.now();
        const anyResponse = await Promise.any(
          apiUrls.map(url => fetch(url))
        );
        const endAny = performance.now();

        const all = document.getElementById("output-all");
	const any = document.getElementById("output-any");
        const allTime = endAll - startAll;
        const anyTime = endAny - startAny;
        all.innerText = allTime;
	any.innerText = anyTime;
      }

fetchApis();
// You can write your code here

