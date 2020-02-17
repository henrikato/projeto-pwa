(function() {    
  var appHeader = document.querySelector("header.app-header");
  var sectionProdutos = document.querySelector("section.produtos");
  var categoriesHeader = document.querySelector("header.categorias");
  var scrollAnchor = categoriesHeader.offsetTop - categoriesHeader.offsetHeight - 10;
  
  window.addEventListener("scroll", () => {
    var shouldStickHeader = window.scrollY >= 100;
    var shouldStickCategories = window.scrollY >= scrollAnchor;
    
    appHeader.classList.toggle("nested", shouldStickHeader);
    sectionProdutos.classList.toggle("avoid-header", shouldStickCategories);
    categoriesHeader.classList.toggle("sticky", shouldStickCategories);
  })
})()