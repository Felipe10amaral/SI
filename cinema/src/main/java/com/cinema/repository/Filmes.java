package com.cinema.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cinema.model.Filme;

public interface Filmes extends JpaRepository<Filme, Long> {

	

}
