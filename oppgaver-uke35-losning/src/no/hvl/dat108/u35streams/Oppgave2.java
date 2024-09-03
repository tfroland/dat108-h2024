package no.hvl.dat108.u35streams;

import java.util.Arrays;
import java.util.List;

public class Oppgave2 {

	public static void main(String[] args) {
		// Filtrer listen slik at bare filmer som starter med "S" blir med, og skriv ut de filtrerte filmene.
		
		List<String> movies = Arrays.asList("Star Wars", "Inception", "Shrek", "The Matrix", "Spider-Man", "Shutter Island");
		
		movies.stream().filter(a -> a.startsWith("S")).forEach(System.out::println);

	}

}
