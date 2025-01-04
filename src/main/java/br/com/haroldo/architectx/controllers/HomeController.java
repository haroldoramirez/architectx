package br.com.haroldo.architectx.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import br.com.haroldo.architectx.vo.Card;

@Controller
public class HomeController {
	
	@GetMapping("/")
	public String home(Model model) {
		
		List<Card> cards = createCards();
		
		model.addAttribute("cards", cards);
		
		return "index";
		
	}
	
	@GetMapping("form-validation")
	public String formValidation() {
		return "formValidation";
	}
	
	private static List<Card> createCards() {
		
		List<Card> cards = new ArrayList<>();
				
		Card cardFormValidation = Card.builder()
				.urlImage("/images/coffee.webp")
				.imageAlt("formValidation")
				.title("Forms")
				.subtitle("Frontend inputs validations")
				.description("Case examples to use Javascript or jQuery for validate form inputs")
				.urlPage("input-validations")
				.build();
		
		cards.add(cardFormValidation);
		
		Card cardFormValidation1 = Card.builder()
				.urlImage("/images/coffee.webp")
				.imageAlt("formValidation")
				.title("Forms 2")
				.subtitle("Frontend inputs validations 2")
				.description("Case examples to use Javascript or jQuery for validate form inputs 2")
				.urlPage("input-validations")
				.build();
		
		cards.add(cardFormValidation1);
		
		Card cardFormValidation2 = Card.builder()
				.urlImage("/images/coffee.webp")
				.imageAlt("formValidation")
				.title("Forms 3")
				.subtitle("Frontend inputs validations 2")
				.description("Case examples to use Javascript or jQuery for validate form inputs 3")
				.urlPage("input-validations")
				.build();
		
		cards.add(cardFormValidation2);
		
		return cards;
	}

}
