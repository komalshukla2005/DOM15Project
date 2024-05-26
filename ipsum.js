let lorem = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi quibusdam esse voluptas, sunt ex rerum reiciendis velit quas voluptatem mollitia eligendi minus, doloribus impedit fuga magnam nesciunt tenetur eum! Provident, nisi impedit corrupti, unde molestias rem voluptatem quam esse et, aliquam illum reiciendis? Quo, amet! Incidunt, eos ullam dolor quis deleniti corporis, natus dolores illo animi assumenda, laborum dignissimos! Numquam debitis sunt dolorem maiores rem temporibus omnis ad. Fugit inventore expedita possimus ducimus nesciunt commodi dolorum explicabo sapiente, id, odit deleniti? Dolor atque expedita repellendus perferendis reiciendis minima praesentium. Rem odio ea quam iure possimus excepturi consequuntur error! Aperiam cum tenetur maiores enim, excepturi quibusdam similique. Enim, ad magni! Quae, laudantium beatae? Corrupti, itaque recusandae minus repellendus sapiente harum.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error, exercitationem, facilis omnis, quos commodi officia placeat ipsum velit ipsam veniam autem tempore! Libero perspiciatis reprehenderit iste fuga ipsa a. Doloremque, sunt quaerat maiores incidunt cumque ut eum non deserunt est in expedita, necessitatibus pariatur aliquid culpa saepe unde ipsa sint ex voluptas dolores illo. Dolor aut in nostrum cumque! Maxime fuga eum necessitatibus minus, quo exercitationem eaque error labore, facere nemo amet accusamus recusandae quos deleniti itaque, voluptatum repellendus ab dolorem molestiae et odit? Consequatur nostrum nobis itaque illo. Dolore dignissimos minus nam modi eligendi commodi assumenda corrupti est numquam doloribus eius sed, consequuntur laboriosam qui illo animi beatae earum itaque libero exercitationem tenetur rerum sint accusantium vitae. Facere. Excepturi ipsam, delectus temporibus, doloremque cum laudantium illo, eveniet cupiditate minima nihil aspernatur quibusdam sint minus autem. Earum quae voluptas placeat tempora pariatur sequi, nobis dolore sit molestias repellendus libero?`,
];
const numberofpera = document.querySelector('.numberofpera');
const btn = document.querySelector('.btn');
const textArea = document.querySelector('.text-box');
btn.addEventListener('click', () => {
    let numberOfParagraphs = parseInt(numberofpera.value);
    if (isNaN(numberOfParagraphs) || numberOfParagraphs < 0) {
        numberOfParagraphs = 1; 
    }
    let text = '';
    for (let i = 0; i < numberOfParagraphs; i++) {
        const randomIndex = Math.floor(Math.random() * lorem.length);
        text += `<p style="border: 2px solid red; padding: 10px;">${lorem[randomIndex]}</p>`;
        if (i !== numberOfParagraphs - 1) {
            text += '<div style="margin-bottom: 2rem;"></div>';
        }
    }
    textArea.innerHTML = text;
});

