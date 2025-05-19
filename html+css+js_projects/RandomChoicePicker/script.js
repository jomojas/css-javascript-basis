const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTag(e.target.value);

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        randomSelect();
    }
})

function createTag(input) {
    // filter method filters empty string, map method trims each tag
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    }) 
}

function randomSelect() {
    const times = 30;

    // setInterval: repeat the function after a certain interval without stopping, unless using clearInterval
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        if(randomTag !== undefined) {
            highlightTag(randomTag);
            
            setTimeout(() => {
                unHighlightTag(randomTag);
            }, 100);
        }
    }, 100);

    // setTimeout: implement the function only once after a certain time
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100);

    }, times * 100);
}   

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}

