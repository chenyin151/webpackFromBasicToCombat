
document.body.addEventListener('click', function(){
    import(/* webpackPreload:true */'./click.js').then(({default: func}) => {
        func();
    })
})

