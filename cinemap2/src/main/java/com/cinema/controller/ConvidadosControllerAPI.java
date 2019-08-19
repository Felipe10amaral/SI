package com.cinema.controller;


import java.util.Collection;

import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.cinema.repository.Filmes;
import com.cinema.model.Filme;




@RestController
@RequestMapping("/api")
public class ConvidadosControllerAPI { 

	@Autowired
	private Filmes repo;

	@GetMapping(value = "")
	public Collection<Filme> listaConvidados() {
		return repo.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Optional<Filme> getConvidado(@PathVariable("id") Long id) {
		return this.repo.findById(id);
	}
	

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> removeFilme(@PathVariable("id") Long id) {
		Optional<Filme> c = repo.findById(id);
		if (c == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		repo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PostMapping(value = "")
	public  ResponseEntity<?> saveConvidado(@RequestBody Filme convidado) {
		System.out.println(convidado.getCodigo()+"  "+convidado.getNome()+" "+convidado.getGenero());
		if (convidado.getCodigo() != null) {
			//return new ResponseEntity<>(HttpStatus.OK);
			return new ResponseEntity<Filme> (repo.save(convidado), HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	} 
}
