<form method="POST" v-on:submit.prevent="crearKeep">
  <!-- Modal -->
  <div class="modal fade" id="Crear" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <label for="keep">Crear Tarea</label>
          <input type="text" name="keep" class="form-control" v-model="nuevoKeep">
          <span v-for="error in errors" class="text-danger">@{{ error }}</span>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <input type="submit" class="btn btn-primary" value="Guardar">
        </div>
      </div>
    </div>
  </div>
</form>
