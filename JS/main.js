'use strict'
//QUERISELECTOR

const formSection = document.querySelector('.js_showForm');
const jsList = document.querySelector('.js-list');
const showButton = document.querySelector('.js-btn-add');
const newCat = document.querySelector ('.js-new-cat')
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputBreed = document.querySelector('.js-input-breed');

//VARIABLES

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;
const kittenTwo = `<li class="card">
<article>

<img
  class="card_img"
  src="https://dev.adalab.es/sphynx-gato.webp"
  alt="sphynx-cat"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">Sphynx</h4>
<p class="card_description">
  Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.
</p>
</article>
</li>`;
const kittenThree = `<li class="card">
<article>
            <img
              class="card_img"
              src="https://dev.adalab.es/maine-coon-cat.webp"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">Cielo</h3>
            <h4 class="card_race">Maine Coon</h4>
            <p class="card_description">
              Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
              bella mirada se ha convertido en una de sus señas de identidad.
              Sus ojos son grandes y las orejas resultan largas y en punta.
            </p>
            </article>
          </li>
`
jsList.innerHTML = kittenOne + kittenTwo + kittenThree;

// const valueDesc = inputDesc.value;
// const valuePhoto = inputPhoto.value;
// const valueName = inputName.value;
// const valueBreed = inputBreed.value;


//EVENTOS
showButton.addEventListener ('click', (event) => {
    formSection.classList.toggle ('collapsed'); 
});

newCat.addEventListener ('click', (event) => {
    event.preventDefault();

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueBreed = inputBreed.value;

  const newKittenHTML = `<li class="card">
<article>
  <img
    class="card_img"
    src="` + valuePhoto + `"
    alt="gatito"
  />
  <h3 class="card_title">` + valueName + `</h3>
  <h4 class="card_race">` + valueBreed + `</h4>
  <p class="card_description">
      ` + valueDesc + `
   </p>
</article>
</li>`;
jsList.innerHTML += newKittenHTML;
});


//CODIGO CUANDO INICIA LA PAGINA