//Exibir a view portfolio.ejs 
module.exports = (app)=>{
    app.get('/portfolio', (req, res)=>{
        res.render('portfolio.ejs')
    })
}