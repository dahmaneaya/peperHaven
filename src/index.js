function showSidebar(){
   const sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'flex'
 }
 function hideSidebar(){
   const sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'none'
 }


 let namesKeywords = [
  'simon Sinek',
  'J. Clark Scott',
  'Fyodor Dostoyevsky',
  'Agatha Christie',
  'albert Camus',
  'franz Kafka',
  ' Hanya Yanagihara',
  'Najib Mahfouy',
  'jabran khalil gibran',
  'Œuvres complètes',
  'The Metamorphosis',
  'Letter to Melina',
  'The Trial',
  'The Complete stories by Franz Kafka',
  'White Nights',
  'Crime and punishment',
 ];

 const resultsBox = document.querySelector(".result-box");
 const inputBox = document.getElementById("input-box");

 inputBox.onkeyup = function(){
  let result = [];
  let input = inputBox.value;
  if (input.length){
    result = namesKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());

    });

    console.log(result);

  }
  display(result); 

  if(!result.length){
    resultsBox.innerHTML = '';
  }

 }

 function display(result){
  const content = result.map((list)=>{
    return "<li onclick=selectInput(this)>" + list + "</li>";
  }).join("");

  resultsBox.innerHTML = "<ul>" + content + "</ul>";


 }
  function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
  }



  const productContainer = [...document.querySelectorAll('.product-container')];
  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
  const preBtn = [...document.querySelectorAll('.pre-btn')];
  
  productContainer.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;
  
      nxtBtn[i].addEventListener('click', () => {
          item.scrollLeft += containerWidth;
      });
  
      preBtn[i].addEventListener('click', () => {
          item.scrollLeft -= containerWidth;
      });
  });

  let tosetBox = document.getElementById('tosetBox');

  function showToast(){
   let toast = document.createElement('div');
   toast.classList.add('toast');
   toast.innerHTML = 'success';
   tosetBox.appendChild( toast)

  }




 