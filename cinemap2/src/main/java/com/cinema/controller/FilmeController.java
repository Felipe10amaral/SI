package com.cinema.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


import com.cinema.model.Filme;
import com.cinema.repository.Filmes;

@Controller
@RequestMapping("film")
public class FilmeController {
	
	private static final String CADASTRO_VIEW = "CadastroFilme";
	
	@Autowired
	private Filmes filmes;
	
	@RequestMapping("/novo")
	public ModelAndView novo() {
		ModelAndView mv = new ModelAndView(CADASTRO_VIEW);
		mv.addObject(new Filme());
		return mv;
	}
	
	//Salvar no Banco de dados
	@RequestMapping(method = RequestMethod.POST)
	public ModelAndView salvar(@Validated Filme filme, Errors errors) {
		ModelAndView mv = new ModelAndView(CADASTRO_VIEW);
		if(errors.hasErrors()) {
			return mv;
		}
		
		filmes.save(filme);
		
		mv.addObject("mensagem","Filme Salvo com Sucesso!");
		return mv;
	}
	
	
	
	@GetMapping
	public ModelAndView listar() {
		ModelAndView mv = new ModelAndView("PesquisaFilme");
		mv.addObject("filmes",filmes.findAll());
		Filme f = new Filme();
		mv.addObject("filme", f);
		return(mv);
	}
	
	@RequestMapping("/excluir/{id}")
	public String excluir(@PathVariable Long id) {
		filmes.deleteById(id);
		return "redirect:/film";
	}
	
	@RequestMapping("/alterar/{idfilme}")
	public ModelAndView alterar(@PathVariable Long id) {
		ModelAndView mv = new ModelAndView("PesquisaFilme");
		mv.addObject("film",filmes.findAll());
		Filme f = filmes.getOne(id);
		mv.addObject( "filme",f);
		return (mv);
	}
	
	/*
	@GetMapping("/film/{idfilme}")
	public ModelAndView editar(@PathVariable("idfilme") Long idfilme) {
		
		//carregar objeto do BD
		Optional<Filme> filme = filmes.findById(idfilme);
		
		ModelAndView modelAndView = new ModelAndView("CADASTRO_VIEW");
		
		modelAndView.addObject("filmeobj", filme.get());
		return modelAndView;
	} 
	
	
	@RequestMapping ("{idfilme}")
	public ModelAndView edicao(@PathVariable Long codigo) {
		System.out.println("codigo aquiiiiiiiiiiiiiiiii" + codigo);
		
		Optional<Filme> filme = filmes.findById(codigo);
		//Filmes filme = filmes.findOne(codigo);
		//ModelAndView mv = new ModelAndView(CADASTRO_VIEW);
		ModelAndView modelAndView = new ModelAndView("CADASTRO_VIEW");
		//mv.addObject(filmes);
		//return mv;
		
		modelAndView.addObject("filmeobj", filme.get());
		return modelAndView;
	}
*/
}
