class Auto{
    patenteAnterior = 0
    constructor(modelo,año,color,precio){
        this.marca = "Jaguar";
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.precio = precio;
        this.patente = this.patenteAnterior+1
        this.patenteAnterior++
    }
}

class Torta{
    constructor(capas, ingredientes, tiempo_coccion, temperatura,relleno=null, colorante=null){
        this.capas = capas
        this.ingredientes = ingredientes
        this.relleno = relleno
        this.color = colorante
        this.tiempo_coccion = tiempo_coccion
        this.temperatura
        this.forma = "redonda"
    }
}


class Usuario{
    cantidad_usuarios = 0
    constructor(nickname,nombre,apellido,email,contraseña){
        this.id = cantidad_usuarios
        this.nickname = nickname
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.contraseña = contraseña
        this.cantidad_usuarios++
    }
}