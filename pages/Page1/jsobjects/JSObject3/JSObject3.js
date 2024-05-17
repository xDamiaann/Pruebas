export default {
	Button5onClick () {
		//	write code here
		/*if(Nombre.text != '' && Descripcion.text  != '' && Organizador.text  != '' && Ubicacion.selectedOptionValue  !=0 && HoraInicio.selectedOptionValue !=0&&HoraFin.selectedOptionValue !=0 && Estado.selectedOptionValue !=0 ){
			Eventos.run();
			showModal(Modal3);
			JSObject2;
			closeModal(Modal1);
		}
		else{
			showAlert('Ingrese todos los campos')
		}*/
		if (Nombre.text == '' || 
    Descripcion.text == '' || 
    Organizador.text == '' || 
    Ubicacion.selectedOptionValue == 0 || 
    HoraInicio.selectedOptionValue == 0 || 
    HoraFin.selectedOptionValue == 0 || 
    Estado.selectedOptionValue == 0) {
      		showAlert('Ingrese todos los campos')
		}
	}
}