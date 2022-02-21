module.exports = (app)=> {
    app.get('/localizacao', (req,res)=>{
        res.render('pagina4.ejs')
    })

    //abrir o google maps
    app.get('/mapa', (req,res)=>{
        res.redirect("https://maps.google.com")

    })
}