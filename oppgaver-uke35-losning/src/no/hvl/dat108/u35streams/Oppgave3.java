package no.hvl.dat108.u35streams;

import java.util.Arrays;
import java.util.List;

public class Oppgave3 {

	public static void main(String[] args) {
		// Gjør alle filmtitlene om til store bokstaver, og skriv ut resultatet.
		
		List<String> movies = Arrays.asList("Star Wars", "Inception", "Shrek", "The Matrix", "Spider-Man", "Shutter Island");
		movies.stream().map(String::toUpperCase).forEach(System.out::println);
	}

}
