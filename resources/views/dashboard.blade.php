@extends('app')

@section('contenido')

<div class="row">
  <div class="col-md-12">
    <h1 class="">CRUD Laravel y VueJs</h1>
    <h4>Por: Jr. Gregorio Pineda V.</h4>
  </div>

  <div class="col-md-6">
    <nav>
      <ul class="pagination">
        <li class="page-item" v-if="paginacion.current_page > 1">
          <a class="page-link" href="#"
            @click.prevent="cambioPagina(paginacion.current_page - 1)"><span>Atras</span></a>
        </li>
        <li class="page-item" v-for="pagina in paginaNumero" v-bind:class="[pagina == isActived ? 'active' : '']">
          <a class="page-link" href="#" @click.prevent="cambioPagina(pagina)">
            @{{ pagina }}
          </a>
        </li>
        <li class="page-item" v-if="paginacion.current_page < paginacion.last_page">
          <a class="page-link" href="#"
            @click.prevent="cambioPagina(paginacion.current_page + 1)"><span>Siguiente</span></a>
        </li>
      </ul>
    </nav>

    <hr>

    <a href="#" class="btn btn-primary pull-right" data-toggle="modal" data-target="#Crear">Nueva Tarea</a>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tarea</th>
          <th colspan="2">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tarea in keeps">
          <td width="10px">@{{ tarea.id }}</td>
          <td>@{{ tarea.keep }}</td>
          <td width="10px">
            <a href="#" class="btn btn-warning btn-sm"
            v-on:click.prevent="editarKeep(tarea)">Editar</a>
          </td>
          <td width="10px">
            <a href="#" class="btn btn-danger btn-sm"
            v-on:click.prevent="eliminarKeep(tarea)">Eliminar</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="col-md-6 bg-light">
    <pre>
      <code>@{{ $data }}</code>
    </pre>
  </div>
</div>

@include('crear')
@include('editar')
@endsection
