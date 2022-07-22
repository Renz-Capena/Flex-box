let btn = document.querySelectorAll('.justify_content');
let btn_align_item = document.querySelectorAll('.align-item')
let container = document.querySelector('.container');





btn_align_item.forEach(btn_item=>{
    btn_item.addEventListener('click',()=>{
        switch(btn_item.innerText){
            case'Center':
                container.style.alignItems = 'center';
                break;
            case'Flex-end':
                container.style.alignItems = 'flex-end';
                break;
            case'Flex-start':
                container.style.alignItems = 'flex-start';
                break;
            default:
                alert('alert');
                break;
        }
    })
})











btn.forEach(btn =>{
    btn.addEventListener('click',()=>{

        switch(btn.innerText){
            case'Center':
                container.style.backgroundColor = 'pink';
                container.style.justifyContent = 'center'
                break;
            case'Space-Around':
                container.style.backgroundColor = 'yellow';
                container.style.justifyContent = 'space-around'
                // container.classList.toggle('space-around')
                break;
            case'Space-Between':
                container.style.backgroundColor = 'orange';
                container.style.justifyContent = 'space-between'
                break;
            case'Space-Evenly':
                container.style.backgroundColor = 'blue';
                container.style.justifyContent = 'space-evenly'
                break;
            default:
                alert('Something wrong');
                break;
        }
    })
})