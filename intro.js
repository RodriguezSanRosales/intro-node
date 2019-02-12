module.exports = {
    historia: function (personaje, lugar, edad) {
        if(edad > 18 && edad < 80 ){
            return `Había un perrito llamado ${personaje} que le gustaba mucho ir al ${lugar} y siempre era feliz.`
        }else if( edad > 80){
            return `${personaje} se puso a chelear con sus amigos por ${edad} y de tanto tomar se intoxico.`
        }else{
            return `Había una vez una niña llamada ${personaje} que fue a jugar al ${lugar}. `
        }
        
    }
}
