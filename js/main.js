const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
};

// Function to display data with a 3-second gap
const displayData = async () => {
    const data = await fetchData();
    const dataContainer = document.getElementById('output');
    let i = 0;

    const intervalId = setInterval(() => {
        if (i >= data.length) {
            clearInterval(intervalId);
            return;
        }

        const item = data[i];
        const listItem = document.createElement('li');
        listItem.textContent = `${item.id} - ${item.title}`;
        dataContainer.appendChild(listItem);
        i++;
    }, 3000);

    const stopBtn = document.getElementById('stop_btn');
    stopBtn.addEventListener('click', () => {
        console.log('clicked stop button');
        clearInterval(intervalId);
    });
};
