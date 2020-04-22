		new Vue({
			el: '#crud',
      created: function(){
        this.getKeeps();
      },
      data: {
        keeps: [],
				paginacion: {
					'total'       : 0,
          'current_page': 0,
          'per_page'    : 0,
          'last_page'   : 0,
          'from'        : 0,
          'to'          : 0
				},
        nuevoKeep: '',
				llenarKeep: {'id': '', 'keep': ''},
        errors: [],
				offset: 3
      },

			computed: {
				isActived: function(){
					return this.paginacion.current_page;
				},
				/* Número de Página */
				paginaNumero: function(){
					if(!this.paginacion.to){
						return []; // No retorna ningún número de página
					}

          // Desde
					var from = this.paginacion.current_page - this.offset;
					if(from < 1){
						from = 1;
					}

					// Hasta
					var to = from + (this.offset * 2);
					if(to >= this.paginacion.last_page){
						to = this.paginacion.last_page;
					}

					var pagesArray = [];
					while (from <= to) {
						pagesArray.push(from);
						from++;
					}
					return pagesArray;
				}
			},

      methods: {
				/* Muestra la Lista */
        getKeeps: function(pagina) {
          var urlKeeps = 'tareas?page=' + pagina;
          axios.get(urlKeeps).then(response => {
            this.keeps = response.data.listaTareas.data,
						this.paginacion = response.data.paginacion
          });
        },

				/* Crear */
        crearKeep: function () {
          var url = 'tareas';
          axios.post(url, {
            keep: this.nuevoKeep
          }).then(response => {
            this.getKeeps();
            this.nuevoKeep = ''; // Limpia el campo input
            this.errors = [];
            $('#Crear').modal('hide');
            toastr.success('Nueva tarea creada'); // Mensaje
          }).catch(error => {
            this.errors = error.response.data
          });
				},

        /* Editar -> Llena los campos */
				editarKeep: function(dato){
					this.llenarKeep.id   = dato.id;
					this.llenarKeep.keep = dato.keep;
					$('#Editar').modal('show');
				},

				/* Actualizar */
				actualizarKeep: function (id) {
          var url = 'tareas/' + id;
          axios.put(url, this.llenarKeep).then(response => {
            this.getKeeps(); // Listamos
						this.llenarKeep = {'id': '', 'keep': ''}; //
						$('#Editar').modal('hide'); // Ocultar Modal
            toastr.success('Tabla actualizada con exito'); // Mensaje
          }).catch(error => {
						this.errors = error.response.data
					});
        },

        /* Eliminar */
				eliminarKeep: function (tarea) {
          var urlKeeps = 'tareas/' + tarea.id;
          axios.delete(urlKeeps).then(response => {
            this.getKeeps(); // Listamos
            toastr.success('Eliminado correctamente'); // Mensaje
          });
        },
				/* Cambio de Página */
				cambioPagina: function (pagina) {
					this.paginacion.current_page = pagina;
					this.getKeeps(pagina);
				}
      }
	});
