//======== task 1 ========

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

 //       let skills = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js', 'python', 'softskills'];

   //     document.write(`<div>`);
//
//        for (let i = 0; i < skills.length; i++) {
//        const skill = skills[i];
 //       document.write(`<div>${skill}</div>`)
 //       }
 //       document.write(`</div>`);

//___________________________________________________________

//======== task 2 ========

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

//document.write(`<div>`);

//for (let i = 0; i < 10; i++) {

//    document.write(`<div>hello mentor)) ${i}</div>`)
//}
//document.write(`</div>`);

//___________________________________________________________

//======== task 3 ========

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

//document.write(`<div>`);
//let i = 0;
//while (i < 10) {
//    document.write(`<div>any text</div>`);
//    i++;
//}
//document.write(`</div>`);


//______________________________________________________________

//======== task 4 ========

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

//document.write(`<div>`);
//let i = 0;
//while (i < 10) {
//    document.write(`<div>any text ${i}</div>`);
//    i++;
//}
//document.write(`</div>`);

//_____________________________________________________________

//========= task 5 ===========

//- Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Масив:

//    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

//ШАБЛОН:
 //   <ul>
 //       <li>ITEM OF ARRAY</li>
//        <!--
 //           і тд інші об'єкти масиву
 //            ...
 //            ...
 //            ...
 //       -->
//    </ul>

//замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

//-----------------------------------------------

//let skills = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
//     document.write(`<ul>`);
//
//        for (let i = 0; i < skills.length; i++) {
//        const skill = skills[i];
//       document.write(`<li>${skill}</li>`)
//       }
//     document.write(`</ul>`);

//____________________________________________________________________

//======== task 6 ========

//    Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону  Зробити адекватну стилізацію
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

//let products = [
 //   {
//        title: 'milk',
//        price: 22,
//        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
 //   },
//    {
//        title: 'juice',
 //       price: 27,
//    },
//    {
//        title: 'tomato',
//        price: 47,
//        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//    },
//    {
//        title: 'tea',
//        price: 15,
//        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
  //  },
//];

//ШАБЛОН
//<div class="product-card">
  //  <h3 class="product-title">TITLE. Price - PRICE</h3>
//<img src="IMAGE" alt="" class="product-image">
//</div>
//Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту


let products = [
   {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
   },
    {
        title: 'juice',
        price: 27,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'

    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
  },
];

document.write(`<div>`);
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    document.write(`<div class="product-card"><h3 class="product-title">${product.title}</h3><img src="${product.image}" alt="" class="product-image"><p class="product-price">${product.price}</p></div>`)

}
document.write(`</div>`);