package no.hvl.dat108.u35streams;

import java.util.Arrays;
import java.util.List;

public class Oppgave1 {
	
	// Start med en liste over favorittfilmer, og skriv ut hver film ved hjelp av en strøm.

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<String> movies = Arrays.asList("Star Wars", "Inception", "Shrek", "The Matrix");
		
		movies.stream().forEach(System.out::println);
	}

}
