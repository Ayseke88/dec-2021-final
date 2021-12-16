const createNav=()=>{
    let nav =document.querySelector('.navbar');
    nav.innerHTML=`<div class="nav">
    <!-- <img src="img/logo.png" class="brand-logo" alt=""> -->
    <h1 class="brand-logo">FAERIE</h1>
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">Search</button>
        </div>
        <a href="./login.html"><i class="bi bi-person-circle icon-large"></i></a>
        <a href="./P-Det-htmls/cart.html"><i class="bi bi-basket"></i></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="./index.html" class="link">Shopping</a></li>
    <li class="link-item"><a href="./aboutUs.html" class="link">about us</a></li>
    <li class="link-item"><a href="./newsPage.html" class="link">news</a></li>
    <li class="link-item"><a href="#" class="link">services</a></li>
    <li class="link-item"><a href="#" class="link">contact us</a></li>
    
</ul>`; 
}
createNav();