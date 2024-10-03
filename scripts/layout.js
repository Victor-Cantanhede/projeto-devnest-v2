//////////////////////////////////////////////////////

// SCRIPT PARA AJUSTE DE MARGIN QUANDO O HEADER É FIXO
function fixMarginTop() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const headerHeight = header.offsetHeight;

    main.style.marginTop = headerHeight + 'px';
}

window.addEventListener('load', fixMarginTop);
window.addEventListener('resize', fixMarginTop);

//////////////////////////////////////////////////////