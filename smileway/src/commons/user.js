import {db} from './constants';

//Brayan: Obtenemos la iformacion del usuario logueado
var usuarioLogueado = {
	/*nombre: 'Arely Nohemy Mendez',
	nombreCorto: 'Arely Melendez',
	telefono: '+504 3245-9483',
	universidad: {
		codigo: 'aFPSX58JwTvcVXnItKEP',
		imagen: 'https://firebasestorage.googleapis.com/v0/b/smile-way.appspot.com/o/universidades%2Funah-min.png?alt=media&token=e7086d26-f44e-42cb-9895-a960efac1d42',
		nombre: 'UNAH | Universidad Nacional Autónoma de Honduras'
	},
	cantidadServicios: 2,
	codigo: 'cy8SLXYa5FysXY5OBqf9',
	correo: 'arely@unah.hn',
	imagen: 'https://firebasestorage.googleapis.com/v0/b/smile-way.appspot.com/o/odontologos%2Fwoman.jpg?alt=media&token=1a1a0265-80b5-4c9c-956c-9fd8e598f7d8',
	listaServicios: [
		{
			codigo: '5rTl5RB5AEt4xgHz64Ei',
			costo: 'Tratamiento gratuito',
			nombre: 'Blanqueamientos'
		}
	]*/
}

//Brayan: Importamos los iconos de los items del menu
obtenerInformacionUsairo = (userId) => {
	//alert(userId)
    db.collection("odontologos/").where('codigo', '==', userId).get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
         	usuarioLogueado = doc.data();
         	//alert(JSON.stringify(usuarioLogueado));
        });
      })
      .catch(function(error) {
          alert('Ha ocurrido un error, intentelo mas tarde')
      });
}

obtenerUsuarioLogueado = () => {
	return usuarioLogueado;
}

obtenerCodigoUsuarioLogueado = () => {
	return usuarioLogueado.codigo;
}

export {obtenerInformacionUsairo, obtenerUsuarioLogueado, obtenerCodigoUsuarioLogueado};