package no.hvl.dat108.f05;

import static no.hvl.dat108.f05.People.people;

import java.util.Optional;
import java.util.OptionalInt;
import java.util.stream.IntStream;

public class Eks4Optional2 {

	public static void main(String[] args) {

		//Finn det minste tallet i intervallet [1,100] - min()
		//Stream-APIet tar automatisk hensyn til at input-stream kan være tom
		//slik at det ikke er noen minste. Pakker inn i Optional.
		OptionalInt minste = IntStream.rangeClosed(1,  100).min();
		System.out.println(minste);
		System.out.println(minste.getAsInt());
		
		//Finn en i people-listen som er 30 eller yngre
		//Stream-APIet tar automatisk hensyn til at input-stream kan være tom
		//slik at det ikke er noen aktuelle personer. Pakker inn i Optional.
		Optional<Person> enUng = people.stream()
				.filter(p -> p.age() <= 70)
				.findAny();
		System.out.println(enUng);
	}

}




