package no.hvl.dat108.u35streams;

import java.util.Arrays;
import java.util.List;

public class Oppgave4 {

	public static void main(String[] args) {
		// Kombiner alle skuespillerne fra flere lister til én enkelt liste, og skriv ut alle navnene.

		
		List<List<String>> actors = Arrays.asList(
				Arrays.asList("Harrison Ford", "Carrie Fisher"),
				Arrays.asList("Leonardo DiCaprio", "Joseph Gordon-Levitt"),
				Arrays.asList("Mike Myers", "Eddie Murphy")
			);
		
		//actors.stream().flatMap(List<String>::stream).forEach(System.out::println);
		actors.stream().flatMap(actorList -> actorList.stream()).forEach(System.out::println);

	}

}
