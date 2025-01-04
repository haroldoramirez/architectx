package br.com.haroldo.architectx.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Card {
	
	private long id;
	private String urlImage;
	private String imageAlt;
	private String title;
	private String subtitle;
	private String description;
	private String urlPage;

}